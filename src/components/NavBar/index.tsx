import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'

import { useTheme } from '../../context/theme'
import { Background, Container, MenuIcon, MenuBar } from './styles'

const blogName = process.env.NEXT_PUBLIC_BLOG_NAME

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [tab, setTab] = useState<number>(0)

  const { pathname } = useRouter()
  const { changeTheme, theme, lock } = useTheme()

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false)
        setTab(0)
        lock(false)
      } else {
        setOpen(!open)
        lock(true)
      }
    },
    [open, lock]
  )

  const handleNewTab = useCallback(
    (n: number): void => {
      setOpen(false)
      setTab(n)
      lock(false)
    },
    [lock]
  )

  useEffect(() => {
    if (pathname === '/contato') {
      handleNewTab(4)
    } else if (pathname === '/portfolio') {
      handleNewTab(3)
    } else if (pathname === '/blog') {
      handleNewTab(2)
    } else if (pathname === '/cursos') {
      handleNewTab(1)
    } else {
      handleOpen(true)
    }
  }, [pathname])

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Link href="/">
          <a>
            <p>
              <strong>{blogName}</strong>
            </p>
          </a>
        </Link>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          <li>
            <Link href="/cursos">
              <a>cursos</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>portfólio</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>contato</a>
            </Link>
          </li>
          <li></li>
          {theme === 'dark' ? (
            <FaSun size={28} color="#F1FA8C" onClick={changeTheme} />
          ) : (
            <FaMoon size={22} color="#F1FA8C" onClick={changeTheme} />
          )}
        </ul>
      </Container>
    </Background>
  )
}

export default NavBar
