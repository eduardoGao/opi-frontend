import React, { useState, useEffect } from 'react'
import QuestionCard from '../QuestionCard'
import { Questions, TitleSection } from './styles'

const ShowQuestions = () => {
  const [questions, setQuestions] = useState([])

  // https://rickandmortyapi.com/api
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
  }, [])

  const questionsTotal = questions.length

  return (
    <Questions>
      <TitleSection>Publicadas</TitleSection>
      {questionsTotal}
      <div>
        {
          questions.map(question => <QuestionCard key={question._id} info={question} />)
        }
      </div>
    </Questions>
  )
}

export default ShowQuestions
