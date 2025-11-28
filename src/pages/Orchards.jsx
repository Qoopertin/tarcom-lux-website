import React from 'react';
import './Orchards.css';

const Orchards = () => {
    return (
        <div className="orchards-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Gardens</h1>
                    <p className="page-subtitle">
                        Located in the heart of northern Moldova's apple country.
                    </p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <p>
                        Our gardens are situated in the Dondușeni district, an area renowned for its fertile soil and ideal climate for apple cultivation.
                        We combine traditional knowledge with modern agricultural practices to ensure the highest quality fruit.
                    </p>
                    {/* Add more content here as needed to match the original if possible */}
                </div>
            </section>
        </div>
    );
};

export default Orchards;
