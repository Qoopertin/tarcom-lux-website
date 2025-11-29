import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('contact.title')}</h1>
                    <p className="page-subtitle">
                        {t('contact.subtitle')}
                    </p>
                </div>
            </div>

            <section className="contact-content section-padding">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>{t('contact.formTitle')}</h2>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.formName')}</label>
                                    <input type="text" id="name" placeholder={t('contact.formName')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">{t('contact.formCompany')}</label>
                                    <input type="text" id="company" placeholder={t('contact.formCompany')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" id="country" placeholder="Your country" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.formEmail')}</label>
                                    <input type="email" id="email" placeholder={t('contact.formEmail')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone / WhatsApp</label>
                                    <input type="tel" id="phone" placeholder="+40..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.formMessage')}</label>
                                    <textarea id="message" rows="5" placeholder={t('contact.formMessage')}></textarea>
                                </div>
                                <Button variant="primary" size="lg" className="w-full">
                                    {t('contact.formButton')}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info Side */}
                        <div className="contact-info-side">
                            <div className="info-card">
                                <h3>Contact Details</h3>
                                <div className="info-item">
                                    <MapPin className="info-icon" />
                                    <div>
                                        <strong>Based in:</strong>
                                        <p>Northern Moldova (Dondușeni District)</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Mail className="info-icon" />
                                    <div>
                                        <strong>Email:</strong>
                                        <p>info@tarcomlux.md</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <Phone className="info-icon" />
                                    <div>
                                        <strong>Phone / WhatsApp:</strong>
                                        <p>+373 69 123 456</p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card mt-4">
                                <h3>Communication</h3>
                                <p>Preferred languages:</p>
                                <ul className="lang-list">
                                    <li>English</li>
                                    <li>Russian</li>
                                    <li>Romanian</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
