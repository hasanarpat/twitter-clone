"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import Register from '@/app/auth/register/page'

const AuthLayout = ({children}: {children:React.ReactNode}):React.ReactNode => {
    const {status} = useSession()
    if(status=="unauthenticated")return <Register/>
    if(status=="loading") return <h1>Loading...</h1>
  return (
    <>{children}</>
  )
}

export default AuthLayout