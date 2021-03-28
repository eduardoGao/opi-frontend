import React from 'react'
import Header from '../../components/header'
import QuestionsContent from '../../components/questionsContent'
import { HomeContainer } from './styles'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return 'Loading'
  }

  return (
    <HomeContainer>
      <Header />
      <QuestionsContent />
    </HomeContainer>
  )
}

export default Home
