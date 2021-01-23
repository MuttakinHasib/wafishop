import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
          <meta
            name='description'
            content='Wafishop a E-commerce website with Next.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
