import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/Min_512x512.png';
import LogoSubtitle from '../../assets/images/Morning_Star_Favicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='ProfilePicture' />
            <img className='sub-logo' src={LogoSubtitle} alt='MorningStar' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" >
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
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


    </div>

)

export default Sidebar