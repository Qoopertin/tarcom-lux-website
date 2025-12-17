import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ManagementTeam.css';

const ManagementTeam = () => {
    const { t } = useLanguage();

    const teamMembers = [
        {
            id: 'director',
            image: '/team/director.jpg',
            name: t('contactPage.team.members.director.name'),
            role: t('contactPage.team.members.director.role'),
            alt: 'Photo of Nikolai Latisev, Director'
        },
        {
            id: 'operations',
            image: '/team/operations.jpg',
            name: t('contactPage.team.members.operations.name'),
            role: t('contactPage.team.members.operations.role'),
            alt: 'Photo of Philipp Shcherbakov, Operations Manager'
        },
        {
            id: 'sales',
            image: '/team/sales.jpg',
            name: t('contactPage.team.members.sales.name'),
            role: t('contactPage.team.members.sales.role'),
            alt: 'Photo of Daniil Latisev, Sales Manager'
        }
    ];

    return (
        <section className="management-team-section">
            <div className="container">
                <h2 className="team-section-title">{t('contactPage.team.title')}</h2>
                <div className="team-grid">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-card">
                            <div className="team-card-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="team-card-image"
                                />
                            </div>
                            <div className="team-card-content">
                                <h3 className="team-member-name">{member.name}</h3>
                                <p className="team-member-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManagementTeam;
