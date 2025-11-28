import React from 'react';
import { Leaf, Snowflake, Search, Package, Truck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FromOrchardToTruck.css';

const Step = ({ number, icon: Icon, title, text, position }) => (
    <div className={`process-step ${position}`}>
        <div className="step-content">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <div className="step-icon-wrapper">
            <Icon size={24} className="step-icon" />
            <span className="step-number">{number}</span>
        </div>
    </div>
);

const FromOrchardToTruck = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: Leaf,
            title: t('process.step1.title'),
            text: t('process.step1.text')
        },
        {
            icon: Snowflake,
            title: t('process.step2.title'),
            text: t('process.step2.text')
        },
        {
            icon: Search,
            title: t('process.step3.title'),
            text: t('process.step3.text')
        },
        {
            icon: Package,
            title: t('process.step4.title'),
            text: t('process.step4.text')
        },
        {
            icon: Truck,
            title: t('process.step5.title'),
            text: t('process.step5.text')
        }
    ];

    return (
        <section className="orchard-to-truck section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('process.title')}</h2>
                    <p className="section-subtitle">{t('process.subtitle')}</p>
                </div>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            number={index + 1}
                            {...step}
                            position={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FromOrchardToTruck;
