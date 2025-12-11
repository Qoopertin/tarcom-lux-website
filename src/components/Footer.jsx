import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Left: Brand Column */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">FRIGO-TERM</h3>
                        <p className="footer-description">{t('footer.description')}</p>
                    </div>

                    {/* Middle: Contact Us Column */}
                    <div className="footer-contact">
                        <h4 className="footer-title">
                            <Link to="/contact" className="footer-title-link">Contact Us</Link>
                        </h4>
                        <div className="contact-info">
                            <div className="info-line">S.C. FRIGO-TERM S.R.L.</div>
                            <div className="info-line">IDNO: 1007604001227</div>
                            <div className="info-line">VAT: RO _________</div>
                            <div className="info-line">Moldova, Dondușeni district, Pocrovca</div>
                            <div className="info-line">
                                <a href="tel:+37368822309">+373 68 822 309</a>
                            </div>
                            <div className="info-line">
                                <a href="mailto:info@frigo-term.com">info@frigo-term.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Quick Links Column */}
                    <div className="footer-links">
                        <h4 className="footer-title">{t('footer.quickLinks')}</h4>
                        <ul className="links-list">
                            <li><Link to="/">{t('nav.home')}</Link></li>
                            <li><Link to="/about">{t('nav.about')}</Link></li>
                            <li><Link to="/products">{t('nav.products')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
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
