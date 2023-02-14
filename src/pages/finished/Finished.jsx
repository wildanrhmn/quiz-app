import React from 'react'
import "./finished.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { scoreContext } from '../../states/Score'

const Finished = () => {
    const {score} = useContext(scoreContext)
  return (
        <section className='section container finish-container'>
            <div className='container-wrapper'>
                <h3>CONGRATULATIONS!</h3>
                <div className='kotak'>
                    <div className='dalem-kotak'>
                        <p>You have {score} correct answers!</p>
                       <Link to="/dashboard">
                        <button>Main Menu</button>
                        </Link>
                       <Link to="/question-1">
                       <button>Again</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Finished