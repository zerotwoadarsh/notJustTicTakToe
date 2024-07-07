import React from 'react'
import { useState } from 'react';


const SignUp = () => {
  const [user, setUser] = useState(null);
  firstName :{}

  const signUp = () => {};
  return (
    <div>
      <label>Sign Up</label>
      <input placeholder='First Name' onChange={(event)=>{setUser({...user, firstName: event.target.value})}} />
      <input placeholder='Last Name' onChange={(event)=>{setUser({...user, lastName: event.target.value})}}/>
      <input placeholder='Email' onChange={(event)=>{setUser({...user, email: event.target.value})}}/>
      <input placeholder='Password' onChange={(event)=>{setUser({...user, password: event.target.value})}}/>
      <button onClick={signUp}>Sign Up</button>
    </div>

  )
}

export default SignUp