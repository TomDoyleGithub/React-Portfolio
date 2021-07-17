import React from 'react'
import About from './About'
import Services from './Services'
import Fade from 'react-reveal/Fade';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

function Main() {
    return (
        <main>
            <Services/>
            <Fade bottom ssrFadeout>
                <About/>
                <Skills/>
                <Works/>
                <Contact/>
                <Footer/>
            </Fade>
        </main>
    )
}

export default Main
