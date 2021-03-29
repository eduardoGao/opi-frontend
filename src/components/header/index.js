import React from 'react'
import AuthenticationButton from '../Buttons/AuthButtons'
import { HeaderContainer, NavBar, Link } from './styles'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const user = useAuth0()
  console.log(user)
  return (
    <HeaderContainer>
      <h3>Ask me</h3>
      <NavBar>
        <Link>Stats</Link>
        <AuthenticationButton />
      </NavBar>
    </HeaderContainer>
  )
}

export default Header
