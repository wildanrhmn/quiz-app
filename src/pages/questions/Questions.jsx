import React, { useEffect, useState, useRef } from 'react'
import "./questions.css"
import api from '../../utils/api'
import { Link } from 'react-router-dom'


const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correct, showCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [nextPage, setNextPage] = useState(false)
  const [timer, setTimer] = useState('00:00:00')

  const Ref = useRef(null)

  /*=======================TIMER FUNCTION==========================*/
  const getTimeRemaining = (e) => {
  const total = Date.parse(e) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total, hours, minutes, seconds
    };
}

const getDeadTime = () => {
  let deadline = new Date();

  deadline.setSeconds(deadline.getSeconds() + 10);
  return deadline;
}

  useEffect(() => {
    const startTimer = (e) => {
      let { total, hours, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {
  
          setTimer(
              (hours > 9 ? hours : '0' + hours) + ':' +
              (minutes > 9 ? minutes : '0' + minutes) + ':'
              + (seconds > 9 ? seconds : '0' + seconds)
          )
      } 

      
    }
    const clearTimer = (e) => {
  
      setTimer('00:00:10');
  
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }
  clearTimer(getDeadTime());
  }, []);

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [])

/* ===================== QUESTION LOGIC ================== */
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
  if(!timer.match("00:00:00")) {
    return(
      <section className='section container'>
      <div className='container-question'>
         <div className='timer-container'>{timer}</div>
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
              <p>You have answered all questions</p>
              )}
              </div>
    </section>
    )
  } else{
    return(
      <section className='section container'>
        <div className='container-question'>
            <div className='box-contain'>
              <h5>Yahh, waktu kamu udah Habis :(</h5>
              <div className='btn-question'>
                  <button><Link to="/finished">Results</Link></button>
              </div>
            </div>
        </div>
      </section>
    )
  }

}

export default Questions