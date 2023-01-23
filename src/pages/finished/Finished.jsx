import React from 'react'
import "./finished.css"

const Finished = () => {
  return (
        <section className='section container finish-container'>
            <div className='container-wrapper'>
                <h3>CONGRATULATIONS!</h3>
                <div className='kotak'>
                    <div className='dalem-kotak'>
                        <p>You have answered 10/10 Questions</p>
                        <button>Again</button>
                        <button>Main Menu</button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Finished