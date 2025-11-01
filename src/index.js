import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Icons ke liye
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function setup() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   <Provider store={store}>
    <App />
  </Provider>
);
}

setup(); // Call the function to render