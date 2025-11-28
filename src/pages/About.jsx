import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import FamilyTimeline from '../components/about/FamilyTimeline';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('about.title')}</h1>
                    <p className="page-subtitle">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>


            <FamilyTimeline />

            <section className="personal-angle section-padding bg-light">
                <div className="container">
                    <div className="personal-content">
                        <p className="lead-text">
                            {t('about.personalText')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
