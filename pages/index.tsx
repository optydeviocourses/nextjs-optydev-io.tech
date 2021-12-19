import Head from 'next/head'
import { FaGithub, FaGitlab, FaWhatsapp, FaYoutube } from 'react-icons/fa'
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
const whatsAppConta = process.env.NEXT_PUBLIC_WHATSAPP_CONTA

const githubConta = process.env.NEXT_PUBLIC_GITHUB_CONTA
const gitlabConta = process.env.NEXT_PUBLIC_GITLAB_CONTA

const appTema = process.env.NEXT_PUBLIC_APP_TEMA
const appContexts = process.env.NEXT_PUBLIC_APP_CONTEXTS
const appMissao = process.env.NEXT_PUBLIC_APP_MISSAO

const appCEO = process.env.NEXT_PUBLIC_APP_CEO
const appCurriculum = process.env.NEXT_PUBLIC_APP_CURRICULUM

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
              <a href={githubConta} target="_blank" rel="noopener noreferrer">
                <FaGithub size={36} />
              </a>
              <a href={gitlabConta} target="_blank" rel="noopener noreferrer">
                <FaGitlab size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>{appTema}</h1>
            <h2>{appContexts}</h2>
            <p id="green-text">{appMissao}</p>
            <p id="green-text">{appCEO}</p>
            <p id="green-text">{appCurriculum}</p>
          </RightText>
        </Hello>
      </Container>
    </>
  )
}
