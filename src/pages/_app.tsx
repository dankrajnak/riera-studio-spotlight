import { AppProps } from "next/app";
import "../Styles/dist.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
