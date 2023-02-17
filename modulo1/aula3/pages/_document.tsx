import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const generateCsp = (): string => {
    let csp = '';
    csp += 'default-src \'none\';';
    csp += 'img-src \'self\' data:;';
    return csp;
  }

  return (
    <Html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Security-Policy" content={generateCsp()} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
