import LogoPic from '../../assets/images/Sule.png';
import './index.scss';
import { Link } from 'react-router-dom';


const Home = () => {
    // const [ letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = []

    return(
        <main>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        🌅 မင်္ဂလာပါ 🧋
                    </h1>
                        <h2>
                        😎 Welcome to my 🏘️ on the 🌐
                        </h2>
                            <h3>
                                <span> const Min = </span> Full-Stack Web Dev 👾 MERN | Public Policy Research 🔬 | Burmese Foods Entrepreneurship 🍛 | Street Photography 📸 | USPTA Tennis Instructor 🎾 | PADI Scuba 🤿 | UNESCO Volunteer 🏛️
                            </h3>
                                <img className='coverP' 
                                src={LogoPic} alt="My copyrighted Sule Protest: February, Yangon 2021">
                                </img>
                    <Link to="/contact" className='flat-button'>📧 CONTACT ME 🤙 </Link>
                </div>
            </div>
        </main>

    );
}


export default Home