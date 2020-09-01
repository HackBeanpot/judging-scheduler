import React from 'react';
import './App.css';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom'
import Main from "./Main";

function App() {
  return (
    <div className='App'>
      <Main/>
      <Link to="/admin">Click me</Link>
    </div>
  )
}


export default App;
