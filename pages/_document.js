import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>

        <body>
          <Main />
          <div id="subpages-sidebar" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
