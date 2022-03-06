import MyComponent from "../../../../../src/slices/TextByText";

export default {
  title: "src/slices/TextByText",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "text_by_text",
      items: [],
      primary: {
        left: [
          {
            type: "heading1",
            text: "Scale transparent infrastructures",
            spans: [],
          },
          {
            type: "paragraph",
            text: "Incididunt cillum ad excepteur in sit elit cupidatat sit. Anim incididunt quis magna fugiat in eiusmod adipisicing. Cillum incididunt enim voluptate consequat labore qui dolore nulla.",
            spans: [],
          },
        ],
        right: [
          {
            type: "heading1",
            text: "Recontextualize open-source channels",
            spans: [],
          },
          {
            type: "paragraph",
            text: "Sit in nisi excepteur adipisicing.",
            spans: [],
          },
        ],
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";
