import React from 'react'
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from "./components/SignUp"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
      
      
       
    </>
  )
}

export default App