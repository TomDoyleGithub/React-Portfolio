import React from 'react'
import html from '../images/html-logo.svg'
import css from '../images/css-logo.svg'
import bootstrap from '../images/bootstrap-logo.svg'
import javascript from '../images/javascript-logo.svg'
import react from '../images/react-logo.svg'
import illustrator from '../images/illustrator-logo.svg'
import photoshop from '../images/photoshop-logo.svg'

function Skills() {
    return (
        <section id="skills-background">
            <section className="skills-grid">
                <h1>Skills</h1>
                <article>
                    <aside className="skills-one">
                        <div><img src={html} alt="logo for Html"/><p>HTML 5</p></div>
                        <div><img src={css} alt="logo for Css"/><p>CSS 3</p></div>
                        <div><img src={bootstrap} alt="logo for Bootstrap"/><p>Bootstrap</p></div>
                        <div><img src={javascript} alt="logo for Javascript"/><p>Javascript</p></div>
                        <div><img src={react} alt="logo for React"/><p>React</p></div>
                    </aside>
                    <aside className="skills-two">
                        <div><img src={illustrator} alt="logo for Illustrator"/><p>Illustrator</p></div>
                        <div><img src={photoshop} alt="logo for Photoshop"/><p>Photoshop</p></div>
                    </aside>
                </article>
            </section>
        </section>
    )
}

export default Skills
