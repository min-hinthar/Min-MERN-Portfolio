import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [ letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']}
                        idx={15}
                    />
                </h1>
                    <p>
                        I am a divergent/critical thinker, a problem-solver with self-efficacy, with an aptitude for strategic planning and design-thinking, a knack for new business development, utilizing full-stack web development skillsets and innate passion for actionable policy research.
                    </p>
                    <p>
                        As a serial entrepreneur/aspiring full-stack web developer, I have successfully built from the ground-up and operated 2 LLCs and 1 INC, in my capacity and role as a Managing Member. I have had the unprecedented experience of steering two import/distribution companies in the midst of immense international logistical challenges imposed by the global pandemic and Burma (Myanmar) under military coup d'état. Under my management, my team and I proudly achieved $5.8 million USD in gross sales revenue, with a growing customer base of over +200 Asian grocery stores throughout the continental United States during 2019-2022.    
                    </p>
                    <p>
                        My 2 years with Proximity Designs (Burma/Myanmar), as a political-economy policy Research Associate, had been a life-changing experience, to say the least. In close partnership with two brilliant professors from the Harvard Kennedy School (Ash Center for Democratic Governance and Innovation), I have had the honor and privilege of conducting ground-breaking nation-building policy analysis which requires deep local socio-political knowledge and confidential contacts/connections with government, legislative, ethnic, democratic oppositions, business leaders and minority groups, culminating in multiple working research papers translated into the Burmese language, as well as organizing a high-level stakeholders peace and sectarian conflict research/study trip to the Maluku Islands of Ambon, Indonesia.
                    </p>
                    <p>
                        Upon graduating from the College of Wooster with a B.A in Political Science, I was very proud to have had the opportunity to serve as a Campaign Manager for Mi Kon Chan in her first general election for Lower House Member of Parliament seat from her hometown electoral district of Paung. With support from the local NLD party members and staff, we won the district with over +20,000 votes running against the military-backed opposition party.
                    </p>
                    <p>
                        As a political refugee, I would love nothing more than to see an end to the cycle of violence and oppression in Burma and return home sooner rather than later to an independent, democratic and federated Burma, wherein progressive civil/individual liberties and minority rights are cherished.
                    </p>
            </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                </div>
            </div>
        </div>
    )
};

export default About