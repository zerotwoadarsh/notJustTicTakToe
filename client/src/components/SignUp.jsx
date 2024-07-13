import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import cookie from 'Universal-cookie'


const SignUp = () => {
  const cookies = new cookie();
  const [user, setUser] = useState(null);
  firstName :{}

  const signUp = () => {
    axios.post('http://localhost:3001/signup', user).then((res) => {
      const { userId, token, fullName, username, hashPassword } = res.data;
      cookies.set("token", token);
    });
  };
  return (
    <div>
      <label>Sign Up</label>
      <input placeholder='First Name' onChange={(event)=>{setUser({...user, firstName: event.target.value})}} />
      <input placeholder='Last Name' onChange={(event)=>{setUser({...user, lastName: event.target.value})}}/>
      <input placeholder='Username' onChange={(event)=>{setUser({...user, username: event.target.value})}}/>
      <input placeholder='Password' onChange={(event)=>{setUser({...user, password: event.target.value})}}/>
      <button onClick={signUp}>Sign Up</button>
    </div>

  )
}

export default SignUp