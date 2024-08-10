import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

export interface SkillProps {
    skill: string;
    logo: ReactElement;
    fillColor: string;
}

const Skill: React.FC<SkillProps> = ({ skill, logo, fillColor }) => {

    const motionSkill = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 0.6,
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
            },
        },
    };

    return (
        <motion.div
            className='skill-item'
            variants={motionSkill}
            whileHover={{
                scale: 1.2, 
                transition: {type: 'tween', duration: 0.3}, 
                color: fillColor,
            }}
        >
            {logo}
            <p className='skill-title'>{skill}</p>
        </motion.div>
    );
};

export default Skill;
