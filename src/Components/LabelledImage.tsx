import { useMeasure } from "react-use";
import Image from "next/image";
import React, { useState } from "react";
import { PrismicRageImage } from "../PrismicRage/shared";
import { ColorsA } from "../Utils/Colors";
import { ImageWithBlur } from "../PrismicRage/placeholder";
import SVGBlur from "./SVGBlur";

const LabelledImage = ({
  image,
  label,
}: {
  image: ImageWithBlur;
  label?: string | null;
}) => {
  const altPaddingX = 10;
  const [ref, { width }] = useMeasure();
  const [imageLoaded, setImageLoaded] = useState(false);

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
      {width &&
        (true ? (
          <SVGBlur
            onLoadingComplete={() => setImageLoaded(true)}
            img={image.blurs.img}
            svg={image.blurs.svg}
            width={width}
            height={
              image.img.dimensions.width > image.img.dimensions.height
                ? (image.img.dimensions.height / image.img.dimensions.width) *
                  width
                : width
            }
            objectFit="contain"
            alt={image.img.alt}
          />
        ) : (
          <Image
            onLoadingComplete={() => setImageLoaded(true)}
            src={image.img.url}
            width={width}
            height={
              image.img.dimensions.width > image.img.dimensions.height
                ? (image.img.dimensions.height / image.img.dimensions.width) *
                  width
                : width
            }
            objectFit="contain"
            alt={image.img.alt}
          />
        ))}
      {label && (
        <div
          style={{
            backgroundColor: ColorsA.black(0.1),
            marginTop: 0,
            padding: `5px ${altPaddingX}px`,
            maxWidth:
              image.img.dimensions.height > image.img.dimensions.width
                ? (image.img.dimensions.width / image.img.dimensions.height) *
                    width -
                  altPaddingX * 2
                : null,
            width: `calc(100% - ${altPaddingX * 2}px)`,
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
