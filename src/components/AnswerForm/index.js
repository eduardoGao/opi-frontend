import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function AnswerForm ({ id, setAnswerForm }) {
  console.log(id)
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
    <div>
      <form onSubmit={handlePost}>
        <label htmlFor="answer">
          <span>Escribe tu respuesta</span>
            <input
              type="text"
              name="answer_text"
              id='answer'
              onChange={handleChange}
            />
        </label>
        <input type="submit" value="Responder"/>
      </form>
    </div>
  )
}

export default AnswerForm
