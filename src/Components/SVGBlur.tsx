import { ImageProps } from "next/image";
import { IGetPlaiceholderReturn } from "plaiceholder";
import { createElement } from "react";
import Image from "next/image";
import { useMeasure } from "react-use";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

interface Props extends Partial<ImageProps> {
  svg: IGetPlaiceholderReturn["svg"];
  img: IGetPlaiceholderReturn["img"];
  alt: string;
  fill?: boolean | null;
}

export const SVGBlur = ({ svg, img, alt, fill, ...otherImageProps }: Props) => {
  // If the image is "contained", we need to do some extra work to figure out how big the blur should be.
  let svgWidth = img.width;
  const [ref, { width }] = useMeasure();
  if (otherImageProps.objectFit === "contain") {
    svgWidth = img.height > img.width ? (img.width / img.height) * width : null;
  }

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        lineHeight: 0,
        ...(fill ? { width: "100%", height: "100%" } : {}),
      }}
    >
      {createElement(
        svg[0],
        {
          ...svg[1],
          style: {
            ...svg[1].style,
            width: svgWidth + "px",
            height: "97%",
          },
        },
        svg[2].map((child) =>
          createElement(child[0], {
            key: [child[1].x, child[1].y].join(),
            ...child[1],
          })
        )
      )}
      <LightGallery speed={100} plugins={[lgZoom]} counter={false}>
        <a data-src={img.src} className="cursor-pointer">
          <Image
            src={img.src}
            width={otherImageProps.layout === "fill" ? undefined : img.width}
            height={otherImageProps.layout === "fill" ? undefined : img.height}
            alt={alt}
            {...otherImageProps}
          />
        </a>
      </LightGallery>
    </div>
  );
};

export default SVGBlur;
