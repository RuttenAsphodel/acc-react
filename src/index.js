/* Codigo Js Estandar */
// const element = document.createElement('h1');
// element.innerText = 'Gaston Gato pesao';
// const container = document.getElementById('root');
// container.appendChild(element);

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Inicio from './Screens/Inicio';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <React.StrictMode>
      <Inicio />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

