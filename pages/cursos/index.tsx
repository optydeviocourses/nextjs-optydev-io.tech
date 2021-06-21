import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const appContexts =
  process.env.APP_CONTEXTS || 'Consultoria, Treinamento e Soluções em TI.'

const blogName = process.env.BLOG_NAME || 'optydev-io.tech'

import api from '../../services/api'
import {
  Container,
  Course,
  Thumbnail,
  CourseList,
  Gold
} from '../../styles/cursos/styles'

interface PlaylistItem {
  kind: string
  etag: string
  id: string
  slug?: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: ''
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      maxres: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    localized: {
      title: string
      description: ''
    }
  }
}

interface PropTypes {
  CoursesPlaylists: PlaylistItem[]
  OtherPlaylists: PlaylistItem[]
}

export default function Cursos({
  CoursesPlaylists,
  OtherPlaylists
}: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>Cursos | {blogName}</title>
        <meta
          name="og:title"
          property="og:title"
          content="Cursos e tutoriais"
        />
        <meta name="description" content={appContexts} />
      </Head>
      <Container>
        <h1>
          Conteúdos<Gold> premium</Gold>
        </h1>
        <CourseList>
          <Course>
            <Link href="/cursos/">
              <a>
                <Thumbnail id="thumbnail">
                  <p>Em breve</p>
                </Thumbnail>
              </a>
            </Link>
            <span>{appContexts}</span>
          </Course>

          <Course>
            <Thumbnail id="thumbnail">
              <p>Em breve</p>
            </Thumbnail>
            <span>Curso de Linux</span>
          </Course>

          <Course>
            <Thumbnail id="thumbnail">
              <p>Em breve</p>
            </Thumbnail>
            <span>Curso de Nextjs</span>
          </Course>

          <Course>
            <Thumbnail id="thumbnail">
              <p>Em breve</p>
            </Thumbnail>
            <span>Curso de Serverless</span>
          </Course>
        </CourseList>

        <h1>Cursos gratuitos</h1>
        <CourseList>
          {CoursesPlaylists.map((playlist: PlaylistItem) => (
            <Course key={playlist.id}>
              <Link href="/cursos/[slug]" as={`/cursos/${playlist.slug}`}>
                <a>
                  <Thumbnail>
                    <img
                      src={playlist.snippet.thumbnails.default.url}
                      alt={playlist.snippet.title}
                    />
                  </Thumbnail>
                </a>
              </Link>
              <span>{playlist.snippet.title}</span>
            </Course>
          ))}
        </CourseList>

        {/* <CourseList>
          {OtherPlaylists.map((playlist: PlaylistItem) => (
            <Course key={playlist.id}>
              <Link href="/cursos/[slug]" as={`/cursos/${playlist.slug}`}>
                <a>
                  <Thumbnail>
                    <img
                      src={playlist.snippet.thumbnails.default.url}
                      alt={playlist.snippet.title}
                    />
                  </Thumbnail>
                </a>
              </Link>
              <span>{playlist.snippet.title}</span>
            </Course>
          ))}
        </CourseList>
         */}
        <h1>Outros conteúdos</h1>
        <CourseList>
          {OtherPlaylists.map((playlist: PlaylistItem) => (
            <Course key={playlist.id}>
              <Link href="/cursos/[slug]" as={`/cursos/${playlist.slug}`}>
                <a>
                  <Thumbnail>
                    <img
                      src={playlist.snippet.thumbnails.default.url}
                      alt={playlist.snippet.title}
                    />
                  </Thumbnail>
                </a>
              </Link>
              <span>{playlist.snippet.title}</span>
            </Course>
          ))}
        </CourseList>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/playlists', {
    params: {
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      channelId: process.env.CHANNEL_ID,
      maxResults: 50
    }
  })

  const CoursesPlaylists: PlaylistItem[] = []
  const OtherPlaylists: PlaylistItem[] = []

  data.items.forEach((item: PlaylistItem) => {
    if (item.snippet.title.toLowerCase().includes('curso')) {
      CoursesPlaylists.push(item)
    } else {
      OtherPlaylists.push(item)
    }
  })

  CoursesPlaylists.forEach((item: PlaylistItem) => {
    item.slug = item.snippet.title
      .split('Curso de ')[1]
      .toLowerCase()
      .replace(/ /g, '-')
  })

  OtherPlaylists.forEach((item: PlaylistItem) => {
    item.slug = item.snippet.title.toLowerCase().replace(/ /g, '-')
  })

  return {
    props: {
      CoursesPlaylists,
      OtherPlaylists
    }
  }
}
