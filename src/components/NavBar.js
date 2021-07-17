import React from 'react';
import { Link } from "react-scroll";
import logo from "../images/logo.svg"
import linkedin from '../images/linkedin.svg'
import hamburger from '../images/meat.svg'

const Nav = ({ opacity, setNav }) => {

  const showNav = () => {
    setNav('block')
  }

  return (
    <nav id="page-top" style={{opacity: `${opacity}`, transition: '500ms'}}>
      <img src={logo} className="logo" alt="logo"/>
        <section id="links">
            <Link activeClass="active" to="header-grid" spy={true} smooth={true} offset={0} duration={400}>Home.</Link>
            <Link activeClass="active" to="intro-background" spy={true} smooth={true} offset={0} duration={1000}>About Me.</Link>
            <Link activeClass="active" to="works-grid" spy={true} smooth={true} offset={-160} duration={1200}>Works.</Link>
            <Link activeClass="active" to="contact-background" spy={true} smooth={true} offset={-70} duration={1300}>Contact.</Link>
        </section>
        <a href="https://www.linkedin.com/in/tom-doyle-505947204/" target="_blank" rel="noreferrer" className="social"><img src={linkedin} alt="social icon"/></a>
        <img src={hamburger} className="burger" alt="Hamburger Icon" onClick={showNav}/>
    </nav>
  );
}

export default Nav;
