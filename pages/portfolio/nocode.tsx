import Head from 'next/head'
import Link from 'next/link'
import { FaGithub,FaGitlab, FaYoutube } from 'react-icons/fa'

import {
  Container,
  ButtonContainer
} from '../../styles/portfolio/padrao/styles'
import Button from '../../components/Button'

const appName = process.env.NEXT_PUBLIC_APP_NAME
const appTema = process.env.NEXT_PUBLIC_APP_TEMA

const githubConta = process.env.NEXT_PUBLIC_GITHUB_CONTA
const gitlabConta = process.env.NEXT_PUBLIC_GITLAB_CONTA

const youtubeConta = process.env.NEXT_PUBLIC_YOUTUBE_CONTA

export default function nocode(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | NOCODE</title>
        <meta name="og:title" property="og:title" content={appName} />
        <meta name="description" content={appTema} />
      </Head>
      <Container>
        <h1>NOCODE</h1>
        <img src="/assets/optydev.io.png" alt={appName} />
        <strong>
          - Participante da Comunidade Sem Codar (bubble.io)
          <span></span>
        </strong>
        <img width="500" height="300" src="/assets/c-csc.png" alt={appName} />
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
