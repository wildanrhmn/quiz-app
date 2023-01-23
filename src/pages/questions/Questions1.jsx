import React, { useEffect, useState } from 'react'
import "./questions.css"
import api from '../../utils/api'
import { Link } from 'react-router-dom'
import Timer from '../../components/timer/Timer'

const Questions1 = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correct, showCorrect] = useState(false)
  const [score, setScore] = useState(0)
 const [nextPage, setNextPage] = useState(false)
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [])


  const answeredQuestion = (isCorrect, e) => {
    const nextQuestion = currentQuestion + 1;

    if(isCorrect) {
      setScore(score + 1)
    }
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      showCorrect(true)
      setNextPage(true)
    }

    e.preventDefault()
  }

  /* ======GET DATA FROM API======= */
  async function getDataQuestions() {
    const data = await api.getQuestions()
    setQuestions(data)
  }

  useEffect(() => {
    getDataQuestions()
  }, [])

  return (
    <section className='section container'>
      <div className='container-question'>
        <Timer />
      {questions?.map((data, index) => {
        return(
          <div className='data-value'>
            <h5>Quiz {index + 1} / 10</h5>
            <p>{data?.question}</p>
          </div>
          )
        })[currentQuestion]}
          {!nextPage && (
            <div className='btn-question'>
              <button onClick={() => answeredQuestion(true)}>TRUE</button>
              <button onClick={() => answeredQuestion(false)}>FALSE</button>
           </div>
          )}

          {nextPage && (
            <div className='btn-question'>
              <button><Link to="/finished">Results</Link></button>
           </div>
          )}

            {correct && (
              <p>You have answered {score} questions</p>
              )}
              </div>
    </section>
  )
}

export default Questions1