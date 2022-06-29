import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            enhanceComponent: (Component) => Component,
          })

        const initialProps = await Document.getInitialProps(ctx)

        return {...initialProps, styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            )
        }
    } finally {
        sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta property="og:title" content="Bus4us" key="bus4us" />
          <meta name="description" content="Podróżuj wygodnie po Polsce dzięki aplikacji Bus4us!" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}