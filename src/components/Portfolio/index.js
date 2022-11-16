import { React, useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className="container portfolio-page">
            <div className='text-zone'>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"PORTFOLIO".split("")}
                        idx={15}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Portfolio;