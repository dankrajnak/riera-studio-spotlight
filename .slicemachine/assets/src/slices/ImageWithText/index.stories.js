import MyComponent from "../../../../../src/slices/ImageWithText";

export default {
  title: "src/slices/ImageWithText",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "image_with_text",
      items: [],
      primary: {
        description: [
          {
            type: "paragraph",
            text: "Cillum laborum amet in ut minim minim tempor aliquip enim dolore.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop",
        },
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";

export const _ImageLeft = () => (
  <MyComponent
    slice={{
      variation: "imageLeft",
      name: "image-left",
      slice_type: "image_with_text",
      items: [],
      primary: {
        description: [
          {
            type: "paragraph",
            text: "Ut cupidatat do non esse mollit elit tempor duis consectetur pariatur ullamco occaecat est non deserunt. Culpa culpa aliquip mollit ullamco.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop",
        },
      },
      id: "_ImageLeft",
    }}
  />
);
_ImageLeft.storyName = "image-left";
