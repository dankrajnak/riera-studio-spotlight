import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

import exhibitionQuery, {
  allExhibitionIdsQuery,
} from "../../PrismicRage/exhibitionQuery";
import { RageServiceReturn } from "../../PrismicRage/shared";
import SEO from "../../Utils/SEO";

type Props = {
  exhibition: RageServiceReturn<typeof exhibitionQuery>;
};

const Exhibition = ({ exhibition }: Props) => {
  if (!exhibition) {
    return null;
  }

  return (
    <>
      <SEO title={exhibition.title} />
      <div className="title-image">
        <Image
          src={exhibition.main_image.url}
          layout="fill"
          objectFit="cover"
          alt=""
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
    </>
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
  },
  revalidate: 1,
});

export default Exhibition;
