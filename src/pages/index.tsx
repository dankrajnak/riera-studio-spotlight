import { GetStaticProps } from "next";
import SEO from "../Utils/SEO";
import CenterLayout from "../Layout/CenterLayout";
import cms from "../Lib/cms";
import {
  Exhibition,
  GetTitleQuery,
  GetTitleDocument,
} from "../generated/graphql";

const Plane: React.FC<{ zIndex?: number }> = ({ zIndex = 0, children }) => (
  <>
    <div>{children}</div>
    <style jsx>
      {`
        z-index: ${zIndex};
        position: absolute;
        width: 100%;
        height: 100%;
      `}
    </style>
  </>
);

const ExhibitionComp = ({ exhibition }: { exhibition: Exhibition }) => (
  <>
    {exhibition.title}
    {exhibition.main_image}
  </>
);

export default function Home({ data }: { data: GetTitleQuery }) {
  const activeExhibitions = data.allHomepages.edges
    .map((edge) => edge.node.active_exhibitions)
    .flatMap((exhibs) => exhibs.map((something) => something.exhibition));

  const oldExhibitions = data.allHomepages.edges.map(
    (edge) => edge.node.old_exhibitions
  );
  return (
    <>
      <SEO />
      {activeExhibitions.map((exhibition, index) => (
        <ExhibitionComp exhibition={exhibition} key={index} />
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, locale }) => {
  const data = (await cms.query<GetTitleQuery>({ query: GetTitleDocument }))
    .data;
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
