import React, {useState} from 'react'
import leftArow from '../images/left-arrow.svg'
import rightArow from '../images/right-arrow.svg'
import { SliderData } from './SliderData'

function Slider() {
    const arrowStyle = {
        width: '25px',
        opacity: '90%'
    }
    const [current, setCurrent] = useState(0)
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <section className="border slider">
            <img style={arrowStyle} src={leftArow} className="leftArrow" alt="Left Arrow" onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <section className={index === current ? 'slide active' : 'slide'}>
                        {index === current && slide}
                    </section>
                )
            })}
            <img style={arrowStyle} src={rightArow} className="rightArrow" alt="Left Arrow" onClick={nextSlide}/>
        </section>
    )
}

export default Slider
