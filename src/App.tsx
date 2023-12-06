
import './App.css';
import { useEffect } from 'react';

function App() {


  const noda = window.parent.document.querySelector('body');

  console.log(noda);
  useEffect(() => {
    noda && (noda.className = 'test');
  }, [noda]);


  return (
    <iframe>

      <h1>Vite + React</h1>
      <div>
        {JSON.stringify(noda)}
      </div>

    </iframe>
  );
}

export default App;
