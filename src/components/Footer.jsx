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
                        <h3>TARCOM LUX</h3>
                        <p>{t('footer.description')}</p>
                    </div>

                    <div className="footer-links">
                        <h4>{t('footer.quickLinks')}</h4>
                        <ul>
                            <li><Link to="/products">{t('nav.products')}</Link></li>
                            <li><Link to="/orchards">{t('footer.gardens')}</Link></li>
                            <li><Link to="/sourcing">Sourcing Network</Link></li>
                            <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>Moldova, Donduseni district</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>+373 68 822 309</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>daniil390@gmail.com</span>
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
                    <p>&copy; {new Date().getFullYear()} TARCOM LUX. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
