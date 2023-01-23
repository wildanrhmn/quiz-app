import React from 'react'
import "./dashboard.css"
import QuizPic from "../../assets/quiz.png"
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

  const navigate= useNavigate()

  const handleGoToQuestionPage = () => {
    if(window.confirm("Udah belajar belum dek?") === true) {
        navigate("/question-1")  
    }
  }
  return (
    <section className='section container'>
        <div className='grid dashboard-grid'>
          <div className='left'>
              <h3>PUT YOUR SKILL TO THE TEST</h3>
              <p>A Quiz that will assess ur general knowledge skill and improve them!</p>
              <a href="#box"><button>I Want It!</button></a>
          </div>
          <div className='right'>
              <img src={QuizPic} alt="quiz" />
          </div>
        </div>

        <div className='section focused'>
            <h3>GENERAL KNOWLEDGE TEST</h3>
            <div className='information-wrapper' id="box">
              <div className='info-detail'>
                <div className='isi'>
                  <h5>Number of Questions</h5>
                  <p>10</p>
                  <h5>Difficulty</h5>
                  <p>Normal</p>
                  <h5>Type</h5>
                  <p>True or False</p>
                 <button onClick={handleGoToQuestionPage}>Begin</button>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard