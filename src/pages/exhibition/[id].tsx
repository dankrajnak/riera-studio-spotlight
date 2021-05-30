import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import exhibitionQuery, {
  allExhibitionIdsQuery,
} from "../../PrismicRage/exhibitionQuery";
import { RageServiceReturn } from "../../PrismicRage/shared";

const Exhibition = ({
  data,
}: {
  data: RageServiceReturn<typeof exhibitionQuery>;
}) => {
  const router = useRouter();

  const { id } = router.query;
  const { body } = data;

  return (
    <>
      {id}
      <pre>{JSON.stringify(body, null, 2)}</pre>
      {body.map((item) => {
        switch (item.__typename) {
          case "ExhibitionBodyText":
            return <RichText render={item.primary.text} />;
          case "ExhibitionBodyQuote":
            return (
              <>
                <RichText render={item.primary.text} />
                {item.primary.author}
              </>
            );
          default:
            return "not found";
        }
      })}
    </>
  );
};

export const getStaticPaths = async () => {
  const result = await allExhibitionIdsQuery();
  const paths = result.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
  preview,
  locale,
}) => ({
  props: {
    data: await exhibitionQuery(params.id),
  },
  revalidate: 1,
});

export default Exhibition;
