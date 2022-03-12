import { PrismicRichText } from "@prismicio/react";
import * as prismicT from "@prismicio/types";

const Quote = ({
  text,
  author,
}: {
  text: prismicT.RichTextField;
  author: string;
}) => {
  return (
    <div className="quote mb-3 border-l-2 border-gray-500 pl-7 font-serifDisplay text-xl leading-snug ">
      <div className="-mb-6">
        <PrismicRichText field={text} />
      </div>
      {author && <small className=" text-gray-500">&mdash;{author}</small>}
    </div>
  );
};

export default Quote;
