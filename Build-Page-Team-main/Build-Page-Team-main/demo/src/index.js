import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { AuthModalProvider } from './context/AuthModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthModalProvider>
        <App />
      </AuthModalProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
