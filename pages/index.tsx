import Head from 'next/head'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa'

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText
} from '../styles/home/styles'

const blogName = process.env.NEXT_PUBLIC_BLOG_NAME
const blogContexts = process.env.NEXT_PUBLIC_BLOG_CONTEXTS
const youtubeConta = process.env.NEXT_PUBLIC_YOUTUBE_CONTA
const linkedinConta = process.env.NEXT_PUBLIC_LINKEDIN_CONTA
const instagramConta = process.env.NEXT_PUBLIC_INSTAGRAM_CONTA
const whatsAppConta = process.env.NEXT_PUBLIC_WHATSAPP_CONTA
const githubConta = process.env.NEXT_PUBLIC_GITHUB_CONTA
const appTema = process.env.NEXT_PUBLIC_APP_TEMA
const appContexts = process.env.NEXT_PUBLIC_APP_CONTEXTS
const appMissao = process.env.NEXT_PUBLIC_APP_MISSAO

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | {blogName}</title>
        <meta name="og:title" property="og:title" content={blogName} />
        <meta name="description" content={blogContexts} />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img src="/assets/logo.png" alt={blogName} />
            <SocialMedia>
              <a href={whatsAppConta} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={36} />
              </a>
              <a href={youtubeConta} target="_blank" rel="noopener noreferrer">
                <FaYoutube size={36} />
              </a>
              <a
                href={instagramConta}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={36} />
              </a>
              <a href={githubConta} target="_blank" rel="noopener noreferrer">
                <FaGithub size={36} />
              </a>
              <a href={linkedinConta} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={36} />
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
