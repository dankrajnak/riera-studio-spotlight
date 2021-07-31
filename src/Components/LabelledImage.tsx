import { useMeasure } from "react-use";
import Image from "next/image";
import { PrismicRageImage } from "../PrismicRage/shared";
import { ColorsA } from "../Utils/Colors";

const LabelledImage = ({
  image,
  label,
  blurDataURL,
}: {
  image: PrismicRageImage;
  label?: string | null;
  blurDataURL?: string | null;
}) => {
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
      {width &&
        (blurDataURL ? (
          <Image
            src={image.url}
            width={width}
            height={
              image.dimensions.width > image.dimensions.height
                ? (image.dimensions.height / image.dimensions.width) * width
                : width
            }
            placeholder={"blur"}
            blurDataURL={blurDataURL}
            objectFit="contain"
            alt={image.alt}
          />
        ) : (
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
        ))}
      {label && (
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
          <small>{label}</small>
        </div>
      )}
    </div>
  );
};

export default LabelledImage;
