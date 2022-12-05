import './index.scss';
import { React, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
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
                        strArray={"CONTACT MIN".split("")}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Thank you for visiting my <span className='in-text'>professional portfolio</span> website!
                    </p> 
                    <p> 
                        Please feel free to reach out to me for more <span className='in-text'>detailed work-experiences</span> related information,
                        <br />
                        by filling out the form below. 
                    </p>
                    <p>
                        If you are also just starting out with <span className='in-text'>web development</span>, I would also love to be a <span className='in-text'>code buddy</span>, 
                        <br/> 
                        if you ever needed a second pair of eyes for reviews or debugging!
                        <br /> 
                        Afterall, we are all a part of an <span className='in-text'>open-source</span> and <span className='in-text'>open-minded</span> community of coders! 
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
                <div className='info-map'>
                    Min K. Khant,
                    <br />
                    Los Angeles,
                    <br />
                    California, 91745
                    <br />
                    <span>min@mandalaymorningstar.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.99399697913149, -117.9591441518504]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                        </TileLayer>
                        <Marker position={[33.99399697913149, -117.9591441518504]}>
                            <Popup>
                                Min lives in this friendly neighborhood! Please feel free to drop by for some fresh brewed Burmese tea! 🍵 
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact