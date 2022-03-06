import MyComponent from "../../../../../src/slices/QuoteByText";

export default {
  title: "src/slices/QuoteByText",
};

export const _DefaultSlice = () => (
  <MyComponent
    slice={{
      variation: "default-slice",
      name: "Default slice",
      slice_type: "quote_by_text",
      items: [],
      primary: {
        "quote-text": [
          {
            type: "paragraph",
            text: "Qui veniam do aute aliqua quis pariatur cupidatat nostrud occaecat aliquip irure pariatur. Cupidatat officia reprehenderit ut cillum sunt.",
            spans: [],
          },
        ],
        "quote-author": "quote author",
        text: [
          {
            type: "heading1",
            text: "Reintermediate front-end blockchains",
            spans: [],
          },
          {
            type: "paragraph",
            text: "Consectetur deserunt minim velit aliqua elit proident laborum est commodo ad consectetur exercitation. Deserunt non commodo et nisi sunt deserunt do voluptate non mollit mollit. Ex deserunt ex sint ullamco irure consectetur eu adipisicing nisi non reprehenderit consequat veniam pariatur consectetur.",
            spans: [],
          },
          { type: "heading1", text: "Generate 24/7 schemas", spans: [] },
          {
            type: "paragraph",
            text: "Aute enim culpa nostrud irure esse aliqua proident ullamco cillum. Veniam nisi aute occaecat est sunt officia officia et sunt dolore.",
            spans: [],
          },
          { type: "heading1", text: "Grow 24/7 e-tailers", spans: [] },
          {
            type: "paragraph",
            text: "Incididunt consequat in laboris laborum ipsum tempor nisi ea aliqua. Non sint culpa eu commodo dolore velit commodo pariatur minim ipsum laborum laborum mollit. Pariatur nostrud ullamco commodo et excepteur.",
            spans: [],
          },
        ],
      },
      id: "_DefaultSlice",
    }}
  />
);
_DefaultSlice.storyName = "Default slice";

export const _TextLeft = () => (
  <MyComponent
    slice={{
      variation: "textLeft",
      name: "Text Left",
      slice_type: "quote_by_text",
      items: [],
      primary: {
        text: [
          {
            type: "paragraph",
            text: "Nisi consequat dolor incididunt ea magna occaecat irure nulla reprehenderit ex duis ullamco ut.",
            spans: [],
          },
        ],
        "quote-text": [
          {
            type: "paragraph",
            text: "Amet velit ut enim ipsum. Eiusmod mollit deserunt ad dolore ullamco.",
            spans: [],
          },
        ],
        "quote-author": "iterate global schemas",
      },
      id: "_TextLeft",
    }}
  />
);
_TextLeft.storyName = "Text Left";
