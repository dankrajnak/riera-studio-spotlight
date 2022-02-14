import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";

import state from "../../.slicemachine/libraries-state.json";

import * as Slices from "../slices";

const resolver = ({ sliceName }) => Slices[sliceName];

const SliceSimulatorPage = () => (
  <SliceSimulator
    // The `sliceZone` prop should be a function receiving slices and rendering them using your `SliceZone` component.
    // @ts-ignore prismic sucks
    sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
    // @ts-ignore see above.
    state={state}
  />
);

export default SliceSimulatorPage;
