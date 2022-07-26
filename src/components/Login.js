import React, { useContext } from 'react'
import { ContextTest } from '../context/ContextTest';

export const Login = () => {
  const { user, setUser } = useContext(ContextTest);

  const saveData = e => {
    e.preventDefault();

    let user = {
      nick: e.target.nick.value,
      name: e.target.name.value, 
      web: e.target.web.value
    };

    setUser(user);
  }
  return (
    <div>
      <h1>Login</h1>
      <p>Login Page</p>

      <form className='login' onSubmit={saveData}>
        <input type='text' name='nick' placeholder='NickName' />
        <input type='text' name='name' placeholder='Name' />
        <input type='text' name='web' placeholder='Web' />
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}
