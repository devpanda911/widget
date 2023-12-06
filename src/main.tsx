import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('widget-root')!).render(
  <iframe>
    <App/>
  </iframe>
);
