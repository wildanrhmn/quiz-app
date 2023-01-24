import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [dataUsers, setDataUsers] = useState([])

  // eslint-disable-next-line
  const [authenticated, setAuthenticated] = useState(localStorage
    .getItem(localStorage.getItem("authenticated")|| false)); 
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    const akun = dataUsers.find((user) => user.username === username)
    
    setTimeout(() => {
      if(akun && akun.password === password) {
        setAuthenticated(true)
        localStorage.setItem("authenticated", true)
        navigate("/dashboard")
      }
    }, 5000)
    
  }
  useEffect(() => {
    axios
    .get("/db/users.json")
    .then((response) => setDataUsers(response.data))
    .catch((err) => console.info(err))
  },[])
  
  return (
    <section className='login-section'>
      <div className='login-form-section'>
          <h5>Quiz App</h5>
          <form onSubmit={(e) => handleLogin(e)}>
              <label>Username</label>
              <input type="text" className='input-login' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} />

              <label>Password</label>
              <input type="password" className='input-password' 
              name='password'
              onChange={(e) => setPassword(e.target.value)} />

              <div className='btn-wrapper'>
                <button className='btn-login' type='submit'>Login</button>
              </div>
          </form>
      </div>
    </section>
  )
}

export default Login