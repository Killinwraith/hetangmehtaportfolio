import { Html, Head, Main, NextScript } from "next/document";
import { site } from "@/content/site";

export default function Document() {
  return (
    <Html lang="en" data-theme={site.theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
