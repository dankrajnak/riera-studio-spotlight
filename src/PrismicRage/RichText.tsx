import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";

const RichText = (props: PrismicRichTextProps) => (
  <PrismicRichText
    {...props}
    components={{
      // Make sure embeded videos don't overflow
      embed: ({ node, key }) => (
        <div
          key={key}
          className="aspect-w-16 aspect-h-9"
          data-oembed={node.oembed.embed_url}
          data-oembed-type={node.oembed.type}
          data-oembed-provider={node.oembed.provider_name}
          dangerouslySetInnerHTML={{
            __html: node.oembed.html ?? "",
          }}
        />
      ),
      ...props.components,
    }}
  />
);

export default RichText;
