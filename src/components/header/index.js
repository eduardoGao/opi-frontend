import React from 'react'
import AuthenticationButton from '../Buttons/AuthButtons'
import { HeaderContainer } from './styles'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const user = useAuth0()
  console.log(user)
  return (
    <HeaderContainer>
      <h3>Ask me</h3>
      <div>
        <div>Stats</div>
        <AuthenticationButton />
      </div>
    </HeaderContainer>
  )
}

export default Header
