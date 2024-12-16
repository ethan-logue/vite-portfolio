import React from 'react';
import { useCursor } from '../../components/cursor/useCursor';
import './Home.css';

const Home: React.FC = () => {
    const { setCursor } = useCursor();

    const handleMouseEnter = () => {
        setCursor({ hover: true });
    };

    const handleMouseLeave = () => {
        setCursor({ hover: false });
    };

    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>HOVER over me!!</button>
    );
};

export default Home;
