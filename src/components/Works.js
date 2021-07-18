import React from 'react'
import Slider from './Slider'
import { Link } from "react-scroll";
import dot from '../images/dots-menu.png'


function Works() {
   
    return (
        <section id="works-grid">
            <Slider/>
            <article className="works-text">
                <p>Here are my</p>
                <h1>Works</h1>
                <p>Nothing gets better than a visual display of my portfolio. Take a dive and explore my work!</p>
                <Link activeClass="active" to="contact-background" spy={true} smooth={true} offset={-70} duration={800}><button>Contact Me <img src={dot} alt="Dot Effect"/></button></Link>
            </article>
        </section>
    )
}

export default Works
