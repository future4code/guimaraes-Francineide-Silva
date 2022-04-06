import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const login = () => {
    

    const body = {
      email: email,
      password: password
    }

    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/francineide-silva-guimaraes/login', body)
      .then(res => {
        
        localStorage.setItem('token', res.data.token)
        navigate('/login')
      })
      .catch(err => alert('Deu ruim: ', err.response))

  }

  return (
    <div>
      <input placeholder="E-mail" value={email} onChange={handleEmail} />
      <input placeholder="Senha" value={password} onChange={handlePassword} />
      <button onClick={login}>Entrar!</button>
    </div>
  )
}
export default LoginPage;