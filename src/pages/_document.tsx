import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=riera-studio-spotlight"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
