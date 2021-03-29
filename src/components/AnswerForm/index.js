import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FormContainer, Label, Input } from '../AddQuestion/styles'
import { ButtonAnswer } from '../Buttons/styles'

function AnswerForm ({ id, setAnswerForm }) {
  // console.log(id)
  const { user } = useAuth0()

  const initialState = {
    answer_text: null,
    answer_user: user?.name
  }

  const [answerState, setAnswerState] = useState(initialState)

  const handleChange = (e) => {
    setAnswerState({
      ...answerState,
      [e.target.name]: e.target.value
    })
  }

  const handlePost = (e) => {
    e.preventDefault()
    console.log(answerState)

    fetch(`http://localhost:3001/api/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answerState)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAnswerForm(false)
      })
  }

  return (
    <FormContainer>
      <form onSubmit={handlePost}>
        <Label htmlFor="answer">
          <span>Escribe tu respuesta</span>
            <Input
              type="text"
              name="answer_text"
              id='answer'
              onChange={handleChange}
            />
        </Label>
        <ButtonAnswer type="submit">Responder</ButtonAnswer>
      </form>
    </FormContainer>
  )
}

export default AnswerForm
