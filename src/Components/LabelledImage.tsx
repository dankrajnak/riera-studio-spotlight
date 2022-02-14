import { useMeasure } from "react-use";
import Image from "next/image";
import React, { useState } from "react";
import { IGetPlaiceholderReturn } from "plaiceholder";
import { PrismicRageImage } from "../PrismicRage/shared";
import SVGBlur from "./SVGBlur";

const LabelledImage = ({
  image,
  label,
  blurs,
}: {
  image: PrismicRageImage;
  blurs?: IGetPlaiceholderReturn | null;
  label?: string | null;
}) => {
  const [ref, { width }] = useMeasure();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className=" mb-0"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {width &&
        (blurs ? (
          <SVGBlur
            onLoadingComplete={() => setImageLoaded(true)}
            img={blurs.img}
            svg={blurs.svg}
            width={width}
            height={
              image.dimensions.width > image.dimensions.height
                ? (image.dimensions.height / image.dimensions.width) * width
                : width
            }
            objectFit="contain"
            alt={image.alt}
          />
        ) : (
          <Image
            onLoadingComplete={() => setImageLoaded(true)}
            src={image.url}
            width={width}
            height={
              image.dimensions.width > image.dimensions.height
                ? (image.dimensions.height / image.dimensions.width) * width
                : width
            }
            objectFit="contain"
            alt={image.alt}
          />
        ))}
      {label && (
        <div
          style={{
            display: "flex",
            marginTop: 5,
            padding: `10px ${0}px`,
            maxWidth:
              image.dimensions.height > image.dimensions.width
                ? (image.dimensions.width / image.dimensions.height) * width
                : null,
            width: "100%",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity .5s ease",
          }}
        >
          <small>{label}</small>
        </div>
      )}
    </div>
  );
};

export default LabelledImage;
