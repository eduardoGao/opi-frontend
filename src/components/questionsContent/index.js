import React from 'react'
import ShowQuestions from '../ShowQuestions'
import AddQuestion from '../../components/AddQuestion'
import { MainContainer, Title, Subtitle, TitleWrapper } from './styles'

const QuestionsContent = () => {
  return (
    <MainContainer>
      <TitleWrapper>
        <Title>Publica y responde las preguntas que necesitas.</Title>
        <Subtitle>Preguntas sobre leyes, administración, econimía y tecnología</Subtitle>
      </TitleWrapper>
      <AddQuestion />
      <ShowQuestions />
    </MainContainer>
  )
}

export default QuestionsContent
