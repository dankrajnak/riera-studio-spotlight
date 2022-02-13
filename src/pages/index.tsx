import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { useScrollThreshold } from "@danielkrajnak/use-scroll-threshold";
import SEO from "../Utils/SEO";
import { getPrismicRageImage, RageServiceReturn } from "../PrismicRage/shared";
import indexQuery from "../PrismicRage/indexQuery";
import CenterLayout from "../Layout/CenterLayout";
import SplitText from "../Utils/SplitText";
import Chevron from "../Utils/Chevron";
import LinkHelper from "../Utils/LinkHelper";
import A11y from "../Utils/A11y";
import Plane from "../Layout/Plane";
import Spotlights from "../Components/Spotlights";
import { withDontShowMenuButton } from "./_app";

const ExhibitionComp = ({
  title,
  subtitle,
  id,
}: {
  id: string;
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
          <Link href={LinkHelper.getExhibitionLink(id)}>
            <a className="title-holder">
              <SplitText
                key="heading"
                className="title-link"
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
                      delay: i * 0.2,
                      ease: "easeOut",
                      duration: 1,
                    },
                  }),
                }}
              >
                {title}
              </SplitText>
              {subtitle && <div>{subtitle}</div>}
            </a>
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
      .title-link {
        font-weight: 200;
        font-size: 5rem;
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

  const exhibitionNames = activeExhibitions.map((ex) => ex._meta.uid);
  const router = useRouter();
  const { p } = router.query;

  const pageNumber =
    exhibitionNames.findIndex(
      (name) => name === (Array.isArray(p) ? p[0] : p)
    ) + 1;

  const isLastPage = pageNumber === exhibitionNames.length;

  const exhibitionShowing = useMemo(() => {
    if (pageNumber > 0) {
      const exhibition = activeExhibitions[pageNumber - 1];
      return exhibition;
    }
    return null;
  }, [activeExhibitions, pageNumber]);

  const incrementPage = () => {
    if (!isLastPage) {
      LinkHelper.replaceQueryParams({ p: exhibitionNames[pageNumber] }, router);
    }
  };

  const decrementPage = () => {
    if (pageNumber === 0) {
      return;
    }
    if (pageNumber === 1) {
      LinkHelper.replaceQueryParams({ p: null }, router);
    }
    LinkHelper.replaceQueryParams(
      { p: exhibitionNames[pageNumber - 2] },
      router
    );
  };

  useScrollThreshold(
    (delta) => {
      if (delta > 0) {
        incrementPage();
      } else {
        decrementPage();
      }
    },
    0.5,
    1000
  );

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
              </motion.div>
            ) : (
              <ExhibitionComp
                id={exhibitionShowing._meta.uid}
                key={"thing" + pageNumber}
                title={exhibitionShowing.title}
              />
            )}
          </AnimatePresence>

          {!isLastPage && (
            <div
              className="scroll-down"
              role="button"
              aria-label="Next Page"
              {...A11y.clickOrKeyboard(() => incrementPage())}
              tabIndex={0}
            >
              <Chevron />
            </div>
          )}
          {pageNumber > 0 && (
            <div
              className="scroll-up"
              role="button"
              aria-label="Previous Page"
              {...A11y.clickOrKeyboard(() => decrementPage())}
              tabIndex={0}
            >
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
            z-index: 10000;
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

export const getStaticProps: GetStaticProps = async () => ({
  props: withDontShowMenuButton({
    data: await indexQuery(),
  }),
  revalidate: 1,
});
