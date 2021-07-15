import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Navbar';

 const App = () => {
  const [ opacity, setOpacity ] = useState('0')
  return (
    <div>
      <Nav opacity={opacity} setOpacity={setOpacity}/>
      <Header opacity={opacity} setOpacity={setOpacity}/>
    </div>
  );
}

export default App