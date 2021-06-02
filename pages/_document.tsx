import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const appUrl = process.env.APP_URL || 'https://optydev-io.tech'
const appTema = process.env.APP_TEMA || 'DevOps, FullStack e FullCicle.'
const appContexts =
  process.env.APP_CONTEXTS || 'Consultoria, Treinamento e Soluções em TI.'
const appMissao =
  process.env.APP_MISSAO ||
  'Tecnologias: DevOps, FullStack, nocode, lowcode e highcode.'

const blogName = process.env.BLOG_NAME || 'optydev-io.tech'

const githubConta = process.env.GITHUB_CONTA
const instagraConta = process.env.INSTAGRAM_CONTA
const youtubeConta = process.env.YOUTUBE_CONTA

interface ReturnType {
  styles: JSX.Element
  html: string
  head?: JSX.Element[]
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<ReturnType> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
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

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
          <link rel="canonical" href={appUrl} />
          <meta property="og:image" content="/logo.ico" />
          <meta property="og:type" content="website" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
