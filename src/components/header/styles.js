import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const HeaderContainer = styled.header`
  color: ${({ theme: { color } }) => color.primary};
  background: white;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 32px;
  border-radius: 8px;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
`

export const Link = styled(LinkRouter)`
  margin-right: 32px;
  color: inherit;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: ${({ theme: { color } }) => color.secondary};
  }
`
