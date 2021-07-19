import image from '../images/Weather.png'
import blog from '../images/Blog.png'
import game from '../images/2048.png'
import budget from '../images/Budget.png'
import quiz from '../images/Quiz.png'
import { motion } from 'framer-motion'
export const SliderData = [
    <a href="https://punkinut-budget-tracker.herokuapp.com/" target="_blank" rel="noreferrer" className="card">
        <section className="image-slide">
            <img src={budget} alt='Budget Page' className='classicImage'/>
            <motion.div whileHover={{opacity: 1 , transition: { duration: 0.8, type: "spring", }}} className="repo-link">
                <p>Budegt Tracker</p>
            </motion.div>
        </section>
    </a>,
    <a href="https://punkinut.github.io/2048-game/" target="_blank" rel="noreferrer" className="card">
        <section className="image-slide">
            <img src={game} alt='Game Page' className='classicImage'/>
            <motion.div whileHover={{opacity: 1 , transition: { duration: 0.8, type: "spring", }}} className="repo-link">
                <p>2048 Game</p>
            </motion.div>
        </section>
    </a>,
    <a href="https://punkinut.github.io/weather-dashboard/" target="_blank" rel="noreferrer" className="card">
        <section className="image-slide">
            <img src={image} alt='Weather Dashboard' className='classicImage'/>
            <motion.div whileHover={{opacity: 1 , transition: { duration: 0.8, type: "spring", }}} className="repo-link">
                <p>Weather Dashboard</p>
            </motion.div>
        </section>
    </a>,
    <a href="https://infinite-earth-35208.herokuapp.com/" target="_blank" rel="noreferrer" className="card">
        <section className="image-slide">
            <img src={blog} alt='Blog Page' className='classicImage'/>
            <motion.div whileHover={{opacity: 1 , transition: { duration: 0.8, type: "spring", }}} className="repo-link">
                <p>Blog X</p>
            </motion.div>
        </section>
    </a>,
    <a href="https://punkinut.github.io/coding-quiz/" target="_blank" rel="noreferrer" className="card">
        <section className="image-slide">
            <img src={quiz} alt='Quiz Page' className='classicImage'/>
            <motion.div whileHover={{opacity: 1 , transition: { duration: 0.8, type: "spring", }}} className="repo-link">
                <p>Coding Quiz</p>
            </motion.div>
        </section>
    </a>,
]