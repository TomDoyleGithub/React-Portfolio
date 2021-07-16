import React from 'react'
import { Link } from "react-scroll";
import proPic from '../images/pro-pic.jpg'
import speeachArrow from '../images/speech-arrow.svg'
import book from '../images/book.svg'

function About() {
    return (
        <section id="intro-background">
            <section className="intro-grid">
                <img src={proPic} className="pro-pic" alt="Profile Icon"/>
                <article>
                    <img src={speeachArrow} className="arrow" alt="Speach Arrow"/>
                    <p>Hello, I'm</p>
                    <h1>Tom Doyle</h1>
                    <p>Well I'm a full stack developer, based in the heart of Sydney! My goal is to make sure your brand meets todays modern standards.</p>
                    <Link activeClass="active" to="skills-background" spy={true} smooth={true} offset={-70} duration={400}><button><img src={book} className="book" alt="book icon"/>Learn More</button></Link>
                </article>
            </section>
        </section>
    )
}

export default About