import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './WhyUs.css';

const WhyUs = () => {
    const { t } = useLanguage();

    const reasons = [
        {
            title: t('whyUs.reason1.title'),
            text: t('whyUs.reason1.text')
        },
        {
            title: t('whyUs.reason2.title'),
            text: t('whyUs.reason2.text')
        },
        {
            title: t('whyUs.reason3.title'),
            text: t('whyUs.reason3.text')
        },
        {
            title: t('whyUs.reason4.title'),
            text: t('whyUs.reason4.text')
        }
    ];

    return (
        <section className="why-us section-padding">
            <div className="container">
                <h2 className="section-title text-center">{t('whyUs.title')}</h2>
                <div className="why-grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="why-card">
                            <h3>{reason.title}</h3>
                            <p>{reason.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
