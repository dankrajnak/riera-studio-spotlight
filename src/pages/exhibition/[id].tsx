import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { motion } from "framer-motion";

import { useMeasure } from "react-use";
import exhibitionQuery, {
  allExhibitionIdsQuery,
} from "../../PrismicRage/exhibitionQuery";
import {
  getPrismicRageImage,
  RageServiceReturn,
} from "../../PrismicRage/shared";
import SEO from "../../Utils/SEO";
import { ColorsA } from "../../Utils/Colors";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container article">
          <h1 className="title">{exhibition.title}</h1>
          <ExhibitionSliceZone slices={exhibition.body} />
        </div>
      </motion.div>
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
          }
        `}
      </style>
    </>
  );
};

const ExhibitionSliceZone = ({
  slices,
}: {
  slices: RageServiceReturn<typeof exhibitionQuery>["body"];
}) => {
  const [ref, { width }] = useMeasure();
  return (
    <>
      {slices.map((slice) => {
        switch (slice.__typename) {
          case "ExhibitionBodyText":
            return <RichText render={slice.primary.text} />;
          case "ExhibitionBodyQuote":
            return (
              <>
                <div
                  className="margin-bottom"
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
          case "ExhibitionBodyImage": {
            const altPaddingX = 10;
            return (
              <div
                ref={ref}
                className="margin-bottom"
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {width && (
                  <Image
                    src={getPrismicRageImage(slice.primary.image).url}
                    width={width}
                    height={
                      slice.primary.image.dimensions.width >
                      slice.primary.image.dimensions.height
                        ? (slice.primary.image.dimensions.height /
                            slice.primary.image.dimensions.width) *
                          width
                        : width
                    }
                    objectFit="contain"
                    alt={slice.primary.image.alt}
                  />
                )}
                {slice.primary.image.alt && (
                  <div
                    style={{
                      backgroundColor: ColorsA.black(0.1),
                      marginTop: 0,
                      padding: `5px ${altPaddingX}px`,
                      maxWidth:
                        slice.primary.image.dimensions.height >
                        slice.primary.image.dimensions.width
                          ? (slice.primary.image.dimensions.width /
                              slice.primary.image.dimensions.height) *
                              width -
                            altPaddingX * 2
                          : null,
                      width: `calc(100% - ${altPaddingX * 2}px)`,
                    }}
                  >
                    <small>{slice.primary.image.alt}</small>
                  </div>
                )}
              </div>
            );
          }
          case "ExhibitionBodySlider":
            return "Slider";
          default:
            return null;
        }
      })}
    </>
  );
};

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
