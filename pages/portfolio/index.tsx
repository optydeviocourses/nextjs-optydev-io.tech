import Link from 'next/link'
import Head from 'next/head'
import { FaFilePdf } from 'react-icons/fa'

import { Container, Project, Text } from '../../styles/portfolio/styles'
import Button from '../../components/Button'
import SpecialButton from '../../components/SpecialButton'

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

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Porifilio | optydev-io.tech</title>
        <meta name="og:title" property="og:title" content="Portfolio" />
        <meta name="description" content="Informações de optydev-io.tech" />
      </Head>
      <Container>
        <h1>Consultoria</h1>
        <strong>
          - DevOps:
          <span> </span>
        </strong>
        <strong>
          - FullStack:
          <span> </span>
        </strong>
        <strong>
          - FullCycle:
          <span> </span>
        </strong>
        <strong>
          - NoCode:
          <span> </span>
        </strong>
        <strong>
          - LowCode:
          <span>
            {' '}
            <a
              href="https://ubistart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubistart
            </a>{' '}
          </span>
        </strong>
        <strong>
          - HighCode:
          <span>
            {' '}
            <a
              href="http://talentfour.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>{' '}
            e no{' '}
            <a
              href="https://bbnk.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BBNK
            </a>{' '}
          </span>
        </strong>

        <SpecialButton link="/download/">
          <FaFilePdf color="#64f4ac" />
        </SpecialButton>

        <h1>Tecnologias</h1>

        <Project>
          <img src="/assets/aws.png" alt="Logo AWS" />
          <Text>
            <strong>
              - AWS:
              <span> </span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>
            <Link href="/portfolio/aws">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/gcp.png" alt="Logo GCP" />
          <Text>
            <strong>
              - GCP:
              <span> </span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>

            <Link href="/portfolio/gcp">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/azure.png" alt="Logo Azure" />
          <Text>
            <strong>
              - AZURE:
              <span></span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>
            <Link href="/portfolio/azure">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/nextjs.png" alt="NextJS" />
          <Text>
            <strong>
              - NextJS
              <span> </span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span></span>
            </strong>
            <Link href="/portfolio/nextjs">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/serverless.png" alt="Logo Serverless" />
          <Text>
            <strong>
              - Serverless:
              <span></span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span> </span>
            </strong>
            <Link href="/portfolio/serverless">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>

        <Project>
          <img src="/assets/ts.png" alt="Logo TS" />
          <Text>
            <strong>
              - Typescript:
              <span> Desenvolvedor Fullstack</span>
            </strong>
            <br />
            <strong>
              - Descrição:
              <span></span>
            </strong>

            <Link href="/portfolio/ts">
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </Text>
        </Project>
      </Container>
    </>
  )
}
