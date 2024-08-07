import React, { useEffect, useRef } from 'react';

interface BackgAccentProps {
    parent: string;
}

const BackgAccent: React.FC<BackgAccentProps> = ({ parent }) => {

    const keywords = [
        'Ethan',
        'Logue',
        'Web',
        'Developer',
        'CSS',
        'React',
        'Climbing',
        'Hiking',
        'RIT',
        'Outdoors',
        'Frontend',
        'Music',
    ];

    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const pContainer = document.getElementById(parent);
    //     const cWidth = pContainer?.clientWidth ?? 0;
    //     const cHeight = pContainer?.clientHeight ?? 0;

    //     if (!containerRef.current) return;

    //     const container = containerRef.current;

    //     let totalHeight = 0;
    //     let rowDirection = 'right';

    //     const createKeywordElement = (keyword: string) => {
    //         const span = document.createElement('span');
    //         span.textContent = keyword;
    //         span.style.animationDuration = `${10 + Math.random() * 5}s`; // Random duration between 10 and 15 seconds
    //         return span;
    //     };

    //     let currentRow = document.createElement('div');
    //     currentRow.classList.add('scroll-row');
    //     container.appendChild(currentRow);

    //     let keywordIndex = 0;

    //     const rowHeight = cHeight * 0.1;

    //     while (totalHeight < cHeight) {
    //         const keywordElement = createKeywordElement(keywords[keywordIndex]);
    //         currentRow.appendChild(keywordElement);

    //         if (currentRow.scrollWidth >= cWidth) {
    //             totalHeight += rowHeight;
    //             currentRow.style.animationDirection = rowDirection;

    //             rowDirection = rowDirection === 'right' ? 'left' : 'right';

    //             if (totalHeight < cHeight) {
    //                 currentRow = document.createElement('div');
    //                 currentRow.classList.add('scroll-row');
    //                 container.appendChild(currentRow);
    //             }
    //         }

    //         keywordIndex = (keywordIndex + 1) % keywords.length;
    //     }
    // }, [parent, keywords]);

    return <div ref={containerRef} className="scroll-container"></div>;
};

export default BackgAccent;
