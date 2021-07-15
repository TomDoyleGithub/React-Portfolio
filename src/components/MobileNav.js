import React from 'react'
import close from '../images/close.svg'

function MobileNav({viewNav}) {
    return (
        <section className="navigation-section" style={{display: `${viewNav}`}}>
            <section className="mobile-links">
                <img src={close} class="cross" alt="Close Button"/>
                <a href="#header-grid" class="nav-link">Home.</a>
                <a href="#intro-background" class="nav-link">About Me.</a>
                <a href="#works-grid" class="nav-link">Works.</a>
                <a href="#contact-background" class="nav-link">Contact.</a>
            </section>
        </section>
    )
}

export default MobileNav
