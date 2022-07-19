import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import aliensReducer from './features/aliens';
import cannonReducer from './features/cannon';
import missilesReducer from './features/missiles';
import scoreReducer from './features/score';
import adaptiveReducer from './features/adaptive';
import bangReducer from './features/bang';

const store = configureStore({
    reducer: {
        aliens: aliensReducer,
        cannon: cannonReducer,
        missiles: missilesReducer,
        score: scoreReducer,
        adaptive: adaptiveReducer,
        bang: bangReducer
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store} >        
        <App />
    </Provider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
