import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

import exhibitionQuery, {
  allExhibitionIdsQuery,
} from "../../PrismicRage/exhibitionQuery";
import {
  getPrismicRageImage,
  RageServiceReturn,
} from "../../PrismicRage/shared";
import MenuLayout from "../../Layout/MenuLayout";
import getMenu from "../../PrismicRage/getMenu";

type Props = {
  exhibition: RageServiceReturn<typeof exhibitionQuery>;
  menu: RageServiceReturn<typeof getMenu>;
};

const Exhibition = ({ exhibition, menu }: Props) => {
  if (!exhibition) {
    return null;
  }

  return (
    <MenuLayout exhibitions={menu}>
      <div className="title-image">
        <Image
          src={getPrismicRageImage(exhibition.main_image).url}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container">
        <h1 className="title">{exhibition.title}</h1>
        <ExhibitionSliceZone slices={exhibition.body} />
      </div>
      <style jsx>
        {`
          .title {
            font-family: "EB Garamond";
          }
          .title-image {
            position: relative;
            width: 100%;
            height: 400px;
            overflow-y: hidden;
          }
          .container {
            margin: auto;
            width: 70%;
            margin-bottom: 50px;
            line-height: 1.5;
          }
        `}
      </style>
      <style jsx global>
        {`
          html,
          body {
            color: #222;
            background-color: #efefef !important;
          }import getMenu from '../../PrismicRage/menuQuery';

        `}
      </style>
    </MenuLayout>
  );
};

const ExhibitionSliceZone = ({
  slices,
}: {
  slices: RageServiceReturn<typeof exhibitionQuery>["body"];
}) => (
  <>
    {slices.map((slice) => {
      switch (slice.__typename) {
        case "ExhibitionBodyText":
          return <RichText render={slice.primary.text} />;
        case "ExhibitionBodyQuote":
          return (
            <>
              <div
                style={{
                  borderLeft: "solid 3px #999",
                  paddingLeft: 8,
                  fontFamily: "EB Garamond",
                  fontSize: "1.4rem",
                  lineHeight: 1,
                }}
              >
                <RichText render={slice.primary.text} />
                <small style={{ fontSize: "1rem", color: "#999" }}>
                  &mdash;{slice.primary.author}
                </small>
              </div>
            </>
          );
        default:
          return "not found";
      }
    })}
  </>
);

export const getStaticPaths = async () => {
  const result = await allExhibitionIdsQuery();
  const paths = result.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => ({
  props: {
    exhibition: await exhibitionQuery(params.id),
    menu: await getMenu(),
  },
  revalidate: 1,
});

export default Exhibition;
