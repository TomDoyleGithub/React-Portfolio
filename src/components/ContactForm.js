import React, {useState} from 'react'
import { motion } from 'framer-motion'
import chatting from '../images/chatting.svg'
import whiteclose from '../images/closeW.svg'

function ContactForm({opacity}) {
    const [isOpen, setIsOpen] = useState(false);
    const [ viewIcon, setIcon ] = useState('block')
    const [ viewContent, setContent ] = useState('none')

    const hideIcon = () => {
        setIcon('none')
      }

    const showIcon = () => {
      setIcon('block')
    }

    const hideContent = () => {
        setContent('none')
      }

    const showContent = () => {
      setContent('block')
    }

    const iconVar = {
        opened: {
            width: '90vw',
            height: '80vh',
            bottom: 50,
            left: 25,
            right: 25,
            margin: 'auto',
            borderRadius: '20px',
        },
        closed: {
            width: '50px',
            height: '50px',
            borderRadius: '50px',
            bottom: 25,
            right: 25,
            left:'auto'
        }
    }

    return (
        <section>
            <motion.div style={{opacity: `${opacity}`}} animate={isOpen ? "opened" : "closed"} initial={false} variants={iconVar}  className="contact-formy">
                <section className="form-content" style={{display: `${viewContent}`}} >
                    <motion.img className="close-w" whileHover={{transform: 'rotate(90deg)'}} src={whiteclose} onClick={() => {
                        setIsOpen(state => !state)
                        showIcon()
                        hideContent()
                    }}/>
                    <form className="Woah">
                        <p>Send Me A Message</p>
                        <input placeholder="Name"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Message"></input>
                        <button className="submit-me">Let's Talk</button>
                    </form>
                </section>
            </motion.div>
            <motion.img whileHover={{opacity: 0.8}} style={{display: `${viewIcon}`, opacity: `${opacity}`}}  onClick={() => {
                setIsOpen(state => !state)
                hideIcon()
                showContent()
            }} src={chatting} className="chat-icon" alt="Chat Icon"/>
        </section>
        
        
    )
}

export default ContactForm
