import React from 'react'
import dot from '../images/dots-menu.png'

function Works() {
    return (
        <section id="works-grid">
            <article className="works-boxes">
                
            </article>
            <article className="works-text">
                <p>Here are my</p>
                <h1>Works</h1>
                <p>Nothing gets better than a visual display of my portfolio. Take a dive and explore my work!</p>
                <a href="#contact-background"><button>Contact Me <img src={dot} alt="Dot Effect"/></button></a>
            </article>
        </section>
    )
}

export default Works
