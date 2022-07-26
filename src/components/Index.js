import React, { useContext } from 'react'
import { ContextTest } from '../context/ContextTest'

export const Index = () => {
  const { user, setUser } = useContext(ContextTest);
  
  return (
    <div>
      <h1>Index</h1>
      <p>Index Page</p>
      <p>Name: {user.name}</p>
    </div>
  )
}
