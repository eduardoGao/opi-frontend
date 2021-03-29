import React from 'react'
import ShowQuestions from '../ShowQuestions'
import AddQuestion from '../../components/AddQuestion'
import { QuestionsContainer, Title, Subtitle, TitleWrapper } from './styles'

const QuestionsContent = () => {
  return (
    <QuestionsContainer>
      <TitleWrapper>
        <Title>Publica y responde las preguntas que necesitas.</Title>
        <Subtitle>Preguntas sobre leyes, administrativas, económicas y tecnológicas</Subtitle>
      </TitleWrapper>
      <AddQuestion />
      <ShowQuestions />
    </QuestionsContainer>
  )
}

export default QuestionsContent
