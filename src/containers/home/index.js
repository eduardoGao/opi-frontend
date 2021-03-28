import React from 'react'
import Header from '../../components/header'
import QuestionsContent from '../../components/questionsContent'
import { HomeContainer } from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <QuestionsContent />
    </HomeContainer>
  )
}

export default Home
