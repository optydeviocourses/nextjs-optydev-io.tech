import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { BsFillLightningFill } from 'react-icons/bs'

import { Container, Button, ButtonsContainer } from '../styles/links/styles'

const blogName = process.env.BLOG_NAME || 'optydev-io.com'

const appUrl = process.env.APP_URL || 'https://optydev-io.tech'

const youtubeKeyApi =
  process.env.YOUTUBE_KEY_API || 'AIzaSyADjNYcvAla-UQxvyqBUXlR1mzEVkHiTrk'

const channelId = process.env.CHANNEL_ID || 'UCaA6KIbCHhg4_Te1ef-ilZA'

const githubConta = process.env.GITHUB_CONTA || 'optydev.io.courses'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Links | {blogName}</title>
        <meta name="og:title" property="og:title" content="{ blogName }" />
        <meta name="description" content="{ blogContexts }" />
      </Head>
      <Container>
        <img src="/assets/logo.png" alt="{blogName}" />
        <ButtonsContainer>
          <a
            href="https://www.youtube.com/channel/{ channelId }/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#C71D1F">
              <FaYoutube size={30} color="#fff" />
              <h1>YouTube</h1>
            </Button>
          </a>

          <a
            href="https://discord.gg/PkWraebbfY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#7289D7">
              <FaDiscord size={30} color="#fff" />
              <h1>Discord</h1>
            </Button>
          </a>

          <Link href="/cursos">
            <a>
              <Button color="#59C28E">
                <BsFillLightningFill size={30} color="#fff" />
                <h1>Cursos</h1>
              </Button>
            </a>
          </Link>

          <Link href="/blog">
            <a>
              <Button color="#2B83D0">
                <BiBook size={30} color="#fff" />
                <h1>Blog</h1>
              </Button>
            </a>
          </Link>

          <a
            href="https://www.github.com/{ githubConta }"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaGithub size={30} color="#fff" />
              <h1>GitHub</h1>
            </Button>
          </a>
        </ButtonsContainer>
      </Container>
    </>
  )
}

export default Home
