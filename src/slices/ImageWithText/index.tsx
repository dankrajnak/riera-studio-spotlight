import { RichText } from "prismic-reactjs";
import LabelledImage from "../../Components/LabelledImage";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Props = ExhibitionSlice<"ExhibitionBodyImage_with_text">["variation"];

const ImageWithText = ({ slice }: { slice: Props }) => {
  const text = slice.primary.description && (
    <RichText render={slice.primary.description} />
  );
  const image = slice.primary.image && (
    <LabelledImage image={slice.primary.image} />
  );
  return (
    <section className="columns-lg gap-8 space-y-8">
      {slice.__typename === "ExhibitionBodyImage_with_textImageleft" ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </section>
  );
};

export default ImageWithText;
