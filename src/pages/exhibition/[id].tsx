import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

import exhibitionQuery, {
  allExhibitionIdsQuery,
} from "../../PrismicRage/exhibitionQuery";
import { RageServiceReturn } from "../../PrismicRage/shared";
import SEO from "../../Utils/SEO";
import LabelledImage from "../../Components/LabelledImage";
import { PreviewProp } from "../api/preview";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need

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
          <h1 className="title font-serifDisplay break-words">
            {exhibition.title}
          </h1>
          <ExhibitionSliceZone slices={exhibition.body} />
        </div>
        {exhibition.galleryImages.length > 0 && (
          <div className="lg:mx-10 sm:mx-6 mx-2 mb-10">
            <hr className=" border-black mb-3" />
            <h1 className="font-serifDisplay text-3xl mb-8">Gallery</h1>

            <div className="columns-xs space-y-8 gap-8">
              {exhibition.galleryImages.map((image, i) => (
                <div className=" break-inside-avoid-column" key={i}>
                  <LabelledImage
                    image={image.image.img}
                    blurs={image.image.blurs}
                    label={image.image.img.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
      <style jsx>
        {`
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
  return (
    <>
      {slices.map((slice, i) => {
        switch (slice.__typename) {
          case "ExhibitionBodyText":
            return <RichText key={i} render={slice.primary.text} />;
          case "ExhibitionBodyQuote":
            return (
              <Fragment key={i}>
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
              </Fragment>
            );
          case "ExhibitionBodyImage": {
            return (
              <div className="clickable my-5">
                <LabelledImage
                  label={slice.primary.image?.img.alt}
                  image={slice.primary.image.img}
                  blurs={slice.primary.image.blurs}
                />
              </div>
            );
          }
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
  preview,
  previewData,
}) => {
  return {
    props: {
      exhibition: preview
        ? await exhibitionQuery(params.id, (previewData as PreviewProp)?.ref)
        : await exhibitionQuery(params.id),
    },
    revalidate: 1,
  };
};

export default Exhibition;
