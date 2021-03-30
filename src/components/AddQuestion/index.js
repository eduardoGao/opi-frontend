import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../Buttons/LoginButton'
import { ButtonAnswer } from '../Buttons/styles'
import { Subtitle, TitleWrapper, FormContainer, Label, Input, Select } from './styles.js'

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
      // answer_text: null,
      // answer_user: null,
      [e.target.name]: e.target.value
    })
  }

  const handlePostQuestion = (e) => {
    e.preventDefault()

    fetch('http://opiapi-env.eba-ahwtvszf.us-east-2.elasticbeanstalk.com/api/questions', {
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
    <FormContainer>
      <form onSubmit={handlePostQuestion}>
        <Label htmlFor="question">
          <span>Escribe tu pregunta</span>
          <Input
            type="text"
            id='question'
            name='question'
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="tag">
          <span>Elige una categoría</span>
          <Select name="tag" id="tag" onChange={handleChange}>
            <option value="">-</option>
            <option value="tecnica">Tecnología</option>
            <option value="legal">Leyes</option>
            <option value="administrativa">Administración</option>
            <option value="economica">Economía</option>
          </Select>
        </Label>
        <input type="submit" value="Enviar"/>
        {/* <ButtonAnswer type="submit">Enviar</ButtonAnswer> */}
      </form>
    </FormContainer>
  )
}

export default AddQuestion
