import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//importowany jest jedynie komponent Bird
import Bird from './components/Bird';

//tablica danych Ptaków, z których wygenerowane zostaną znaczniki Bird
const birds = [
  {color: "red", migratesForWinter: false, hasLegs: true},
  {color: "blue", migratesForWinter: true, hasLegs: false},
  {color: "yellow", migratesForWinter: true, hasLegs: true},
  {color: "brown", migratesForWinter: false, hasLegs: true},
  {color: "pink", migratesForWinter: false, hasLegs: false},
  {color: "purple", migratesForWinter: true, hasLegs: false}
];

//<React.StrictMode>
//    <App />
//</React.StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ul>
    {birds.map((bird) => <Bird key={bird.color} color={bird.color} migratesForWinter={bird.migratesForWinter} hasLegs={bird.hasLegs}/>)}
  </ul>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
