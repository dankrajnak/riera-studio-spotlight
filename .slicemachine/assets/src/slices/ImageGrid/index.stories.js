import MyComponent from "../../../../../src/slices/ImageGrid";

export default {
  title: "src/slices/ImageGrid",
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: "default",
      name: "Default",
      slice_type: "image_grid",
      items: [
        {
          image: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop",
          },
        },
        {
          image: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop",
          },
        },
        {
          image: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop",
          },
        },
        {
          image: {
            dimensions: { width: 900, height: 500 },
            alt: "Placeholder image",
            copyright: null,
            url: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop",
          },
        },
      ],
      primary: {},
      id: "_Default",
    }}
  />
);
_Default.storyName = "Default";
