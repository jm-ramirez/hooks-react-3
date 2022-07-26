import { useEffect, useState } from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { ContextTest } from './context/ContextTest';
import { AppRouter } from './router/AppRouter';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    //Primera vez que se carga el componente
    let user_local = JSON.parse(localStorage.getItem('user'));

    setUser(user_local);
  }, []);

  useEffect(() => {
    //Cada vez que se actualice el estado usuario, se guarda en el local storage.
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  
  return (
    <div className="App">
      <ContextTest.Provider value={{
        user,
        setUser
      }}>
        <AppRouter/>
        <MyComponent/>
      </ContextTest.Provider>
    </div>
  );
}

export default App;
