import React from 'react';
import { Link } from "react-scroll";
import person from '../images/user.svg'
import folder from '../images/folder.svg'
import white from '../images/white.png'


const Header = ({opacity, setOpacity}) => {
    setTimeout(function(){
        setOpacity('1')
    }, 400);
    
  return (
    <header style={{opacity: `${opacity}`, transition: '500ms'}}>
        <section id="header-grid">
            <article>
                <p>Hi There,</p>
                <h1>I Am a Developer</h1>
                <p>Welcome to my Portfolio Website.</p>
                <Link activeClass="active" to="intro-background" spy={true} smooth={true} offset={0} duration={1100}><button><img src={person} alt="user icon"/>More About Me</button></Link>
            </article>
            <img src={folder} className="folder" alt="folder"/>
            <img src={white} className="white-corner" alt="White Corner Design Element"/>
        </section>
    </header>
  );
}

export default Header;