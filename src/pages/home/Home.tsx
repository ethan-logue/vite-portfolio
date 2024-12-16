import React from 'react';
import useCursorHandlers from '../../components/cursor/useCursorHandlers';
import './Home.css';

const Home: React.FC = () => {
    const cursorHandlers = useCursorHandlers();

    return (
        <button className='test-btn' {...cursorHandlers}>Hover over me!!</button>
    );
};

export default Home;
