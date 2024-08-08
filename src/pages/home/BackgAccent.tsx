import React, { useEffect, useRef } from 'react';

interface BackgAccentProps {
    parent: string;
}

const BackgAccent: React.FC<BackgAccentProps> = ({ parent }) => {

    const keywords = [
        'Ethan Logue',
        'Web',
        'Developer',
        'CSS',
        'React',
        'Climbing',
        'Hiking',
        'RIT',
        'Outdoors',
        'Frontend',
        'Music'
    ];

    console.log(keywords);
    

    const containerRef = useRef<HTMLDivElement>(null);
    const pContainer = document.getElementById(parent);
    const cWidth = pContainer?.clientWidth ?? 0;
    const cHeight = pContainer?.clientHeight ?? 0;

    useEffect(() => {

        // mobile check
        if (cWidth <= 768) return;
        
        if (!containerRef.current) return;
        const container = containerRef.current;

        const createKeywordElement = (keyword: string) => {
            const span = document.createElement('span');
            span.textContent = keyword;
            return span;
        };

        const createRow = () => {
            const row = document.createElement('div');
            row.classList.add('scroll-row');
            row.style.animationDuration = `${Math.random() * (22 - 18) + 18}s`;
            row.style.animationDelay = `${Math.random() * (0 - 3) + 3}s`;
            row.style.opacity = `${Math.random() * (0.4 - 0.1) + 0.1}`;
            return row;
        }

        const randomizeKeywords = () => {
            for (let i = keywords.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [keywords[i], keywords[j]] = [keywords[j], keywords[i]];
            }
        }
        
        const rowHeight = 38;        
        let keywordIndex = 0;
        let totalHeight = 0;
        
        while (totalHeight < cHeight - rowHeight) {
            randomizeKeywords();
            const currentRow = createRow();
            
            for (let j = 0; j < 10; j++) {
                if (keywordIndex >= keywords.length) {
                    keywordIndex = 0;
                }
                
                const keywordElement = createKeywordElement(keywords[keywordIndex]);
                currentRow.appendChild(keywordElement);
                keywordIndex++;
            }

            container.appendChild(currentRow);            
            totalHeight += rowHeight;
        }
    }, [cWidth, cHeight]);

    return <div ref={containerRef} className="scroll-container"></div>;
};

export default BackgAccent;
