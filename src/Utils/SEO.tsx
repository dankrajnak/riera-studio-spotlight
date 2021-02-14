import Head from "next/head";

const siteTitle = "Riera Studios Spotlight";
const defaultDescription = "New stuff at Riera Studio";
const defaultKeywords = ["art", "riera", "studios", "riera studios"];

interface Props {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string; property?: undefined }[];
  keywords?: string[];
  title?: string;
}

const SEO = ({
  description = defaultDescription,
  meta = [],
  keywords = defaultKeywords,
  title,
}: Props) => {
  const defaultMeta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: siteTitle,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: "Daniel Krajnak",
    },
    {
      name: `twitter:title`,
      content: "DankLand",
    },
    {
      name: `twitter:description`,
      content: description,
    },
    { name: `theme-color`, content: "##d95525" },
    { name: `og:image`, content: "/android-chrome-512x512.png" },
    { name: "keywords", content: keywords.join(", ") },
  ];
  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <link rel="manifest" href="/manifest.json" />
      {/* <link rel="icon" href="/favicon-32x32.png" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      /> */}
      {[...meta, ...defaultMeta].map((info, key) => (
        <meta {...info} key={key} />
      ))}
    </Head>
  );
};

export default SEO;
