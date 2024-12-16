import './App.css';
import React from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Nav from './pages/nav/Nav';
import Projects from './pages/projects/Projects';

const App: React.FC = () => {
        
    return (
        <main className='app'>
            <div className='noise-overlay'></div>
            <Nav />
            <Home />
            <About />
            <Projects />
        </main>
    );
};

export default App;