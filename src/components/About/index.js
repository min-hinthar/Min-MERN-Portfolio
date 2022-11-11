import { useEffect, useState } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faCss3Alt, faGitAlt, faHtml5, faJsSquare,  faReact } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';

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
                        I am a <span className='in-text'>divergent/critical thinker</span>, a problem-solver with <span className='in-text'>self-efficacy</span>, with an aptitude for <span className='in-text'>strategic planning</span> and <span className='in-text'>design-thinking</span>, a knack for <span className='in-text'>new business development</span>, utilizing <span className='in-text'>full-stack web development</span> skillsets and innate passion for actionable <span className='in-text'>policy research</span>.
                    </p>
                    <p>
                        As a serial <span className='in-text'>entrepreneur</span>/aspiring full-stack web developer, I have successfully built from the ground-up and operated <span className='in-text'>2 LLCs and 1 INC</span>, in my capacity and role as a <span className='in-text'>Managing Member</span>. I have had the unprecedented experience of steering two import/distribution companies in the midst of immense <span className='in-text'>international logistical challenges</span> imposed by the global pandemic and Burma (Myanmar) under <span className='in-text'>military coup d'état</span>. Under my management, my team and I proudly achieved <span className='in-text'>$5.8 million USD</span> in gross sales revenue, with a growing customer base of over <span className='in-text'>+200 Asian grocery stores</span> throughout the continental United States during <span className='in-text'>2019-2022</span>.    
                    </p>
                    <p>
                        My 2 years with <span className='in-text'>Proximity Designs</span> (Burma/Myanmar), as a political-economy policy <span className='in-text'>Research Associate</span>, had been a life-changing experience, to say the least. In close partnership with two brilliant professors from the <span className='in-text'>Harvard Kennedy School</span> (Ash Center for Democratic Governance and Innovation), I have had the honor and privilege of conducting ground-breaking nation-building <span className='in-text'>policy analysis</span> which requires deep local socio-political knowledge and confidential contacts/connections with <span className='in-text'>government, legislative, ethnic, democratic oppositions, business leaders and minority groups,</span> culminating in multiple working <span className='in-text'>research papers</span> translated into the <span className='in-text'>Burmese language</span>, as well as organizing a high-level stakeholders peace and sectarian <span className='in-text'>conflict research/study trip</span> to the Maluku Islands of Ambon, <span className='in-text'>Indonesia</span>.
                    </p>
                    <p>
                        Upon graduating from the <span className='in-text'>College of Wooster</span> with a <span className='in-text'>B.A in Political Science</span>, I was very proud to have had the opportunity to serve as a <span className='in-text'>Campaign Manager</span> for Mi Kon Chan in her first general election for <span className='in-text'>Lower House Member of Parliament</span> seat from her hometown electoral district of <span className='in-text'>Paung Township, Mon State</span>. With support from the local <span className='in-text'>National League for Democracy</span> party members and staff, we won the district with over <span className='in-text'>+20,000 votes</span> running against the <span className='in-text'>military-backed</span> opposition party.
                    </p>
                    <p>
                        As a <span className='in-text'>political refugee</span>, I would love nothing more than to see an end to the <span className='in-text'>cycle of violence</span> and <span className='in-text'>oppression</span> in Burma and return home sooner rather than later to an <span className='in-text'>independent, democratic</span> and <span className='in-text'>federated</span> Burma, wherein progressive <span className='in-text'>civil/individual liberties</span> and <span className='in-text'>minority rights</span> are cherished.
                    </p>
            </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNode} color='#215732' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9' />
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