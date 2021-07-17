import React from 'react'
import { Link } from "react-scroll";
import close from '../images/close.svg'

function MobileNav({viewNav, setNav}) {

const hideNav = () => {
    setNav('none')
  }

return (
    <section className="navigation-section" style={{display: `${viewNav}`}}>
        <section className="mobile-links">
            <img src={close} className="cross" alt="Close Button" onClick={hideNav}/>
            <Link activeClass="active" to="header-grid" spy={true} smooth={true} offset={0} duration={400} onClick={hideNav}>Home.</Link>
            <Link activeClass="active" to="intro-background" spy={true} smooth={true} offset={0} duration={1000} onClick={hideNav}>About Me.</Link>
            <Link activeClass="active" to="works-grid" spy={true} smooth={true} offset={-70} duration={1200} onClick={hideNav}>Works.</Link>
            <Link activeClass="active" to="contact-background" spy={true} smooth={true} offset={-70} duration={1300} onClick={hideNav}>Contact.</Link>
        </section>
    </section>
)
}

export default MobileNav
