import React, { useState } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Nav from './components/Navbar';

 const App = () => {
  const [ opacity, setOpacity ] = useState('0')
  const [ viewNav, setNav ] = useState('none')
  return (
    <div>
      <MobileNav viewNav={viewNav}/>
      <Nav opacity={opacity} setOpacity={setOpacity} setNav={setNav}/>
      <Header opacity={opacity} setOpacity={setOpacity}/>
    </div>
  );
}

export default App