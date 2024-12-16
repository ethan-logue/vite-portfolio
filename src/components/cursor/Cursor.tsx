import { useCursor } from './useCursor';
import { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const { cursor } = useCursor();
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const updatePosition = (event: MouseEvent) => {
            if (svgRef.current) {
                svgRef.current.style.left = `${event.clientX}px`;
                svgRef.current.style.top = `${event.clientY}px`;
            }
        };

        document.addEventListener('mousemove', updatePosition, false);
        document.addEventListener('mouseenter', updatePosition, false);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseenter', updatePosition);
        };
    }, []);

    return (
        <div className='cursor-container'>
            <svg
                ref={svgRef}
                className={`cursor ${cursor.hover ? 'hover' : ''}`}
                width='50'
                height='50'
                viewBox='0 0 50 50'
            >
                <circle
                    className='cursor-circle'
                    cx='25'
                    cy='25'
                    r='6'
                />
            </svg>
            </div>
    );
};

export default Cursor;
