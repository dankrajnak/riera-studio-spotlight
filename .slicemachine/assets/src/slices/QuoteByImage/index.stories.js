import MyComponent from "../../../../../src/slices/QuoteByImage";

export default {
  title: "src/slices/QuoteByImage",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "quote_by_image",
      items: [],
      primary: {
        "quote-text": [
          {
            type: "paragraph",
            text: "Ullamco velit non eiusmod culpa enim dolore consequat. Irure qui sit dolor ut. Consectetur excepteur ipsum adipisicing.",
            spans: [],
          },
        ],
        "quote-author": "brand leading-edge e-tailers",
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop",
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
      name: "Image Left",
      slice_type: "quote_by_image",
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop",
        },
        "quote-text": [
          {
            type: "paragraph",
            text: "Elit consectetur do sit cillum do pariatur excepteur eu enim incididunt irure anim deserunt minim consequat. Quis anim sint officia velit sint ad qui culpa duis ut incididunt dolor. Dolor dolor ullamco culpa.",
            spans: [],
          },
        ],
        "quote-author": "matrix extensible web-readiness",
      },
      id: "_ImageLeft",
    }}
  />
);
_ImageLeft.storyName = "Image Left";
