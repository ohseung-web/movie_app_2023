import React from 'react';
import './style/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './routers/About';
import Home from './routers/Home';
import Navgation from './components/Navgation';

function App() {
  return (
    <HashRouter>
      <Navgation />
      <Routes>
        <Route path="/" exact={true} Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
