import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import proPic from '../images/pro-pic.jpg'
import speeachArrow from '../images/speech-arrow.svg'
import book from '../images/book.svg'

function About() {
    return (
        <section id="intro-background">
            <section className="intro-grid">
                <Fade bottom>
                <img src={proPic} className="pro-pic" alt="Profile Icon"/>
                <article>
                    <img src={speeachArrow} className="arrow" alt="Speach Arrow"/>
                    <p>Hello, I'm</p>
                    <h1 className="show">Tom Doyle</h1>
                    <h1 className="hide"><Typewriter  options={{strings: ['Tom Doyle', 'A Coder'],autoStart: true,loop: true,}}/></h1>
                    <p>Well I'm a full stack developer, based in the heart of Sydney! My goal is to make sure your brand meets todays modern standards.</p>
                    <Link activeClass="active" to="skills-background" spy={true} smooth={true} offset={-70} duration={400}><button><img src={book} className="book" alt="book icon"/>Learn More</button></Link>
                </article>
                </Fade>
            </section>
        </section>
    )
}

export default About
