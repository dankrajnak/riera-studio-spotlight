import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SEO from "../Utils/SEO";
import {
  getPrismicRageImage,
  imgixLoader,
  PrismicRageImage,
  RageServiceReturn,
} from "../PrismicRage/shared";
import indexQuery from "../PrismicRage/indexQuery";
import CenterLayout from "../Layout/CenterLayout";

const { Title, Text } = Typography;

const Plane: React.FC<{ zIndex?: number }> = ({ zIndex = 0, children }) => (
  <>
    <div>{children}</div>
    <style jsx>
      {`
        z-index: ${zIndex};
        position: absolute;
        width: 100%;
        height: 100%;
      `}
    </style>
  </>
);

const ExhibitionComp = ({
  title,
  image,
  subtitle,
  start,
  end,
}: {
  title: string;
  image: PrismicRageImage;
  subtitle?: string | null;
  start?: Date | null;
  end?: Date | null;
}) => (
  <>
    <Link href="/exhibition">
      <motion.div layout>
        <motion.div layoutId="excard">
          <div className="card">
            <div className="image-container">
              <Image
                src={image.url}
                className="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-container">
              <Title level={2}>{title}</Title>
              {subtitle && <Text>{subtitle}</Text>}
              {(start || end) && (
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
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
    <style jsx>{`
      .image {
        filter: "grayscale(100%)";
      }
      .image-container {
        position: relative;
        height: 500px;
      }
      .text-container {
        padding: 30px;
      }
      .card {
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
          0 6.7px 5.3px rgba(0, 0, 0, 0.05), 0 12.5px 10px rgba(0, 0, 0, 0.042),
          0 22.3px 17.9px rgba(0, 0, 0, 0.035),
          0 41.8px 33.4px rgba(0, 0, 0, 0.028), 0 100px 80px rgba(0, 0, 0, 0.02);
      }

      .card:hover {
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
  const activeExhibitions = data.activeExhibitions;
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((i) => (i + 1) % data.images.length);
    }, 700);
    return () => {
      clearInterval(interval);
    };
  }, [data.images.length]);

  return (
    <>
      <SEO />
      <CenterLayout height="100vh">
        <div
          style={{
            width: "100vw",
            justifyContent: "space-around",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Title level={1}>Riera Studios</Title>
          <div
            style={{
              width: 600,
              height: 600,
              position: "relative",
              borderRadius: 5,
              overflow: "hidden",
              border: "solid 1px black",
            }}
          >
            {data.images.map((image, imIndex) => (
              <div
                key={imIndex}
                className={`header-image header-image-${imIndex}`}
              >
                <Image
                  src={image.url}
                  objectFit="cover"
                  width={600}
                  height={600}
                  loader={imgixLoader}
                />
              </div>
            ))}
          </div>
        </div>
      </CenterLayout>
      <Plane zIndex={2}>
        <CenterLayout></CenterLayout>
      </Plane>
      {/* <div style={{ height: "100vh" }} /> */}
      <div className="container">
        {activeExhibitions.map(
          (exhibition, index) =>
            // This is included here for type reasons.
            exhibition.__typename === "Exhibition" && (
              <div className="exhibition-container" key={index}>
                <ExhibitionComp
                  image={getPrismicRageImage(exhibition.main_image)}
                  title={exhibition.title}
                  start={
                    exhibition.start_date && new Date(exhibition.start_date)
                  }
                  end={exhibition.end_date && new Date(exhibition.end_date)}
                  key={index}
                />
              </div>
            )
        )}
      </div>
      <style jsx>{`
        .container {
          padding: 80px 50px;
        }
        .exhibition-container {
          margin-bottom: 50px;
        }
      `}</style>
      <style jsx global>
        {`
          .header-image {
            position: absolute;
            margin: 10px;
          }
          .header-image:not(.header-image-${imageIndex}) {
            z-index: -1;
          }
          .header-image-${imageIndex} {
            z-index: 1;
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
