import React from 'react'
import PropTypes from 'prop-types'

function QuestionCard ({ info }) {
  // console.log(info)
  return (
    <div>
      <h1>{info.question}</h1>
      <h2>{info.user}</h2>
      <p></p>
    </div>
  )
}

QuestionCard.propTypes = {
  info: PropTypes.object
}

export default QuestionCard
