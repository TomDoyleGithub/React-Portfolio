import React from 'react';
import logo from "../images/logo.svg"
import linkedin from '../images/linkedin.svg'
import hamburger from '../images/meat.svg'

const Nav = () => {

  return (
    <nav id="page-top">
      <img src={logo} className="logo" alt="logo"/>
        <section id="links">
            <a className="scroll" href="#header-grid">Home.</a>
            <a className="scroll" href="#intro-background">About Me.</a>
            <a className="scroll" href="#works-grid">Works.</a>
            <a className="scroll" href="#contact-background">Contact.</a>
        </section>
        <a href="https://www.linkedin.com/in/tom-doyle-505947204/" target="_blank" rel="noreferrer" className="social"><img src={linkedin} alt="social icon"/></a>
        <img src={hamburger} className="burger" alt="Hamburger Icon"/>
    </nav>
  );
}

export default Nav;
