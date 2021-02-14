import Head from "next/head";
import SEO from "../Utils/SEO";
import { Typography } from "antd";
import CenterLayout from "../Layout/CenterLayout";

const { Title } = Typography;

export default function Home() {
  return (
    <CenterLayout>
      <SEO />
      <Title level={1}>Riera Studio Spotlight</Title>
    </CenterLayout>
  );
}
