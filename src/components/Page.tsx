import React from 'react';
import './Components.css';

interface PageProps {
    page: string;
    children: React.ReactNode;
    pageContainer?: string;
    fullWidth?: boolean;
    fullWidthElement?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ page, children, pageContainer = 'page-container', fullWidth, fullWidthElement }) => {
    return (
        <section id={page} className={`page ${page} ${fullWidth ? `full-width` : ''}`}>
            {fullWidthElement && fullWidth ? fullWidthElement : null }
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
