import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Quote from "../../Components/Quote";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Slice = ExhibitionSlice<"ExhibitionBodyQuote_by_text">["variation"];

const QuoteByText = ({ slice }: { slice: Slice }) => {
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
  const text = slice.primary.text && (
    <PrismicRichText field={slice.primary.text} />
  );

  const isLeft = slice.__typename === "ExhibitionBodyQuote_by_textTextleft";

  return (
    <section className="grid gap-3 md:grid-cols-2 grid-cols-1">
      <div>{isLeft ? text : quote}</div>
      <div>{isLeft ? quote : text}</div>
    </section>
  );
};

export default QuoteByText;
