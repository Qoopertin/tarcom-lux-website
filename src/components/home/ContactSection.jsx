import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './ContactSection.css';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
                            <h3 className="form-title">{t('contact.title')}</h3>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.form.name')}</label>
                                    <div className="input-wrapper">
                                        <User className="input-icon" size={18} />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder={t('contact.form.namePlaceholder')}
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.form.email')}</label>
                                    <div className="input-wrapper">
                                        <Mail className="input-icon" size={18} />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder={t('contact.form.emailPlaceholder')}
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">{t('contact.form.phone')}</label>
                                    <div className="input-wrapper">
                                        <Phone className="input-icon" size={18} />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder={t('contact.form.phonePlaceholder')}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={status === 'sending'}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.form.message')}</label>
                                    <div className="input-wrapper textarea-wrapper">
                                        <MessageSquare className="input-icon" size={18} />
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder={t('contact.form.messagePlaceholder')}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            disabled={status === 'sending'}
                                        ></textarea>
                                    </div>
                                </div>

                                {status === 'error' && (
                                    <div className="form-message error">
                                        <AlertCircle size={18} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                {status === 'success' && (
                                    <div className="form-message success">
                                        <CheckCircle size={18} />
                                        <span>{t('contact.form.success')}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                                    disabled={status === 'sending' || status === 'success'}
                                >
                                    {status === 'sending' ? (
                                        <span>{t('contact.form.sending')}</span>
                                    ) : (
                                        <>
                                            {t('contact.form.button')} <Send size={18} />
                                        </>
                                    )}
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
