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
        <Link className='text-link' to='/home' >Home</Link>
        <Link className='text-link' to='/admin'>General View</Link>
        <Link className='text-link' to='/judge'>Judge View</Link>
      </div>
    </div>
  )
}


export default App;
