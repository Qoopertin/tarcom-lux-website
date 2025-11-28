import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../Button';
import './ContactSection.css';

const ContactSection = () => {
    const { t } = useLanguage();

    return (
        <section className="contact-section section-padding">
            <div className="container">
                <div className="contact-cta-box">
                    <h2 className="section-title">{t('cta.title')}</h2>
                    <p className="cta-text">
                        {t('cta.text')}
                    </p>
                    <Button to="/contact" variant="primary" size="lg">
                        {t('cta.button')}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
