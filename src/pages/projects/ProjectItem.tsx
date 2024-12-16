import React from 'react';

export interface ProjectItemProps {
    name: string;
    description: string;
    tag: string;
    image: string;
    techStack: string[];
    sourceLink?: string;
    liveLink?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = () => {

    return (
        <></>
    );
};

export default ProjectItem;
