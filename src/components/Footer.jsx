import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    {/* Left: Brand Column */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">FRIGO-TERM</h3>
                        <p className="footer-description">{t('footer.description')}</p>
                    </div>

                    {/* Center: Quick Links Column */}
                    <div className="footer-links">
                        <h4 className="footer-title">{t('footer.quickLinks')}</h4>
                        <ul className="links-list">
                            <li><Link to="/">{t('nav.home')}</Link></li>
                            <li><Link to="/about">{t('nav.about')}</Link></li>
                            <li><Link to="/products">{t('nav.products')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Right: Contact Us Column */}
                    <div className="footer-contact">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="contact-info">
                            <div className="info-line">S.C. FRIGO-TERM S.R.L.</div>
                            <div className="info-line">IDNO: 1007640001227</div>
                            <div className="info-line">VAT: MD _________</div>
                            <div className="info-line info-with-icon">
                                <MapPin size={16} />
                                <span>Pocrovca, Dondușeni district, Moldova<br />MD-5051</span>
                            </div>
                            <div className="info-line info-with-icon">
                                <Phone size={16} />
                                <a href="tel:+37368822309">+373 68 822 309</a>
                            </div>
                            <div className="info-line info-with-icon">
                                <Mail size={16} />
                                <a href="mailto:info@frigo-term.com">info@frigo-term.com</a>
                            </div>
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
