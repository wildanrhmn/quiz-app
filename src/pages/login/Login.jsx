import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [dataUsers, setDataUsers] = useState([])
  const [loaderVisible, setLoaderVisible] = useState(false)

  // eslint-disable-next-line
  const [authenticated, setAuthenticated] = useState(localStorage
    .getItem(localStorage.getItem("authenticated")|| false)); 
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    setLoaderVisible(!loaderVisible)
    const akun = dataUsers.find((user) => user.username === username)
    setTimeout(() => {
      if(akun && akun.password === password) {
        setAuthenticated(true)
        localStorage.setItem("authenticated", true)
        localStorage.setItem("akunlogin", username)
        navigate("/dashboard")
      }

      if(akun && akun.password !== password) {
        setLoaderVisible(false)
        alert("Password yang anda masukan salah")
      }
    }, 5000)
    
  }
  useEffect(() => {
    axios
    .get("/db/users.json")
    .then((response) => setDataUsers(response.data))
    .catch((err) => console.info(err))
  },[])
  
  if(loaderVisible === false) {
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

return(
  <section className='login-section'>
    <div className='login-loader'>
      <Loader isVisible={loaderVisible} />
    </div>
  </section>
)
}

export default Login