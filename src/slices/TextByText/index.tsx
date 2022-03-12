import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { ExhibitionSlice } from "../../PrismicRage/shared";

type Slice = ExhibitionSlice<"ExhibitionBodyText_by_text">["variation"];

const TextByText = ({ slice }: { slice: Slice }) => (
  <section className="grid gap-3 md:grid-cols-2 grid-cols-1">
    <div>
      {slice.primary.left && <PrismicRichText field={slice.primary.left} />}
    </div>
    <div>
      {slice.primary.right && <PrismicRichText field={slice.primary.right} />}
    </div>
  </section>
);

export default TextByText;
