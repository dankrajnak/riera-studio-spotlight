import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";
import { useWindowSize, useMouse } from "react-use";
import Image from "next/image";
import Plane from "../Layout/Plane";

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

export default Spotlights;
