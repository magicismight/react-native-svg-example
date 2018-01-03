import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                font-family: 'AvenirNextLTPro-Regular';
                font-style: normal;
                font-weight: normal;
                src: local('AvenirNextLTPro-Regular'), url('/static/fonts/AvenirNextLTPro-Regular.otf') format('opentype');
                }

                body {
                  margin: 0;
                }
                `,
            }}
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
