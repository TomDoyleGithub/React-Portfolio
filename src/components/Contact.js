import React from 'react'
import visit from '../images/visit-card.svg'
import phone from '../images/phone-call.svg'
import globe from '../images/github.svg'

function Contact() {
    return (
        <section id="contact-background">
            <article className="lets-work">
                <p>Contact Me</p>
                <h1>Let's work together!</h1>
            </article>
            <section className="contact-grid">
                <article>
                    <img src={visit} alt="an icon of an email card"/>
                    <h2>Email</h2>
                    <p className="social-text">heypunkinut@gmail.com</p>
                </article>
                <article>
                    <img src={phone} alt="an icon of a phone"/>
                    <h2>Number</h2>
                    <p className="social-text">0467975369</p>
                </article>
                <article>
                    <a href="https://github.com/Punkinut" target="_blank" rel="noreferrer">
                    <img src={globe} alt="an icon of a globe"/>
                    <h2>Github</h2>
                    <p className="social-text">Punkinut</p>
                    </a>
                </article>
                <section className="resume">
                    <a href="https://drive.google.com/file/d/1HMwQBFhpEKrhULFgEYteXw8zN9-RBdE4/view?usp=sharing" target="_blank" rel="noreferrer"><button className="resume-button">Resume</button></a>
                </section>
            </section>
        </section>  
    )
}

export default Contact
