import React from 'react'
import { ButtonGenerate } from '../components/Buttons/styles'

const questions = [
  '¿Cómo se hace el proceso N?',
  '¿Dónde puedo buscar la fórmula?',
  '¿Por qué pasa esta situación',
  '¿Qué significa este concepto?',
  '¿Cuándo puedo consultar los resultados?',
  'Para qué se utiliza esta herramienta?',
  'En dónde puedo encontrar más información de esto?'
]

const users = [
  'Thomas Martín',
  'Consuelo Miguez',
  'Antonio Romero',
  'Virgilio Vico',
  'Lucia Sola',
  'Mayra Flores',
  'Elena Salinas',
  'Víctor Palacio'
]

const tags = [
  'tecnica',
  'legal',
  'administrativa',
  'economica'
]

const answers = [
  'La respuesta esta en este artículo',
  'Esto puede resolver tu pregunta',
  'Puedes revisar este enlace',
  'Eso se refiere a este concepto',
  'Tal ves este link puede resolver tu pregunta',
  'Es una duda muy común, lee esta documentación'
]

const userAnswer = [
  'Imane Sainz',
  'Daniela de Leon',
  'Carlota Perea',
  'Axel de Los Santos',
  'Gregoria Climent',
  'Maximino Sierra',
  'Higinio Cruz',
  'Teresa Velez'
]

const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
const randomUser = users[Math.floor(Math.random() * users.length)]
const randomTag = tags[Math.floor(Math.random() * tags.length)]
const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
const randomUserAnswer = userAnswer[Math.floor(Math.random() * userAnswer.length)]

const generateQuestion = {
  user: randomUser,
  question: randomQuestion,
  tag: randomTag,
  answer_text: randomAnswer,
  answer_user: randomUserAnswer
}

// for (let i = 0; i < 1000; i++) {
//   const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
//   const randomUser = users[Math.floor(Math.random() * users.length)]
//   const randomTag = tags[Math.floor(Math.random() * tags.length)]

//   const generateQuestion = {
//     user: randomUser,
//     question: randomQuestion,
//     tag: randomTag
//   }
//   console.log(generateQuestion)
// }

// console.log(generateQuestion)

const handlePost = (e) => {
  e.preventDefault()

  fetch('http://localhost:3001/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(generateQuestion)
  })
    .then(response => response.json())
    .then(data => console.log(data))
}

function GenerateQuestion () {
  return (
    <ButtonGenerate onClick={handlePost}>Generar pregunta</ButtonGenerate>
  )
}

export default GenerateQuestion
