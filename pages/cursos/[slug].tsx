/* eslint-disable no-param-reassign */
import Head from 'next/head'
import Link from 'next/link'

import Button from '../../components/Button'

import { GetStaticPaths, GetStaticProps } from 'next'
import { useState, useCallback } from 'react'
//import { IoMdDownload } from 'react-icons/io'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {
  Container,
  Video,
  UpperTitle,
  //Download,
  FlexboxLeft,
  FlexboxRight,
  NextVideos,
  NextVideoTitle
} from '../../styles/cursos/slug/styles'
import api from '../../services/api'
//import { exception } from 'console'

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
      maxres: {
        url: string
        width: number
        height: number
      }
      default: {
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

interface Video {
  playlistId: string
  //slidesLink: string
  snippet: {
    title: string
    mediumTitle: string
    shortTitle: string
    position: number
    description: string
    resourceId: {
      videoId: string
    }
    thumbnails: {
      default: {
        url: string
      }
      medium: {
        url: string
      }
    }
  }
}

interface PathProps {
  params: {
    slug: string
  }
}

interface PropTypes {
  data: Video[]
  courseInfo: {
    playlistId: string
    courseName: string
    //slidesLink: string
  }
  slug: string
}

const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const youtubeChannelId = process.env.NEXT_PUBLIC_CHANNEL_ID

export default function VideoPlayer({
  data,
  courseInfo
}: PropTypes): JSX.Element {
  const [selectedVideo, setSelectedVideo] = useState<Video>(data[0])

  const changeVideo = useCallback(
    (id: number) => {
      setSelectedVideo(data[id])
      localStorage.setItem(
        `@optydeviodevops:${courseInfo.playlistId}`,
        JSON.stringify(data[id])
      )
    },
    [data, courseInfo.playlistId]
  )

  return (
    <>
      <Head>
        <title>Cursos | {courseInfo.courseName}</title>
        <meta
          name="og:title"
          property="og:title"
          content={courseInfo.courseName}
        />
        <meta name="description" content={selectedVideo.snippet.description} />
      </Head>
      <Container>
        <FlexboxLeft>
          <h1>{courseInfo.courseName}</h1>
          {/* {selectedVideo.snippet.resourceId.videoId} */}
          <UpperTitle>
            <h2>
              {selectedVideo.snippet.mediumTitle || selectedVideo.snippet.title}
            </h2>
            {/* {courseInfo.slidesLink !== '' && (
              <a
                href={courseInfo.slidesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download>
                  <span>Download</span>
                  <IoMdDownload color="#F1FA8C" size={20} />
                </Download>
              </a>
            )} */}
          </UpperTitle>
          <iframe
            title="videoPlayer"
            src={`https://www.youtube.com/embed/${selectedVideo.snippet.resourceId.videoId}?rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <span>{selectedVideo.snippet.description}</span>
        </FlexboxLeft>

        <FlexboxRight>
          <NextVideoTitle>
            <strong>Próximas aulas</strong>
          </NextVideoTitle>
          <NextVideos id="next-videos">
            <PerfectScrollbar>
              {data.map((video) => {
                const {
                  position,
                  thumbnails,
                  shortTitle,
                  mediumTitle
                } = video.snippet
                return (
                  <Video
                    key={String(position)}
                    onClick={(): void => changeVideo(position)}
                  >
                    <img
                      src={String(thumbnails.medium)}
                      alt={video.snippet.title}
                    />
                    <h3>{shortTitle}</h3>
                    <h4>{mediumTitle}</h4>
                  </Video>
                )
              })}
            </PerfectScrollbar>
          </NextVideos>
        </FlexboxRight>
      </Container>
      <Link href="/cursos/">
        <a>
          <Button>Retornar</Button>
        </a>
      </Link>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/playlists', {
    params: {
      part: 'snippet',
      key: youtubeApiKey,
      channelId: youtubeChannelId,
      maxResults: 50
    }
  })

  const AllPlaylists = []

  data.items.forEach((item: PlaylistItem) => {
    if (item.snippet.title.toLowerCase().includes('curso')) {
      AllPlaylists.push({
        params: {
          slug: item.snippet.title
            .split('Curso de ')[1]
            .toLowerCase()
            .replace(/ /g, '-')
        }
      })
    } else {
      AllPlaylists.push({
        params: { slug: item.snippet.title.toLowerCase().replace(/ /g, '-') }
      })
    }
  })

  return { paths: AllPlaylists, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const mapSlugToProperties = {}

  const response = await api.get('/playlists', {
    params: {
      part: 'snippet',
      key: youtubeApiKey,
      channelId: youtubeChannelId,
      maxResults: 50
    }
  })

  response.data.items.forEach((item: PlaylistItem) => {
    if (item.snippet.title.toLowerCase().includes('curso')) {
      mapSlugToProperties[
        item.snippet.title
          .split('Curso de ')[1]
          .toLowerCase()
          .replace(/ /g, '-')
      ] = {
        playlistId: item.id,
        courseName: item.snippet.title
        // slidesLink: ''
      }
    } else {
      mapSlugToProperties[
        item.snippet.title.toLowerCase().replace(/ /g, '-')
      ] = {
        playlistId: item.id,
        courseName: item.snippet.title
        //slidesLink: ''
      }
    }
  })

  const { data } = await api.get('/playlistItems', {
    params: {
      part: 'snippet',
      key: youtubeApiKey,
      maxResults: 50,
      playlistId: mapSlugToProperties[params.slug].playlistId
    }
  })

  // COLOCAR AQUI O LINK DOS SLIDES DOS CURSOS (CASO EXISTA)
  // mapSlugToProperties['els'].slidesLink = process.env.SLIDE_ESL

  const filteredData: Video[] = data.items.filter(
    (video: Video) => video.snippet.title !== 'Private video'
  )

  // try {
  //   if (filteredData[0].snippet.title.includes('-')) {
  //     filteredData.forEach((element: Video) => {
  //       const { title } = element.snippet
  //       const splitTitle = title.split('- ')[1]
  //       const splitSplitTitle = splitTitle.split(':')[0]

  //       element.snippet.mediumTitle = splitTitle
  //       element.snippet.shortTitle = splitSplitTitle
  //     })
  //   } else {
  //     filteredData.forEach((element: Video) => {
  //       element.snippet.mediumTitle = element.snippet.shortTitle =
  //         element.snippet.title
  //     })
  //   }
  // } finally {
  // }ß

  return {
    props: {
      slug: params.slug,
      data: filteredData,
      courseInfo: mapSlugToProperties[params.slug]
    }
  }
}
