import React from 'react';
import useCursorHandlers from '../../components/cursor/useCursorHandlers';
import './Home.css';
import CodeWindow from '../../components/CodeWindow';

const Home: React.FC = () => {
    const cursorHandlers = useCursorHandlers();

    const codeString = 
`<h1>Ethan Logue</h1>

<p>Hello there! I'm Ethan, a fourth year Web & Mobile Computing student at RIT. I'm passionate about creating engaging and interactive experiences on the web.</p>

<ul class="social-links">
    <li>GitHub</li>
    <li>LinkedIn</li>
    <li>Email</li>
</ul>`;

    return (
        <div className='home-container'>
            <button className='test-btn' {...cursorHandlers}>Hover over me!!</button>
            <CodeWindow codeString={codeString} />
        </div>
    );
};

export default Home;
