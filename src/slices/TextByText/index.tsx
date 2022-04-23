import React from "react";
import { ExhibitionSlice } from "../../PrismicRage/shared";
import RichText from "../../PrismicRage/RichText";

type Slice = ExhibitionSlice<"ExhibitionBodyText_by_text">["variation"];

const TextByText = ({ slice }: { slice: Slice }) => (
  <section className="grid gap-3 md:grid-cols-2 grid-cols-1">
    <div>{slice.primary.left && <RichText field={slice.primary.left} />}</div>
    <div>{slice.primary.right && <RichText field={slice.primary.right} />}</div>
  </section>
);

export default TextByText;
