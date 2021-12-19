import Head from 'next/head'
import Link from 'next/link'

import { FaGithub, FaGitlab, FaYoutube } from 'react-icons/fa'

import {
  Container,
  ButtonContainer
} from '../../styles/portfolio/padrao/styles'
import Button from '../../components/Button'

const youtubeConta = process.env.NEXT_PUBLIC_YOUTUBE_CONTA
const githubConta = process.env.NEXT_PUBLIC_GITHUB_CONTA
const gitlabConta = process.env.NEXT_PUBLIC_GITLAB_CONTA

const appTema = process.env.NEXT_PUBLIC_APP_TEMA
const appName = process.env.NEXT_PUBLIC_APP_NAME

export default function devops(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | DEVOPS</title>
        <meta name="og:title" property="og:title" content={appName} />
        <meta name="description" content={appTema} />
      </Head>
      <Container>
        <h1>DEVOPS</h1>
        <img src="/assets/devops.png" alt={appName} />
        <strong>
          - Projeto:
          <span></span>
        </strong>
        <strong>
          - Função:
          <span></span>
        </strong>
        <strong>
          - Tecnologias do Frontend:
          <span></span>
        </strong>
        <strong>
          - Tecnologias do Backend:
          <span></span>
        </strong>
        <strong>
          - Hospedagem:
          <span></span>
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
          <Button link={githubConta}>
            <FaGithub size={25} color="#fff" />
            GITHUB
          </Button>
          <br></br>
          <Button link={gitlabConta}>
            <FaGitlab size={25} color="#fff" />
            GITLAB
          </Button>
          <br></br>
          <Button link={youtubeConta}>
            <FaYoutube size={25} color="#fff" />
            Tutorais
          </Button>
        </ButtonContainer>

        <Link href="/portfolio/">
          <a>
            <Button>Retornar</Button>
          </a>
        </Link>
      </Container>
    </>
  )
}
