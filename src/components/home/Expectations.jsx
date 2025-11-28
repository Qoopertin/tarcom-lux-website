import React from 'react';
import { CheckCircle2, Truck, Users, Scale } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Expectations.css';

const ExpectationCard = ({ icon: Icon, title, text }) => (
    <div className="expectation-card">
        <div className="expectation-icon">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className="expectation-text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
);

const Expectations = () => {
    const { t } = useLanguage();

    const items = [
        {
            icon: CheckCircle2,
            title: t('expectations.card1.title'),
            text: t('expectations.card1.text')
        },
        {
            icon: Scale,
            title: t('expectations.card2.title'),
            text: t('expectations.card2.text')
        },
        {
            icon: Truck,
            title: t('expectations.card3.title'),
            text: t('expectations.card3.text')
        },
        {
            icon: Users,
            title: t('expectations.card4.title'),
            text: t('expectations.card4.text')
        }
    ];

    return (
        <section className="expectations section-padding">
            <div className="container">
                <h2 className="section-title text-center">{t('expectations.title')}</h2>
                <div className="expectations-grid">
                    {items.map((item, index) => (
                        <ExpectationCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expectations;
