import React from 'react'
import "./finished.css"
import { Link, useLocation } from 'react-router-dom'

const Finished = () => {

    const location = useLocation()

  return (
        <section className='section container finish-container'>
            <div className='container-wrapper'>
                <h3>CONGRATULATIONS!</h3>
                <div className='kotak'>
                    <div className='dalem-kotak'>
                        <p>You have {location.state.totalScore} correct answers!</p>
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