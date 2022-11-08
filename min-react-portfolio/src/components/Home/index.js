import LogoPic from '../../assets/images/Sule.png';
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from '../Home/Logo/index'


const Home = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    const welcomeArray = ['😎','W','e','l','c','o','m','e','_','t','o','_','m','y','_','🏘️','_','o','n','_','t','h','e','🌐',]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <main>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        🌅 မင်္ဂလာပါ 🧋
                    </h1>
                        <h2>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={welcomeArray}
                        idx={12}/>
                        </h2>
                            <h3>
                                <span> const Min = </span> Full-Stack Web Dev 👾 MERN | Public Policy Research 🔬 | Burmese Foods Entrepreneurship 🍛 | Street Photography 📸 | USPTA Tennis Instructor 🎾 | PADI Scuba 🤿 | UNESCO Volunteer 🏛️
                            </h3>
                                <img className='coverP' 
                                src={LogoPic} alt="©copyrighted Sule Protest: February, Yangon 2021">
                                </img>
                    <Link to="/contact" className='flat-button'>📧 CONTACT ME 🤙 </Link>
                </div>
            </div>
                <Logo/>
        </main>

    );
}


export default Home