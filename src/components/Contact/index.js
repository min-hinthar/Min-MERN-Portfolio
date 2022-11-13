import './index.scss'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_z38uhdc',
                'template_2jrgduk',
                refForm.current,
                '3hWsxVpJE46h3KMBY'
            )
            .then((result) => {
                alert('Thanks! Your message has been successfully sent!')
                window.location.reload(false);
                console.log(result.text);
            }, (error) => {
                alert('Sorry! Your message failed to send. Please try again with valid input. Thanks!')
                console.log(error.text);
            });
    };

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
                        Thank you for visiting my <span className='in-text'>professional portfolio</span> website!
                    </p> 
                    <p> 
                        Please feel free to reach out to me for more <span className='in-text'>detailed work-experiences</span> related information by filling out the form below. 
                    </p>
                    <p>
                        If you are also just starting out with <span className='in-text'>web development</span>, I would also love to be a <span className='in-text'>code buddy</span> if you ever needed a second pair of eyes for reviews or debugging! Afterall, we are all a part of an <span className='in-text'>open-source</span> and <span className='in-text'>open-minded</span> community of coders! 
                    </p>
                    <p>    
                        Happy<span className='in-text'> Coding</span>!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
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