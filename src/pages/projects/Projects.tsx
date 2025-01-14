import React from 'react';
import './Projects.css';
import Page from '../../components/Page';
import ProjectItem, { ProjectItemProps } from './ProjectItem';

const Projects: React.FC = () => {

	const projects: ProjectItemProps[] = [
		{
			name: 'iSchool Web App',
			description: 'Created a React web app using Vite and pulled data from an API to create a homepage for my classes\' department. I used ChakraUI components to neatly display the information and CSS to follow RIT branding using their web style guide.',
			tag: '2023 / Class Project',
			image: './images/ischool.jpg',
			techStack: ['React', 'TypeScript', 'CSS', 'HTML'],
			sourceLink: 'https://github.com/ethan-logue/projects-src-code/tree/main/ischool-web-app',
			liveLink: 'https://people.rit.edu/~eml8469/ISTE340/react/logue-project/',
			d: .2,
		},
		{
			name: 'TechNet',
			description: 'With a team of 4, we transformed an old static internal site into a dynamic React web app. I converted several pages from JavaScript to TypeScript and was in charge of implementing the redesigns from Figma and maintaining responsiveness. I utilized Framer Motion to create fluid interactablilty.',
			tag: '2023 / Team Project',
			image: './images/technet.jpg',
			techStack: ['React', 'TypeScript', 'CSS', 'HTML', 'Figma'],
			d: .3,
		},
		{
			name: 'Portfolio',
			description: 'Using React, TypeScript, and CSS, my portfolio acts as a visual and interactable extension of my resume. I extensively use React components and arrays to minimize repeated code and prioritize readability. I utilize Framer Motion to build fluid transitions and choreograph animations.',
			tag: '2023 / Personal Project',
			image: './images/portfolio.jpg',
			techStack: ['React', 'TypeScript', 'CSS', 'HTML'],
			sourceLink: 'https://github.com/ethan-logue/ethan-logue.github.io',
			liveLink: 'https://ethan-logue.github.io/',
			d: .4,
		},
		{
			name: 'Travel Site',
			description: 'Created a travel site about a familiar place with over 15 pages that uses dropdown menus to navigate made using CSS. It utilizes PHP includes to minimize code repeat and JavaScript to place the header depending on how much content is on the screen.',
			tag: '2023 / Class Project',
			image: './images/travel-site.jpg',
			techStack: ['JavaScript', 'CSS', 'HTML', 'PHP'],
			sourceLink: 'https://github.com/ethan-logue/projects-src-code/tree/main/travel-site',
			liveLink: 'https://people.rit.edu/~eml8469/ISTE240/final/index.php',
			d: .5,
		},
		{
			name: 'Video Portfolio',
			description: 'As one of my first projects, it was technically basic but I wanted something to showcase my video editing skills since I was doing commission work on Roblox. I exercised CSS grid to create a well organized and appealing site. I also incorporated some JavaScript to create the accordion effect, although since it was my first time I had a lot of help from others on that part.',
			tag: '2022 / Personal Project',
			image: './images/video-portfolio.jpg',
			techStack: ['CSS', 'HTML'],
			sourceLink: 'https://github.com/ethan-logue/projects-src-code/tree/main/video-portfolio',
			liveLink: 'https://people.rit.edu/~eml8469/iste140/Roblox%20Application/',
			d: .6,
		},
	];

	return (
		<Page page={'projects'} fullWidth={true}>
			<h2 className='page-title'>Projects</h2>
			<div className='project-container'>
				{projects.map((project, index) => (
					<ProjectItem key={index} {...project} />
				))}
			</div>
    	</Page>
  	);
};

export default Projects;