import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './WhoWeAre.css';

const WhoWeAre = () => {
    const { t } = useLanguage();

    return (
        <section className="who-we-are section-padding">
            <div className="container">
                <div className="who-content">
                    <div className="who-text">
                        <h2 className="section-title">{t('whoWeAre.title')}</h2>
                        <p className="lead-text">
                            {t('whoWeAre.p1')}
                        </p>
                        <p>
                            {t('whoWeAre.p2')}
                        </p>
                        <p className="sub-line">
                            {t('whoWeAre.p3')}
                        </p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="/about" style={{
                                color: '#4ade80',
                                fontWeight: '600',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '1.1rem'
                            }}>
                                {t('whoWeAre.history')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
