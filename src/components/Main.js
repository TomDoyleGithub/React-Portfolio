import React from 'react'
import About from './About'
import Services from './Services'
import Fade from 'react-reveal/Fade';
import Skills from './Skills';

function Main() {
    return (
        <main>
            <Services/>
            <Fade bottom ssrFadeout>
                <About/>
                <Skills/>
            </Fade>
        </main>
    )
}

export default Main
