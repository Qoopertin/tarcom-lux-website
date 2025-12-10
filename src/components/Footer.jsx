import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Briefcase, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">FRIGO-TERM</h3>
                        <p className="footer-description">{t('footer.description')}</p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-links">
                        <h4 className="footer-title">{t('footer.quickLinks')}</h4>
                        <ul className="links-list">
                            <li><Link to="/">{t('nav.home')}</Link></li>
                            <li><Link to="/about">{t('nav.about')}</Link></li>
                            <li><Link to="/products">{t('nav.products')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Social Column */}
                    <div className="footer-contact">
                        <h4 className="footer-title">Contact Us</h4>

                        <div className="contact-info">
                            <div className="info-item">
                                <Briefcase size={16} />
                                <div className="info-text">
                                    <p className="company-name">S.C. FRIGO-TERM S.R.L.</p>
                                    <p className="company-vat">VAT: RO _________</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <MapPin size={16} />
                                <span>Moldova, Dondușeni district, Pocrovca</span>
                            </div>

                            <div className="info-item">
                                <Phone size={16} />
                                <a href="tel:+37368822309">+373 68 822 309</a>
                            </div>

                            <div className="info-item">
                                <Mail size={16} />
                                <a href="mailto:info@frigo-term.com">info@frigo-term.com</a>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FRIGO-TERM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
