import { Html, Head, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";


//usando a lib do next-seo 

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head>
        <title>site</title>
        <meta name="description" content="descrição padrão de todo o site e em cada página criar um metadata separado" />
      </Head> */}


      <Head/>

      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          siteName: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
