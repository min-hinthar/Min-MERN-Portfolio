import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={[ 'C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am a <span className='in-text'>divergent/critical thinker</span>, a problem-solver with <span className='in-text'>self-efficacy</span>, with an aptitude for <span className='in-text'>strategic planning</span> and <span className='in-text'>design-thinking</span>, a knack for <span className='in-text'>new business development</span>, utilizing <span className='in-text'>full-stack web development</span> skillsets and innate passion for actionable <span className='in-text'>policy research</span>.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />                                
                                </li>
                                <li className='half'>
                                    <input type='text' name='email' placeholder='Email' required />                                
                                </li>
                                <li className='half'>
                                    <input type='text' name='subject' placeholder='Subject' required />                                
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />                              
                                </li>
                                <li className='half'>
                                    <input type='submit' className='flat-button' value='SUBMIT' />                                
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact