import { GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import exhibitionQuery, {
  allExhibitionIdsQuery,
} from "../../PrismicRage/exhibitionQuery";
import {
  getPrismicRageImage,
  RageServiceReturn,
} from "../../PrismicRage/shared";
import SEO from "../../Utils/SEO";
import LabelledImage from "../../Components/LabelledImage";
import AnimateOnScroll from "../../Components/AnimateOnScroll";
import { PreviewProp } from "../api/preview";

type Props = {
  exhibition: RageServiceReturn<typeof exhibitionQuery>;
};

const Exhibition = ({ exhibition }: Props) => {
  if (!exhibition) {
    return null;
  }

  return (
    <SimpleReactLightbox>
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
        {exhibition.galleryImages.length > 0 && (
          <div className="gallery-container">
            <hr />
            <h1>Gallery</h1>

            <div className="gallery-grid">
              {exhibition.galleryImages.map((image, i) => (
                <div className="gallery-item" key={i}>
                  <SRLWrapper
                    key={i}
                    options={{
                      autoplaySpeed: 0,
                      disableKeyboardControls: true,
                      buttons: {
                        showDownloadButton: false,
                        showAutoplayButton: false,
                        showFullscreenButton: true,
                        showNextButton: false,
                        showPrevButton: false,
                        showThumbnailsButton: false,
                      },
                      thumbnails: {
                        showThumbnails: false,
                      },
                      showProgressBar: false,
                    }}
                  >
                    <LabelledImage
                      image={image.image}
                      label={image.title}
                      key={i}
                    />
                  </SRLWrapper>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
      <style jsx>
        {`
          .title {
            font-family: "EB Garamond";
            word-break: break-word;
          }
          .title-image {
            position: relative;
            width: 100%;
            height: 400px;
            overflow-y: hidden;
          }
          .gallery-container {
            margin: 0 40px 40px 40px;
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: 33% 33% 33%;
          }
          .gallery-item {
            padding: 10px;
            margin-top: 20px;
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
    </SimpleReactLightbox>
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
              <SRLWrapper
                key={i}
                options={{
                  autoplaySpeed: 0,
                  disableKeyboardControls: true,
                  buttons: {
                    showDownloadButton: false,
                    showAutoplayButton: false,
                    showFullscreenButton: true,
                    showNextButton: false,
                    showPrevButton: false,
                    showThumbnailsButton: false,
                  },
                  thumbnails: {
                    showThumbnails: false,
                  },
                  showProgressBar: false,
                }}
              >
                <AnimateOnScroll>
                  <div className="clickable">
                    <LabelledImage
                      label={slice.primary.image?.alt}
                      image={getPrismicRageImage(slice.primary.image)}
                    />
                  </div>
                </AnimateOnScroll>
              </SRLWrapper>
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
