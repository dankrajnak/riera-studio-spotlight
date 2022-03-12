import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import state from "../../.slicemachine/libraries-state.json";
import { components } from "../slices/index";

const SliceSimulatorPage = () => (
  <SliceSimulator
    // The `sliceZone` prop should be a function receiving slices and rendering them using your `SliceZone` component.
    // @ts-ignore prismic sucks.
    sliceZone={({ slices }) => (
      <SliceZone slices={slices} components={components} />
    )}
    // @ts-ignore see above.
    state={state}
  />
);

export default SliceSimulatorPage;
