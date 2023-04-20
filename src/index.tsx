import React from 'react';
import ReactDOM from 'react-dom/client'; //v18
// import ReactDOM from 'react-dom'; //v17
import './index.css';
import App from './App';
import { AppStateProvider } from './state/AppStateContext';

/*v18*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);

/*v17*/
// const root = document.getElementById('root')!;
// ReactDOM.render(<App />, root);
