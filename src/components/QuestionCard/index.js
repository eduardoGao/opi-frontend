import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import AnswerButton from '../Buttons/AnswerButton'
import { ButtonAnswer } from '../Buttons/styles'
import { useAuth0 } from '@auth0/auth0-react'

import { Card, User, Question, Tag, PublishedAt, Day, Hour, UserInfo, CardContainer, MessageAlert } from './styles'

function QuestionCard ({ info }) {
  const { isAuthenticated } = useAuth0()
  const [answerForm, setAnswerForm] = useState(false)
  const [message, setMessage] = useState(false)

  const handleAnswerForm = () => {
    if (!isAuthenticated) {
      return (
        setMessage(true)
      )
    }
    setAnswerForm(true)
  }

  return (
    <CardContainer>
      <Card>
        <Tag>{info.tag}</Tag>
        <UserInfo>
          <User>{info.user}</User>
          <PublishedAt>
            <Day>Publicada el {info.published?.atDay} </Day>
            <Hour>a las {info.published?.atHour}</Hour>
          </PublishedAt>
        </UserInfo>
        <Question>{info.question}</Question>
      </Card>
      <ButtonAnswer onClick={handleAnswerForm}>Responder</ButtonAnswer>
      {message && <MessageAlert>Inicia sesión para responder preguntas.</MessageAlert>}
      {answerForm && <form action=""><input type="text"/></form>}
    </CardContainer>
  )
}

QuestionCard.propTypes = {
  info: PropTypes.object
}

export default QuestionCard
