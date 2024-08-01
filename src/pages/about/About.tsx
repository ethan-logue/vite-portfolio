import React from 'react';
import './About.css';
import Page from '../../components/Page';
import SkillStack from './SkillStack';

const About: React.FC = () => {
    return (
        <Page page={'about'} >
            <div className='about-container'>
                <div className='about-info'>
                    <h2 className='page-title about-title'>About Me</h2>
                    <p className='about-bio'>Hello there! I'm a fourth-year web and mobile undergraduate at RIT.</p>
                    <p className='about-bio'>I'm currently working at <a className='about-link' href='https://www.synapseresults.com/'>Synapse Marketing Solutions</a> as a Full-Stack Web Developer, where I am following my passion for front-end web development. While I initially pursued a degree in IT, my journey led me to realize my true passion lies in creating beautiful user experiences through web development. Blending my technical experience from my IT jobs with my passion for coding and creativity, transitioning to a Web & Mobile Computing degree was a natural fit. I'm committed to creating stylistic, consistent, and intuitive user interfaces for clients and improving myself as I do so.</p>
                </div>
                <div className='about-skills'>
                    <SkillStack />
                </div>
    
            </div>
        </Page>
    );
};

export default About;
