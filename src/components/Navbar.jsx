import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                setIsScrolled(window.scrollY > 50);
            } else {
                setIsScrolled(true);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const { t } = useLanguage();

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.products'), path: '/products' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    TARCOM LUX
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                    <Link to="/contact" className="cta-button-small">
                        {t('nav.contact')}
                    </Link>
                </div>

                {/* Mobile Actions */}
                <div className="mobile-actions-wrapper">
                    <div className="mobile-lang-switcher">
                        <LanguageSwitcher />
                    </div>
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Mobile CTA button */}
                        <Link
                            to="/contact"
                            className="cta-button-small mobile-cta"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('nav.contact')}
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
