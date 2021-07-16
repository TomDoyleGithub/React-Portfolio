import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MobileNav from './components/MobileNav';
import Nav from './components/Navbar';
import './styles/reset.css'
import './styles/style.css'

 const App = () => {
  const [ opacity, setOpacity ] = useState('0')
  const [ viewNav, setNav ] = useState('none')
  return (
    <div>
      <MobileNav viewNav={viewNav} setNav={setNav}/>
      <Nav opacity={opacity} setNav={setNav}/>
      <Header opacity={opacity} setOpacity={setOpacity}/>
      <Main/>
    </div>
  );
}

export default App