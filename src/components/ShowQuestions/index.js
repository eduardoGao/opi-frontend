import React, { useState, useEffect } from 'react'
import QuestionCard from '../QuestionCard'
import { Questions, TitleSection, QuestionsScroll } from './styles'
import GenerateQuestion from '../../generate'
const ShowQuestions = () => {
  const [questions, setQuestions] = useState([])

  const fetchQuestions = () => {
    try {
      fetch('http://localhost:3001/api/questions')
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data)
        })
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [questions])

  const questionsTotal = questions.length

  return (
    <Questions>
      <TitleSection>Publicadas</TitleSection>
      {questionsTotal}
      <GenerateQuestion />
      <QuestionsScroll>
      {
        questions.map(question => <QuestionCard key={question._id} info={question} />)
      }
      </QuestionsScroll>
    </Questions>
  )
}

export default ShowQuestions
