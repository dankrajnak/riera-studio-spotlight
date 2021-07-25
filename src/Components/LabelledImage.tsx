import { useMeasure } from "react-use";
import Image from "next/image";
import { PrismicRageImage } from "../PrismicRage/shared";
import { ColorsA } from "../Utils/Colors";

const LabelledImage = ({ image }: { image: PrismicRageImage }) => {
  const altPaddingX = 10;
  const [ref, { width }] = useMeasure();

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
      {width && (
        <Image
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
      )}
      {image.alt && (
        <div
          style={{
            backgroundColor: ColorsA.black(0.1),
            marginTop: 0,
            padding: `5px ${altPaddingX}px`,
            maxWidth:
              image.dimensions.height > image.dimensions.width
                ? (image.dimensions.width / image.dimensions.height) * width -
                  altPaddingX * 2
                : null,
            width: `calc(100% - ${altPaddingX * 2}px)`,
          }}
        >
          <small>{image.alt}</small>
        </div>
      )}
    </div>
  );
};

export default LabelledImage;
