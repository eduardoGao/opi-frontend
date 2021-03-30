import React, { useState, useEffect } from 'react'
import QuestionCard from '../QuestionCard'
import { Questions, QuestionsScroll, GenetateContainer } from './styles'
import GenerateQuestion from '../../generate'
const ShowQuestions = () => {
  const [questions, setQuestions] = useState([])

  const fetchQuestions = () => {
    try {
      fetch('http://opiapi-env.eba-ahwtvszf.us-east-2.elasticbeanstalk.com/api/questions')
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data)
        })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [questions])

  return (
    <Questions>
      <GenetateContainer>
        <p>Genera preguntas random con su respectiva respuesta</p>
        <GenerateQuestion />
      </GenetateContainer>
      <QuestionsScroll>
      {
        questions.map(question => <QuestionCard key={question._id} info={question} />)
      }
      </QuestionsScroll>
    </Questions>
  )
}

export default ShowQuestions
