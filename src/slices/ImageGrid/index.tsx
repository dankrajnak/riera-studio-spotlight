import LabelledImage from "../../Components/LabelledImage";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Props = ExhibitionSlice<"ExhibitionBodyImage_grid">["variation"];

const ImageWithText = ({ slice }: { slice: Props }) => {
  const images = slice.items
    .map(({ image }, i) =>
      image ? (
        <LabelledImage key={i} image={image.img} blurs={image.blurs} />
      ) : null
    )
    .filter((image) => image);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, i) => (
        <div className="max-h-screen md:max-h-96" key={i}>
          {image}
        </div>
      ))}
    </section>
  );
};

export default ImageWithText;
