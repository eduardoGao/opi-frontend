import React from 'react'
import ShowQuestions from '../ShowQuestions'
import AddQuestion from '../../components/AddQuestion'
import { QuestionsContainer, Title } from './styles'

const QuestionsContent = () => {
  return (
    <QuestionsContainer>
      <Title>Publica y responde preguntas.</Title>
      <AddQuestion />
      <ShowQuestions />
    </QuestionsContainer>
  )
}

export default QuestionsContent
