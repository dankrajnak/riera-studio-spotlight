import { Typography } from "antd";
import { Image } from "react-datocms";
import SEO from "../Utils/SEO";
import CenterLayout from "../Layout/CenterLayout";
import { datoRequest } from "../Lib/datocms";
import { GetTitleQuery } from "../generated/graphql";

const { Title, Text } = Typography;

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
                color: "white",
                backgroundColor: "#de483f",
                marginBottom: 10,
              }}
            >
              <Title level={1} style={{ color: "white", marginBottom: 0 }}>
                {data.title.title}
              </Title>
            </div>
            <div
              className="red-fade"
              style={{
                color: "white",
                backgroundColor: "#de483f",
              }}
            >
              <Typography.Text style={{ color: "white" }}>
                {data.title.subheading}
              </Typography.Text>
            </div>
          </div>
        </CenterLayout>
      </Plane>
      <Plane zIndex={0}>
        <Image
          data={data.title.titlePicture.responsiveImage}
          style={{ height: "100%" }}
          fadeInDuration={0}
        />
      </Plane>
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

export const getStaticProps = async ({ preview }) => {
  const data = await datoRequest({ preview }).GetTitle();
  return {
    props: { data },
  };
};
