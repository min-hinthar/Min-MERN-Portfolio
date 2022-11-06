import LogoPic from '../../assets/images/Sule.png';
import './index.scss';
import { Link } from 'react-router-dom';


const Home = () => {

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    🌅 မင်္ဂလာပါ 🧋
                </h1>
                    <h2>
                    😎 Welcome to my 🏘️ on the 🌐!
                    </h2>
                    <h2> 
                        တွေ့ရတာဝမ်းသာပါတယ်ခင်ဗျာ။ 
                        <br/> 
                        Nice to meet you!
                    </h2>
                        <h3>
                            const Min = Full-Stack Web Dev 👾 MERN | Public Policy Research 🔬 | Burmese Foods Entrepreneurship | Street Photography 📸 | USPTA Tennis Instructor 🎾 | PADI Scuba 🤿 | UNESCO Volunteer 🏛️
                        </h3>
                            <img className='coverPhoto' src={LogoPic} alt="My copyrighted photo of Sule Protest: February, Yangon 2021"></img>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>

    );
}


export default Home