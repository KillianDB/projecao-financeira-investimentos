import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProjecaoScreen from './screens/ProjecaoScreen';
import UserScreen from './screens/UserScreen';
import React from 'react';
import UserId from './components/UserId'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/projecao' element={<ProjecaoScreen />}/>
      <Route path='/login' element={<LoginScreen />}/>
      <Route path='/user/:userID' Component={<UserId/>} element={<UserScreen />}/>
    </Routes>
    </Router>
  );
  
}

export default App;