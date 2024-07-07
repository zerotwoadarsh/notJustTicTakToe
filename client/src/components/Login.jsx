import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    console.log('Login')
  }
  return (
    <div>
      <label>Login</label>
      <input placeholder='Email' onChange={(event)=>{setUserName(event.target.value)}}/>
      <input placeholder='Password' onChange={(event)=>{setPassword(event.target.value)}}/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login