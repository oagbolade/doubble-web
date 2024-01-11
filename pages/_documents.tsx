import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class DoubbleDocument extends Document {
  public render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Doubble</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="theme-color" content="#000000" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default DoubbleDocument;
