import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'ro', label: 'RO' },
        { code: 'ru', label: 'RU' }
    ];

    return (
        <div className="language-switcher">
            {languages.map((lang, index) => (
                <React.Fragment key={lang.code}>
                    <button
                        className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                        onClick={() => changeLanguage(lang.code)}
                        aria-label={`Switch to ${lang.label}`}
                    >
                        {lang.label}
                    </button>
                    {index < languages.length - 1 && <span className="lang-separator">|</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
