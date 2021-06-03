import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaYoutube } from 'react-icons/fa'

import {
  Container,
  ButtonContainer
} from '../../styles/portfolio/padrao/styles'
import Button from '../../components/Button'

export default function aws(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio | LOWCODE</title>
        <meta
          name="og:title"
          property="og:title"
          content={process.env.APP_NAME}
        />
        <meta name="description" content={process.env.APP_TEMA} />
      </Head>
      <Container>
        <h1>LOWCODE</h1>
        <img src="/assets/optydev.io.png" alt={process.env.APP_NAME} />
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
          <Button link={process.env.GITHUB_CONTA}>
            <FaGithub size={25} color="#fff" />
            GITHUB
          </Button>
          <Button link={process.env.YOUTUBE_CONTA}>
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
