import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'

//initial state
const initialState = {
  allBooks: [
    { 
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "The Hermit",
      category: "History"
    }, 
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Queen of Endol",
      category: "Horror"
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Goals",
      category: "Learning"
    },
    {
      bookId: Math.floor((Math.random() * 100) + 1),
      title: "Helena of Avalor",
      category: "Kids"
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

export default initialState;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
