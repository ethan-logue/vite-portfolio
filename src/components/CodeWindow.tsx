import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/vs2015.css';
import './CodeWindow.css';

type CodeWindowProps = {
    codeString: string;
};

const CodeWindow: React.FC<CodeWindowProps> = ({ codeString }) => {
    return (
        <div className='code-window'>
            <div className='code-header'>
                <div className='code-window-btn'></div>
                <div className='code-window-btn'></div>
                <div className='code-window-btn'></div>
            </div>
            <div className='code-body'>
                <Highlight className='html'>
                    {codeString}
                </Highlight>
            </div>
        </div>
    );
};

export default CodeWindow;
