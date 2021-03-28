import React, { useState } from 'react'

function AddQuestion () {
  const initialState = {
    question: null,
    tag: null,
    user: null
  }

  const [questionData, setQuestionData] = useState(initialState)

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value
    })
  }

  const handlePost = (e) => {
    e.preventDefault()
    // console.log(questionData)

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
            <option value="tecnica">Técnica</option>
            <option value="legal">Legal</option>
            <option value="administrativa">Administrativa</option>
            <option value="economica">Económica</option>
          </select>
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddQuestion
