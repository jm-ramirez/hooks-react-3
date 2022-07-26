import './App.css';
import { ContextTest } from './context/ContextTest';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <ContextTest.Provider value='Web'>
        <AppRouter/>
      </ContextTest.Provider>
    </div>
  );
}

export default App;
