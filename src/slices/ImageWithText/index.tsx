import { RichText } from "prismic-reactjs";
import LabelledImage from "../../Components/LabelledImage";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Props = ExhibitionSlice<"ExhibitionBodyImage_with_text">["variation"];

const ImageWithText = ({ slice }: { slice: Props }) => {
  return (
    <section>
      <span className="title">
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.image && <LabelledImage image={slice.primary.image} />}
      <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
      `}</style>
    </section>
  );
};

export default ImageWithText;
