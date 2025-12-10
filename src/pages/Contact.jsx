import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    // Department contact data
    const contacts = [
        {
            key: 'general',
            icon: 'FT',
            data: t('contactPage.general', { returnObjects: true })
        },
        {
            key: 'sales',
            icon: 'S',
            data: t('contactPage.sales', { returnObjects: true })
        },
        {
            key: 'logistics',
            icon: 'L',
            data: t('contactPage.logistics', { returnObjects: true })
        },
        {
            key: 'management',
            icon: 'M',
            data: t('contactPage.management', { returnObjects: true })
        }
    ];

    return (
        <div className="contact-page">
            {/* Page Header */}
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('contactPage.title')}</h1>
                    <p className="page-subtitle">
                        {t('contactPage.subtitle')}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="contact-content section-padding">
                <div className="container">
                    <div className="contact-grid">
                        {/* LEFT: Contact Form */}
                        <div className="contact-form-column">
                            <ContactForm />
                        </div>

                        {/* RIGHT: Contact Details */}
                        <div className="contact-details-column">
                            <div className="contact-details-card">
                                <h3 className="details-title">{t('contactPage.detailsTitle')}</h3>

                                {/* Department Contacts */}
                                <div className="contacts-list">
                                    {contacts.map((contact) => (
                                        <div key={contact.key} className="contact-item">
                                            <div className="contact-header">
                                                <div className="contact-avatar">{contact.icon}</div>
                                                <div className="contact-meta">
                                                    <span className="contact-label">{contact.data.label}</span>
                                                    <span className="contact-name">{contact.data.name}</span>
                                                </div>
                                            </div>
                                            <div className="contact-info">
                                                <div className="info-row">
                                                    <Mail size={16} />
                                                    <a href={`mailto:${contact.data.email}`}>{contact.data.email}</a>
                                                </div>
                                                <div className="info-row">
                                                    <Phone size={16} />
                                                    <a href={`tel:${contact.data.phone}`}>{contact.data.phone}</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Languages Section */}
                                <div className="languages-section">
                                    <h4>{t('contactPage.languages.title')}</h4>
                                    <p className="languages-subtitle">{t('contactPage.languages.subtitle')}</p>
                                    <ul className="languages-list">
                                        {t('contactPage.languages.list', { returnObjects: true }).map((lang, i) => (
                                            <li key={i}>{lang}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
