import { Typography } from "antd";
import { GetStaticProps } from "next";
import { Image } from "react-datocms";
import SEO from "../Utils/SEO";
import CenterLayout from "../Layout/CenterLayout";
import { datoRequest } from "../Lib/datocms";
import { GetTitleQuery, SiteLocale } from "../generated/graphql";

const { Title } = Typography;

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

export default function Home({ data }: { data: GetTitleQuery }) {
  return (
    <>
      <SEO />
      <Plane zIndex={1}>
        <CenterLayout>
          <div>
            <div
              className="red-fade"
              style={{
                marginBottom: 10,
              }}
            >
              <Title level={1} style={{ color: "white", marginBottom: 0 }}>
                {data.title.title}
              </Title>
            </div>
            <div className="red-fade">
              <Typography.Text style={{ color: "white" }}>
                {data.title.subheading}
              </Typography.Text>
            </div>
          </div>
        </CenterLayout>
      </Plane>
      <div style={{ width: "100%", height: "100vh" }}>
        <Image
          style={{ height: "100%" }}
          pictureStyle={{ objectFit: "cover" }}
          data={data.title.titlePicture.responsiveImage}
          fadeInDuration={0}
        />
      </div>
      <style jsx>
        {`
          .red-fade {
            color: white;
            background-color: #de483f;
            opacity: 1;
            animation: fadeIn ease-in 1s;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, locale }) => {
  const siteLocale = locale === "es" ? SiteLocale.Es : SiteLocale.En;
  const data = await datoRequest({ preview }).GetTitle({ locale: siteLocale });
  return {
    props: { data },
    revalidate: 1,
  };
};
