import React from 'react'
import "./header.css"

const Header = () => {
  return (
      <header className='header'>
        <div className='nav container'>
          <div className='logo'>
              <a href="/#">Quiz App</a>
          </div>
          <div className='btn-logout'>
              <button>LOGOUT</button>
          </div>
        </div>
      </header>
  )
}

export default Header