import React from 'react'
import AuthenticationButton from '../Buttons/AuthButtons'
import { HeaderContainer, NavBar, Link } from './styles'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const user = useAuth0()
  // console.log(user)
  return (
    <HeaderContainer>
      <Link to='/'>Ask me</Link>
      <NavBar>
        <Link to='/stats'>Stats</Link>
        <AuthenticationButton />
      </NavBar>
    </HeaderContainer>
  )
}

export default Header
