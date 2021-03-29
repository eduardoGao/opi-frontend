import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../Buttons/LoginButton'
import { Subtitle, TitleWrapper } from './styles.js'

function AddQuestion () {
  const { isAuthenticated, user } = useAuth0()

  const initialState = {
    question: null,
    tag: null,
    user: user?.name,
    answer_text: null,
    answer_user: null
  }

  const [questionData, setQuestionData] = useState(initialState)

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      answer_text: null,
      answer_user: null,
      [e.target.name]: e.target.value
    })
  }

  const handlePost = (e) => {
    e.preventDefault()
    console.log(questionData)

    fetch('http://localhost:3001/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  if (!isAuthenticated) {
    return (
      <TitleWrapper>
        <Subtitle>Para publicar una pregunta sólo inicia sesión</Subtitle>
        <LoginButton />
      </TitleWrapper>
    )
  }

  return (
    <div>
      <form onSubmit={handlePost}>
        <label htmlFor="question">
          <span>Escribe tu pregunta</span>
          <input
            type="text"
            id='question'
            name='question'
            onChange={handleChange}
          />
        </label>
        <label htmlFor="tag">
          <span>Elige una categoría</span>
          <select name="tag" id="tag" onChange={handleChange}>
            <option value="">-</option>
            <option value="tecnica">Tecnología</option>
            <option value="legal">Leyes</option>
            <option value="administrativa">Administración</option>
            <option value="economica">Economía</option>
          </select>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddQuestion
