import React from 'react';
import './Components.css';

interface PageProps {
    page: string;
    children: React.ReactNode;
    pageContainer?: string;
}

const Page: React.FC<PageProps> = ({ page, children, pageContainer = 'page-container' }) => {
    return (
        <section id={page} className={`page ${page}`}>
            <div className={pageContainer}>
                {children}
            </div>
        </section>
    );
};

export default Page;
