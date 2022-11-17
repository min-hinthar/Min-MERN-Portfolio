import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faBriefcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import LogoS from '../../assets/images/Min_512x512.png';
import LogoSubtitle from '../../assets/images/Morning_Star_Favicon.png'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
    <div className= 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='ProfilePicture' />
            <img className='sub-logo' src={LogoSubtitle} alt='MorningStar' />
        </Link>
        <nav className={ showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" >
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon
            onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffc800"
                size='3x'
                className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/minkkhant93/">
                    <FontAwesomeIcon icon={faLinkedin} color='#0072b1' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/min-hinthar">
                    <FontAwesomeIcon icon={faGithub} color='#171515' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/min.k.khant">
                    <FontAwesomeIcon icon={faFacebook} color='#1778F2' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/minkkhant/">
                    <FontAwesomeIcon icon={faInstagram} color='#C13584' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffc800"
            size="3x"
            className='hamburger-icon'
        />
    </div>
)}

export default Sidebar