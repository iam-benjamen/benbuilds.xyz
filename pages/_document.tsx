import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link href="/static/images/headshot-min1.jpg" rel="shortcut icon" />
        <link href="/static/images/headshot-min1.jpg" rel="manifest" />
        <link href="/static/images/headshot-min1.jpg" rel="apple-touch-icon" sizes="180x180" />
        <link
          href="/static/images/"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/images/headshot-min1.jpg"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <meta content="#FEB48C" name="theme-color" />
        {['PolySans-Regular', 'PolySans-Medium'].map((font) => (
          <link
            key={font}
            rel="preload"
            href={`/fonts/${font}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        ))}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
