import React, { useContext } from 'react'
import { ContextTest } from '../context/ContextTest'

export const Index = () => {
  const shared = useContext(ContextTest);
  console.log(shared);
  return (
    <div>
      <h1>Index</h1>
      <p>Index Page</p>
    </div>
  )
}
