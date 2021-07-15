import React from 'react'
import close from '../images/close.svg'

function MobileNav({viewNav, setNav}) {

const hideNav = () => {
    setNav('none')
  }

return (
    <section className="navigation-section" style={{display: `${viewNav}`}}>
        <section className="mobile-links">
            <img src={close} className="cross" alt="Close Button" onClick={hideNav}/>
            <a href="#header-grid" className="nav-link" onClick={hideNav}>Home.</a>
            <a href="#intro-background" className="nav-link" onClick={hideNav}>About Me.</a>
            <a href="#works-grid" className="nav-link" onClick={hideNav}>Works.</a>
            <a href="#contact-background" className="nav-link" onClick={hideNav}>Contact.</a>
        </section>
    </section>
)
}

export default MobileNav
