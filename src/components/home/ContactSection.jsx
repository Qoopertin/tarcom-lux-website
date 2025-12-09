import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './ContactSection.css';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error/success status when user starts typing again
        if (status === 'error' || status === 'success') {
            setStatus('idle');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || t('contact.form.error'));
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage(t('contact.form.error'));
        }
    };

    return (
        <section className="contact-section section-padding">
            <div className="container">
                <div className="contact-content-wrapper">

                    {/* Contact Form - Centered */}
                    <div className="contact-form-container">
                        <div className="contact-card">
                            <h2 className="form-title">{t('contact.title')}</h2>


                            <form onSubmit={handleSubmit} className="contact-form">
                                {/* Name Field */}
                                <div className="field-group">
                                    <label className="field-label" htmlFor="name">{t('contact.form.name')}</label>
                                    <div className="field-input-wrapper">
                                        <span className="field-icon">
                                            <User size={18} color="#6B7280" />
                                        </span>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder={t('contact.form.namePlaceholder')}
                                            className="field-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="field-group">
                                    <label className="field-label" htmlFor="email">{t('contact.form.email')}</label>
                                    <div className="field-input-wrapper">
                                        <span className="field-icon">
                                            <Mail size={18} color="#6B7280" />
                                        </span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder={t('contact.form.emailPlaceholder')}
                                            className="field-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="field-group">
                                    <label className="field-label" htmlFor="phone">{t('contact.form.phone')}</label>
                                    <div className="field-input-wrapper">
                                        <span className="field-icon">
                                            <Phone size={18} color="#6B7280" />
                                        </span>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder={t('contact.form.phonePlaceholder')}
                                            className="field-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="field-group">
                                    <label className="field-label" htmlFor="message">{t('contact.form.message')}</label>
                                    <div className="field-input-wrapper">
                                        <span className="field-icon" style={{ top: '1.5rem', transform: 'none' }}>
                                            <MessageSquare size={18} color="#6B7280" />
                                        </span>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder={t('contact.form.messagePlaceholder')}
                                            className="field-input field-textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            disabled={status === 'sending'}
                                        ></textarea>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className="form-message error">
                                        <span>⚠️ {errorMessage}</span>
                                    </div>
                                )}

                                {status === 'success' && (
                                    <div className="form-message success">
                                        <span>✓ {t('contact.form.success')}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                                    disabled={status === 'sending' || status === 'success'}
                                >
                                    {status === 'sending' ? t('contact.form.sending') : t('contact.form.button')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
