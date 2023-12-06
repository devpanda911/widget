import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {




  useEffect(() => {
    window.addEventListener('message', function(event) {
      if (event.data.type === 'parentDom') {
        // Verify the origin and type of the message
        console.log('Parent DOM received in iframe:', event.data.data);

        // You can now manipulate the received parent DOM if needed
        // Note: Be cautious about potential security risks
      }
    });
  }, []);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React1111</h1>
      <div className="card">
        <button onClick={() => {

        }}>
test
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
