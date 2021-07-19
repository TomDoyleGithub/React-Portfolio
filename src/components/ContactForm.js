import React, {useState} from 'react'
import { motion } from 'framer-motion'
import chatting from '../images/chatting.svg'
import whiteclose from '../images/close.svg'

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
            width: '80vw',
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
                        <input placeholder="Name" name="Name" type='Name' maxLength="20" required></input>
                        <input placeholder="Email" name="Email" type='Email' maxLength="25" pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' required></input>
                        <input placeholder="Message" name="Message" maxLength="100" required></input>
                        <motion.button whileHover={{opacity: '0.7'}} className="submit-me">Let's Talk</motion.button>
                    </form>
                </section>
            </motion.div>
            <motion.img whileHover={{opacity: 0.8, transform: 'rotate(10deg)'}} style={{display: `${viewIcon}`, opacity: `${opacity}`}}  onClick={() => {
                setIsOpen(state => !state)
                hideIcon()
                showContent()
            }} src={chatting} className="chat-icon" alt="Chat Icon"/>
        </section>
        
        
    )
}

export default ContactForm
