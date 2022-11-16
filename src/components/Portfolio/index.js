import { React, useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [ letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    
    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img 
                                    src={process.env.PUBLIC_URL + `${port.cover}`}
                                    className="portfolio-image" 
                                    alt="cover image of project" 
                                />
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <div className='text-zone'>
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"PORTFOLIO".split("")}
                            idx={15}
                        />
                    </h1>
                    <div>
                        {renderPortfolio(portfolioData.portfolio)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;