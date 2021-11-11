import { FunctionComponent } from 'react';
import Head from 'next/head';

const DocumentHead: FunctionComponent = () => (
  <Head>
    <title>Anas Araid</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#000000" />

    <link
      href="https://fonts.googleapis.com/css2?family=Inter"
      rel="stylesheet"
    />

    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </Head>
);

export default DocumentHead;
