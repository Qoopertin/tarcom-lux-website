import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './OrchardsPreview.css';

const OrchardsPreview = () => {
    const { t } = useLanguage();

    return (
        <section className="orchards-preview section-padding">
            <div className="container">
                <div className="orchards-grid">
                    <div className="orchards-map">
                        {/* Map centered on Pocrovca village */}
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21198.78477755673!2d27.83938957668648!3d48.33140000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb7a6666666667%3A0x40cb7a6666666667!2sPocrovca%2C%20Moldova!5e0!3m2!1sen!2s!4v1625666666666!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Gardens Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className="orchards-content">
                        <h2 className="section-title">{t('orchards.title')}</h2>
                        <h3 className="section-subtitle">{t('orchards.subtitle')}</h3>

                        <p className="orchards-text">
                            {t('orchards.text')}
                        </p>

                        <ul className="orchards-features">
                            <li>
                                <span className="feature-label">{t('orchards.features.varieties.label')}</span> {t('orchards.features.varieties.text')}
                            </li>
                            <li>
                                <span className="feature-label">{t('orchards.features.protection.label')}</span> {t('orchards.features.protection.text')}
                            </li>
                            <li>
                                <span className="feature-label">{t('orchards.features.storage.label')}</span> {t('orchards.features.storage.text')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchardsPreview;
