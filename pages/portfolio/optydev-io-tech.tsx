import Head from 'next/head'
import { FaGithub, FaYoutube } from 'react-icons/fa'

import {
  Container,
  ButtonContainer
} from '../../styles/portfolio/optydev-io-tech/styles'
import Button from '../../components/Button'

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

export default function OptydevIoTech(): JSX.Element {
  return (
    <>
      <Head>
        <title>{appTema}</title>
        <meta name="og:title" property="og:title" content="Site Pessoal" />
        <meta
          name="description"
          content="Portfolio e plataforma de cursos online optydev-io-tech"
        />
      </Head>
      <Container>
        <h1>Berg Daniel</h1>
        <img src="/assets/logo.png" alt={blogName} />
        <strong>
          - Projeto:
          <span> Desenvolvimento Web</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor Frontend, Designer</span>
        </strong>
        <strong>
          - Tecnologias do Frontend:
          <span> React, NextsJS</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Netlify, Vercel</span>
        </strong>
        <strong>
          - Contexto:
          <span> </span>
        </strong>
        <strong>
          - Descrição técnica:
          <span> </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/danielbergholz/nextjs-bergdaniel.com.br">
            <FaGithub size={25} color="#fff" />
            Código Fonte
          </Button>
          <Button link="https://www.youtube.com/playlist?list=PLbV6TI03ZWYWq8NlvpMGUwaVlzzfyZeld">
            <FaYoutube size={25} color="#fff" />
            Tutorial
          </Button>
        </ButtonContainer>
      </Container>
    </>
  )
}
