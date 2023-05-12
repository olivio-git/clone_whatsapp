import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import { BrowserRouter } from 'react-router-dom'
import store from './redux-toolkit/store/store.js';
import { Provider } from 'react-redux';
import "./main.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
