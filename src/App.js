import React from 'react'
import { BrowserRouter  ,Route, Routes } from 'react-router-dom';
// import Switch from 'react-dom';
import Login from './components/Login';
import "./App.css"


const App = () => {
  return (
    <div className='App'>
        {/* <BrowserRouter>
            <Routes> w
                <Login/>
            </Routes>
        </BrowserRouter> */}
        <Login/>
    </div>
  )
}

export default App;