import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import AnswerButton from '../Buttons/AnswerButton'
import { ButtonAnswer } from '../Buttons/styles'
import AnswerForm from '../AnswerForm'
import { useAuth0 } from '@auth0/auth0-react'
import { Card, User, Question, Tag, PublishedAt, Day, Hour, UserInfo, CardContainer, MessageAlert, CardAnswer, Answer, AnswerInfo, UserAnswer, AnswerT, MessageAd, TitleSection } from './styles'

function QuestionCard ({ info }) {
  const { isAuthenticated, user } = useAuth0()
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

  const isAnswered = info.answer_text !== null

  const sameUser = user?.name === info.user

  return (
    <CardContainer>
      <Card>
        <UserInfo>
          <Tag>{info.tag}</Tag>
          <PublishedAt>
            <Day>Publicada el {info.published?.atDay} </Day>
            <Hour>a las {info.published?.atHour}</Hour>
          </PublishedAt>
        </UserInfo>
          <User>{info.user}</User>
        <Question>{info.question}</Question>
      </Card>
      {
        isAnswered &&
          <CardAnswer>
            Respusta
            <Answer>
              <AnswerT>{info.answer_text}</AnswerT>
            </Answer>
            <AnswerInfo>
              <UserAnswer>{info.answer_user}</UserAnswer>
              <PublishedAt>
                <Day>Respondido el {info.answered?.atDay} </Day>
                <Hour>a las {info.answered?.atHour}</Hour>
              </PublishedAt>
            </AnswerInfo>
          </CardAnswer>
      }
      {
        sameUser ? !isAnswered && <MessageAd>No puedes responder tu propia pregunta</MessageAd> : !isAnswered && <ButtonAnswer onClick={handleAnswerForm}>Responder</ButtonAnswer>
      }

      {/* {!isAnswered && <ButtonAnswer onClick={handleAnswerForm}>Responder</ButtonAnswer>} */}

      {message && <MessageAlert>Inicia sesión para responder preguntas.</MessageAlert>}
      {answerForm && <AnswerForm id={info._id} setAnswerForm={setAnswerForm} />}

    </CardContainer>
  )
}

QuestionCard.propTypes = {
  info: PropTypes.object
}

export default QuestionCard
