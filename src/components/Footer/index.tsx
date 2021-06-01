import Link from 'next/link'

import { Heading } from '../../components/Heading'
import { Logo } from '../../components/Logo'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>
          <nav aria-labelledby="socal media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Store</a>
            </Link>
            <Link href="/">
              <a>Buscar</a>
            </Link>
          </nav>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum.</span>
          <span>Lorem ipsum dolor sit.</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won games 2021© All rights reserved</S.Copyright>
    </S.Wrapper>
  )
}
