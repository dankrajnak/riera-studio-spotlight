import React from "react";
import { ExhibitionSlice } from "../../PrismicRage/shared";
import LabelledImage from "../../Components/LabelledImage";
import Quote from "../../Components/Quote";

type Slice = ExhibitionSlice<"ExhibitionBodyQuote_by_image">["variation"];

const QuoteByImage = ({ slice }: { slice: Slice }) => {
  const quote = slice.primary.quoteText && (
    <div className="flex h-full w-full items-center">
      <div>
        <Quote
          text={slice.primary.quoteText}
          author={slice.primary.quoteAuthor}
        />
      </div>
    </div>
  );
  const image = slice.primary.image && (
    <LabelledImage image={slice.primary.image} />
  );

  const isLeft = slice.__typename === "ExhibitionBodyQuote_by_imageImageleft";

  return (
    <section className="grid gap-3 md:grid-cols-2 grid-cols-1">
      <div>{isLeft ? image : quote}</div>
      <div>{isLeft ? quote : image}</div>
    </section>
  );
};

export default QuoteByImage;
