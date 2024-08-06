import React from 'react';
import './Components.css';

interface PageProps {
    page: string;
    children: React.ReactNode;
    pageContainer?: string;
    fullWidth?: boolean;
}

const Page: React.FC<PageProps> = ({ page, children, pageContainer = 'page-container', fullWidth = false }) => {
    return (
        <section id={page} className={`page ${page} ${fullWidth ? `full-width` : ''}`}>
            {fullWidth ? (
                <div className={`page-wrapper ${page}-wrapper`}>
                    <div className={pageContainer}>
                        {children}
                    </div>
                </div>
            ) : (
                <div className={pageContainer}>
                    {children}
                </div>
            )}
        </section>
    );
};

export default Page;
