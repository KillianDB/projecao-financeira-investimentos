import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProjecaoScreen from './screens/ProjecaoScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/projecao' element={<ProjecaoScreen />}/>
      <Route path='/personalspace' element={<LoginScreen />}/>
      <Route path='*' element={<NotFoundScreen />}/>
    </Routes>
    </Router>
  );
  
}

export default App;