import { RichText } from "prismic-reactjs";
import LabelledImage from "../../Components/LabelledImage";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Props = ExhibitionSlice<"ExhibitionBodyImage_with_text">["variation"];

const ImageWithText = ({ slice }: { slice: Props }) => {
  return (
    <section className="flex article">
      <div>
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </div>
      {slice.primary.image && <LabelledImage image={slice.primary.image} />}
    </section>
  );
};

export default ImageWithText;
