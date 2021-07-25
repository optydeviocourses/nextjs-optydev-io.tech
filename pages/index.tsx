import Head from 'next/head'
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText
} from '../styles/home/styles'

const appTema = process.env.APP_TEMA
const appContexts = process.env.APP_CONTEXTS
const appMissao = process.env.APP_MISSAO

const blogName = process.env.BLOG_NAME

const githubConta = process.env.GITHUB_CONTA
const instagraConta = process.env.INSTAGRAM_CONTA
const youtubeConta = process.env.YOUTUBE_CONTA

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | {blogName}</title>
        <meta name="og:title" property="og:title" content="{blogName}" />
        <meta name="description" content="{blogContexts}" />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img src="/assets/logo.png" alt={blogName} />
            <SocialMedia>
              <a href={youtubeConta} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={36} />
              </a>
              <a href={instagraConta} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={36} />
              </a>
              <a href={githubConta} target="_blank" rel="noopener noreferrer">
                <FaGithub size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>{appTema}</h1>
            <h2>{appContexts}</h2>
            <p id="green-text">{appMissao}</p>
          </RightText>
        </Hello>
      </Container>
    </>
  )
}
