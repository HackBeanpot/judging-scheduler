import React from 'react';
import './CSS/App.css';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom'
import Main from "./Main";

function App() {
  return (
    <div className='App'>
      <Main/>
      <div className='Links'>
        <Link to='/home' >Home</Link>
        <Link to='/admin'>General View</Link>
        <Link to='/judge'>Judge View</Link>
      </div>
    </div>
  )
}


export default App;
