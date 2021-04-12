import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SEO from "../Utils/SEO";
import {
  getPrismicRageImage,
  imgixLoader,
  PrismicRageImage,
  RageServiceReturn,
} from "../PrismicRage/shared";
import indexQuery from "../PrismicRage/indexQuery";
import CenterLayout from "../Layout/CenterLayout";
import SplitText from "../Utils/SplitText";

const { Title, Text } = Typography;

const Plane: React.FC<{ zIndex?: number }> = ({ zIndex = 0, children }) => (
  <>
    <div>{children}</div>
    <style jsx>
      {`
        div {
          z-index: ${zIndex};
          position: absolute;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </>
);

const ExhibitionComp = ({
  title,
  image,
  subtitle,
  secondaryImage,
  start,
  end,
}: {
  title: string;
  image: PrismicRageImage;
  secondaryImage: string;
  subtitle?: string | null;
  start?: Date | null;
  end?: Date | null;
}) => (
  <>
    <Link href="/exhibition">
      <motion.div
        initial={{ opacity: 0.8 }}
        className="card"
        transition={{ duration: 1.5, ease: "easeOut" }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Plane>
          <div className="image-container">
            <Image
              loader={imgixLoader}
              src={image.url}
              className="image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </Plane>
        <Plane zIndex={20}>
          <CenterLayout>
            <div className="secondary-image">
              {/* <motion.div
                initial={{
                  opacity: 0,
                  transformPerspective: "75rem",
                  rotateY: "18deg",
                }}
                animate={{
                  opacity: 1,
                  transformPerspective: "75rem",
                  rotateY: "0deg",
                }}
                transition={{ duration: 1.5 }}
              >
                <Image
                  loader={imgixLoader}
                  src={secondaryImage}
                  className="image"
                  width={500}
                  height={600}
                  objectFit="cover"
                />
              </motion.div> */}
            </div>
          </CenterLayout>
        </Plane>
        <Plane zIndex={2000}>
          <CenterLayout>
            <div className="text-container">
              <SplitText
                className="title"
                initial={{ y: "100%" }}
                animate="visible"
                transition={{
                  ease: "anticipate",
                  duration: 5,
                  repeat: Infinity,
                }}
                variants={{
                  visible: (i: number) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.2 + 0.5,
                      ease: "easeOut",
                      duration: 1.5,
                      // repeat: Infinity,
                    },
                  }),
                }}
              >
                {title}
              </SplitText>
              {subtitle && <Text>{subtitle}</Text>}
              {/* {(start || end) && (
                <Text>
                  {start &&
                    Intl.DateTimeFormat("en-US", {
                      month: "long",
                    }).format(start)}{" "}
                  &ndash;{" "}
                  {end &&
                    Intl.DateTimeFormat("en-US", {
                      month: "long",
                      year: "numeric",
                    }).format(end)}{" "}
                </Text>
              )} */}
            </div>
          </CenterLayout>
        </Plane>
      </motion.div>
    </Link>
    <style jsx global>{`
      .title {
        font-weight: 200;
        font-size: 20vh;
        font-family: "EB Garamond";
        color: white;
        margin-bottom: 0;
      }
    `}</style>
    <style jsx>{`
      .image-container {
        position: relative;
        height: 100%;
      }
      .secondary-image {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }

      .card {
        height: 100vh;
      }

      .card:hover {
        cursor: pointer;
      }
    `}</style>
  </>
);

const SPOTLIGHT_ANIMATION_DURATION = 1.5;

export default function Home({
  data,
}: {
  data: RageServiceReturn<typeof indexQuery>;
}) {
  const activeExhibitions = data.activeExhibitions;
  const { scrollYProgress } = useViewportScroll();

  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [homePageInFront, setHomePageInFront] = useState(true);

  const timeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    scrollYProgress.onChange(() => {
      clearTimeout(timeout.current);
      if (scrollYProgress.get() > 0) {
        setHomePageInFront(false);
        setSpotlightOpen(true);
      } else {
        timeout.current = setTimeout(() => {
          setHomePageInFront(true);
        }, SPOTLIGHT_ANIMATION_DURATION * 1000);
        setSpotlightOpen(false);
      }
    });
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [scrollYProgress]);

  return (
    <>
      <SEO />
      <div className="container">
        <div className="home-holder">
          <Plane>
            <CenterLayout>
              <h3 style={{ marginBottom: 0 }}>RIERA STUDIO SPOTLIGHT</h3>
            </CenterLayout>
          </Plane>
          <Plane zIndex={homePageInFront ? -1 : 1000}>
            <div
              className={`image-container ${spotlightOpen ? "all-of-me" : ""}`}
            >
              <AnimatePresence>
                {spotlightOpen &&
                  activeExhibitions.map(
                    (exhibition, index) =>
                      // This is included here for type reasons.
                      exhibition.__typename === "Exhibition" && (
                        <div className="exhibition-container" key={index}>
                          <ExhibitionComp
                            image={getPrismicRageImage(exhibition.main_image)}
                            title={exhibition.title}
                            secondaryImage={
                              getPrismicRageImage(exhibition.secondary_image)
                                .url
                            }
                            start={
                              exhibition.start_date &&
                              new Date(exhibition.start_date)
                            }
                            end={
                              exhibition.end_date &&
                              new Date(exhibition.end_date)
                            }
                            key={index}
                          />
                        </div>
                      )
                  )}
              </AnimatePresence>
            </div>
          </Plane>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: calc(100vh + 10px);
          }
          .home-holder {
            height: 100%;
            width: 100%;
            position: fixed;
          }
          .image-container {
            position: relative;
            height: 100%;
            transition: clip-path 1.5s ease;
            clip-path: circle(0% at center);
          }
          .all-of-me {
            clip-path: circle(100% at center);
          }
          svg {
            position: fixed;
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, locale }) => ({
  props: {
    data: await indexQuery(),
  },
  revalidate: 1,
});
