import Head from "next/head";
import { PropsWithChildren } from "react";
import { NextSeo } from "next-seo";
//herança de PropsWithChildren

type PageLayoutProps = {
  title: string;
  description: string;
  thumbnail: string;
} & PropsWithChildren;

export default function PageLayout({
  children,
  title,
  description,
  thumbnail,
}: PageLayoutProps) {
  return (
    <div>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head> */}
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: title,
          description: description,
          images: [
            {
              url: thumbnail,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          siteName: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      {children}
    </div>
  );
}
