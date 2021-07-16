import React from 'react'
import edition from '../images/edition.svg'
import pin from '../images/pin.svg'
import bubble from '../images/speech-bubble.svg'

function Services() {
    return (
    
    <section className="three-background">
        <section className="three-layer">
            <article>
                <img src={edition} alt="penicl on paper"/>
                <h2>Creative Design</h2>
                <p>I'm a developer with a creative twist. I take time to make sure your website is pleasing to look at! </p>
            </article>
            <article>
                <img src={pin} alt="pin on paper"/>
                <h2>Development</h2>
                <p>Every single project is a challenge I accept eagerly. Let's implement innovative designs together. </p>
            </article>
            <article>
                <img src={bubble} alt="chat bubble"/>
                <h2>Support</h2>
                <p>I am willing to help you from start to finish and eliviate any problems along the way. Let's get started! </p>
            </article>
        </section> 
    </section> 
    )
}

export default Services
