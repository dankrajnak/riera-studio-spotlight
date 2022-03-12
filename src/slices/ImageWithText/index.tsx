import { PrismicRichText } from "@prismicio/react";
import { useMeasure } from "react-use";
import LabelledImage from "../../Components/LabelledImage";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Props = ExhibitionSlice<"ExhibitionBodyImage_with_text">["variation"];

const ImageWithText = ({ slice }: { slice: Props }) => {
  const [textRef, { height: textHeight }] = useMeasure();

  const text = slice.primary.description && (
    <PrismicRichText field={slice.primary.description} />
  );
  const image = slice.primary.image && (
    <LabelledImage image={slice.primary.image} />
  );
  const isLeft = slice.__typename === "ExhibitionBodyImage_with_textImageleft";

  const [imageRef, { height: imageHeight }] = useMeasure();

  return (
    <div>
      <div
        ref={imageRef}
        className={`w-full md:w-2/5 mb-3 mx-auto  ${
          isLeft ? "md:float-left" : "md:float-right"
        }`}
      >
        {image}
      </div>
      <div ref={textRef}>{text}</div>
      <div style={{ height: Math.max(0, imageHeight - textHeight) }} />
    </div>
  );
};

export default ImageWithText;
