import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useMouse, useWindowSize } from "react-use";
import { useScrollThreshold } from "@danielkrajnak/use-scroll-threshold";
import SEO from "../Utils/SEO";
import { getPrismicRageImage, RageServiceReturn } from "../PrismicRage/shared";
import indexQuery from "../PrismicRage/indexQuery";
import CenterLayout from "../Layout/CenterLayout";
import SplitText from "../Utils/SplitText";
import Chevron from "../Utils/Chevron";

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
  subtitle,
  start,
  end,
}: {
  title: string;
  subtitle?: string | null;
  start?: Date | null;
  end?: Date | null;
}) => (
  <>
    <motion.div
      initial={{ opacity: 0.8 }}
      className="card"
      transition={{ duration: 1.5, ease: "easeOut" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Plane zIndex={2000}>
        <div className="text-container">
          <Link href="/exhibition">
            <div className="text-holder">
              <SplitText
                key="heading"
                className="title"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: (i: number) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.2,
                      ease: "easeOut",
                      duration: 1,
                    },
                  }),
                  hidden: (i: number) => ({
                    y: "100%",
                    transition: {
                      delay: i * 0.1,
                      ease: "easeOut",
                      duration: 0.8,
                    },
                  }),
                }}
              >
                {title}
              </SplitText>
              {subtitle && <div>{subtitle}</div>}
            </div>
          </Link>
        </div>
      </Plane>
    </motion.div>

    <style jsx global>{`
      .text-container {
        width: 50%;
        height: 100%;
        display: flex;
        padding: 0px 80px;
        justify-content: center;
        align-items: center;
      }

      .title {
        font-weight: 200;
        font-size: 5rem;
        font-family: "EB Garamond";
        color: white;
        margin-bottom: 0;
        border-bottom: 2px solid;
        border-color: rgba(18, 18, 18, 0);
        transition: border-color ease 0.5s;
      }
      .text-holder:hover .title {
        border-color: white;
      }
      .text-holder:hover {
        cursor: pointer;
      }
    `}</style>
  </>
);

export default function Home({
  data,
}: {
  data: RageServiceReturn<typeof indexQuery>;
}) {
  // Initialized this way so the array has the right type
  const activeExhibitions = data.activeExhibitions.map((exhibition) => {
    if (exhibition.__typename === "Exhibition") {
      return exhibition;
    }
    return null;
  });

  const [pageNumber, setPageNumber] = useState(0);

  const exhibitionShowing = useMemo(() => {
    if (pageNumber > 0) {
      const exhibition = activeExhibitions[pageNumber - 1];
      return exhibition;
    }
    return null;
  }, [activeExhibitions, pageNumber]);

  useScrollThreshold((delta) => {
    if (delta > 0) {
      setPageNumber((p) => Math.min(p + 1, activeExhibitions.length));
    } else {
      setPageNumber((p) => Math.max(p - 1, 0));
    }
  });

  return (
    <>
      <SEO />
      <div className="container">
        <div className="home-holder">
          <AnimatePresence>
            {pageNumber === 0 ? (
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Plane zIndex={5000}>
                  <CenterLayout>
                    <h3 style={{ marginBottom: 0 }}>RIERA STUDIO SPOTLIGHT</h3>
                  </CenterLayout>
                </Plane>
                <Plane>
                  <div className="scroll-down">
                    <Chevron />
                  </div>
                </Plane>
              </motion.div>
            ) : (
              <ExhibitionComp
                key={"thing" + pageNumber}
                title={exhibitionShowing.title}
                start={
                  exhibitionShowing.start_date &&
                  new Date(exhibitionShowing.start_date)
                }
                end={
                  exhibitionShowing.end_date &&
                  new Date(exhibitionShowing.end_date)
                }
              />
            )}
          </AnimatePresence>
          {exhibitionShowing && (
            <div className="scroll-up">
              <Chevron up />
            </div>
          )}

          <Spotlights
            images={activeExhibitions.map(
              (exhibition) => getPrismicRageImage(exhibition.main_image).url
            )}
            activeImage={pageNumber - 1}
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            /* Hide scrollbar for IE, Edge and Firefox */
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          .container::-webkit-scrollbar {
            display: none;
          }

          .scroll-down,
          .scroll-up {
            position: absolute;
            z-index: 3000;
            width: 100%;
            text-align: center;
          }

          .scroll-down {
            bottom: 20px;
          }

          .scroll-up {
            top: 20px;
          }

          .home-holder {
            height: 100%;
            width: 100%;
            position: fixed;
          }
        `}
      </style>
    </>
  );
}

const ImageSpotlight = ({
  src,
  priority,
  zIndex,
  imgX,
  imgY,
  imgR,
}: {
  src: string;
  priority?: boolean | null;
  zIndex?: number | null;
  imgX?: number | null;
  imgY?: number | null;
  imgR?: number | null;
}) => (
  <>
    <Plane zIndex={zIndex}>
      <div className="image-container">
        <Image
          src={src}
          className="image"
          layout="fill"
          objectFit="cover"
          priority={priority}
        />
      </div>
    </Plane>
    <style jsx>{`
      .image-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background: none;
        clip-path: circle(
          ${imgR || 0}px at ${imgX ? `${imgX}px` : "center"}
            ${imgY ? `${imgY}px` : "center"}
        );
      }
    `}</style>
  </>
);

const Spotlights = ({
  images,
  activeImage,
}: {
  images: string[];
  activeImage: number;
}) => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);
  const { width } = useWindowSize();

  return (
    <AnimatePresence>
      {images.map((image, index) => (
        <motion.div
          animate={index === activeImage ? "visible" : "hidden"}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 1, delay: 0.75, ease: "easeIn" },
            },
            hidden: { opacity: 0 },
          }}
          key={index}
        >
          <div ref={ref}>
            <ImageSpotlight
              src={image}
              imgX={docX}
              imgY={docY}
              imgR={(1 - docX / width) * 600 + 100}
              zIndex={1000}
              priority={index === 0}
            ></ImageSpotlight>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview, locale }) => ({
  props: {
    data: await indexQuery(),
  },
  revalidate: 1,
});
