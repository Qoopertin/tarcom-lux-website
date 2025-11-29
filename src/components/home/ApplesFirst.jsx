import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './ApplesFirst.css';

const ApplesFirst = () => {
    const { t } = useLanguage();
    const varieties = t('applesFirst.varieties.list');

    return (
        <section className="apples-first section-padding">
            <div className="container">
                <div className="apples-first-content">
                    <h2 className="section-title">{t('applesFirst.title')}</h2>
                    <p className="lead-text">
                        {t('applesFirst.lead')}
                    </p>

                    <div className="varieties-list">
                        <h3>{t('applesFirst.varieties.title')}</h3>
                        <ul>
                            {varieties.map((variety, index) => (
                                <li key={index}>{variety}</li>
                            ))}
                            <li>{t('applesFirst.varieties.other')}</li>
                        </ul>
                    </div>

                    <p className="seasonal-note">
                        {t('applesFirst.seasonal')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ApplesFirst;
