import Head from 'next/head'
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText
} from '../styles/home/styles'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | optydev-io.tech</title>
        <meta name="og:title" property="og:title" content="optydev-io.tech" />
        <meta
          name="description"
          content="optydev-io.tech tudo em DevOps, FullStack e FullCicle"
        />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img src="/assets/logo.png" alt="Logo da optydev-io.tech" />
            <SocialMedia>
              <a
                href="https://www.youtube.com/channel/UCaA6KIbCHhg4_Te1ef-ilZA/videos?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={36} />
              </a>
              <a
                href="https://www.instagram.com/optydev-io.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={36} />
              </a>
              <a
                href="https://www.github.com/optydev.io.courses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>DevOps, FullStack e FullCicle</h1>
            <h2>Consultoria, Treinamento e Soluções em TI.</h2>
            <p id="green-text">
              Tecnologias: DevOps, FullStack, nocode, lowcode e highcode.
            </p>
          </RightText>
        </Hello>
      </Container>
    </>
  )
}
