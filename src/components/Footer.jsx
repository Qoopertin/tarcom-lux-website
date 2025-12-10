import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>FRIGO-TERM</h3>
                        <p>{t('footer.description')}</p>
                    </div>

                    <div className="footer-links">
                        <h4>{t('footer.quickLinks')}</h4>
                        <ul>
                            <li><Link to="/">{t('nav.home')}</Link></li>
                            <li><Link to="/about">{t('nav.about')}</Link></li>
                            <li><Link to="/products">{t('nav.products')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div className="company-info">
                            <p className="company-legal">S.C. FRIGO-TERM S.R.L.</p>
                            <p className="company-vat">VAT: RO _________</p>
                        </div>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>Moldova, Dondușeni district, Pocrovca</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <a href="tel:+37368822309">+373 68 822 309</a>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <a href="mailto:info@frigo-term.com">info@frigo-term.com</a>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><Facebook /></a>
                            <a href="#" aria-label="Instagram"><Instagram /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
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
