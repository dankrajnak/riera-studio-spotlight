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
            text: "Et ea est eiusmod elit irure excepteur consectetur amet consectetur voluptate proident excepteur officia. Laboris consectetur laborum consectetur sit quis dolor consequat nulla enim consectetur ipsum.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop",
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
            text: "Tempor eu occaecat sunt et. Reprehenderit amet magna irure esse labore sunt sunt amet aliquip proident ea qui.",
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: "Placeholder image",
          copyright: null,
          url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop",
        },
      },
      id: "_ImageLeft",
    }}
  />
);
_ImageLeft.storyName = "image-left";
