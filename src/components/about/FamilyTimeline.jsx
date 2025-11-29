import React from 'react';
import { Sprout, Factory, Warehouse, TrendingDown, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FamilyTimeline.css';

const TimelineItem = ({ year, text, icon: Icon, position }) => (
    <div className={`timeline-item ${position}`}>
        <div className="timeline-year">{year}</div>
        {Icon && (
            <div className="timeline-icon-wrapper">
                <Icon size={24} className="timeline-icon" />
            </div>
        )}
        <div className="timeline-content">
            <p>{text}</p>
        </div>
    </div>
);

const FamilyTimeline = () => {
    const { t } = useLanguage();

    const timelineEvents = [
        {
            year: '1995',
            text: t('timeline.events.e1995'),
            icon: Sprout,
            position: 'left'
        },
        {
            year: '2000',
            text: t('timeline.events.e2000'),
            icon: Sprout,
            position: 'right'
        },
        {
            year: '2003',
            text: t('timeline.events.e2003'),
            icon: Factory,
            position: 'left'
        },
        {
            year: '2008',
            text: t('timeline.events.e2008'),
            icon: Warehouse,
            position: 'right'
        },
        {
            year: '2018',
            text: t('timeline.events.e2018'),
            icon: Warehouse,
            position: 'left'
        },
        {
            year: '2022',
            text: t('timeline.events.e2022'),
            icon: TrendingDown,
            position: 'right'
        },
        {
            year: '2025',
            text: t('timeline.events.today'),
            icon: GraduationCap,
            position: 'center'
        }
    ];

    return (
        <section className="family-timeline section-padding">
            <div className="container">
                <h2 className="section-title text-center">{t('timeline.title')}</h2>
                <p className="section-subtitle text-center">
                    {t('timeline.subtitle')}
                </p>
                <div className="timeline-container">
                    {timelineEvents.map((event, index) => (
                        <TimelineItem key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FamilyTimeline;
