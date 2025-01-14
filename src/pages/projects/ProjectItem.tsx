import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { PiCodeBlockBold } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface ProjectItemProps {
    name: string;
    description: string;
    tag: string;
    image: string;
    techStack: string[];
    sourceLink?: string;
    liveLink?: string;
    d: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, description, tag, image, techStack, sourceLink, liveLink, d }) => {

    const [ref, inView] = useInView({
        threshold: 0
    });

    const motionProject= {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'ease',
                duration: 0.3,
                delay: d,
            },
        },
    };

    return (
        <motion.div
            className='project-item'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={motionProject}
        >
            <img className='project-cover' src={image} alt="thumbnail of project" />
            <div className='project-details'>
                <div className='project-header'>
                    <div className='project-header-info'>
                        <h3 className='project-title'>{name}</h3>
                        <p className='project-tag'>{tag}</p>
                    </div>
                    <div className='project-header-links'>
                        {sourceLink ? ( 
                        <motion.a
                            className='project-link project-src-link'
                            href={sourceLink}
                            target='_blank'
                            aria-label={`${name} Source Code`}
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 1.0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <PiCodeBlockBold />
                        </motion.a>) : null}
                        {liveLink ? ( 
                        <motion.a
                            className='project-link'
                            href={liveLink}
                            aria-label={name}
                            target='_blank'
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 1.0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <FiExternalLink />
                        </motion.a>) : null}
                    </div>
                </div>
                <p className='project-description'>{description}</p>
                <ul className='tech-stack'>
                    {techStack.map((tech, index) => (
                        <li className='tech-item' key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ProjectItem;
