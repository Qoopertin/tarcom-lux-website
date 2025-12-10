import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

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

                                {/* General Company Contact */}
                                <div className="contact-item compact">
                                    <div className="contact-info-simple">
                                        <h4 className="company-name">FRIGO-TERM</h4>
                                        <div className="info-row">
                                            <Mail size={16} />
                                            <a href="mailto:info@frigo-term.com">info@frigo-term.com</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Sales Department */}
                                <div className="contact-item">
                                    <div className="contact-header">
                                        <div className="contact-avatar">S</div>
                                        <div className="contact-meta">
                                            <span className="contact-title">Sales Department</span>
                                            <span className="contact-person">Name Surname</span>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="info-row">
                                            <Mail size={16} />
                                            <a href="mailto:sales@frigo-term.com">sales@frigo-term.com</a>
                                        </div>
                                        <div className="info-row">
                                            <Phone size={16} />
                                            <a href="tel:+373 69 XXX XXX">+373 69 XXX XXX</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Director */}
                                <div className="contact-item">
                                    <div className="contact-header">
                                        <div className="contact-avatar">D</div>
                                        <div className="contact-meta">
                                            <span className="contact-title">Director</span>
                                            <span className="contact-person">Name Surname</span>
                                        </div>
                                    </div>
                                    <div className="contact-info">
                                        <div className="info-row">
                                            <Mail size={16} />
                                            <a href="mailto:director@frigo-term.com">director@frigo-term.com</a>
                                        </div>
                                    </div>
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
