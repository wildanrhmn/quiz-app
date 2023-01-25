import React from 'react'
import "./header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }
  return (
      <header className='header'>
        <div className='nav container'>
          <div className='logo'>
              <a href="/#">Quiz App</a>
          </div>
          <div className='logout-section'>
            <p>Hello {localStorage.getItem("akunlogin")}</p>
            <i className="uil uil-power" onClick={handleLogout}></i>
          </div>
        </div>
      </header>
  )
}

export default Header