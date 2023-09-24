"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOut = () => {
  return (
    <button onClick={()=>signOut()}>SignOut</button>
  )
}

export default SignOut