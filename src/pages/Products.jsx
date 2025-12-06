import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Products.css';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Products.css';

const ProductCard = ({ title, description }) => (
    <div className="product-card">
        <div className="product-info">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const CategoryCard = ({ title, image, isActive, onClick, id }) => (
    <div
        id={id}
        className={`category-card ${isActive ? 'active' : ''}`}
        onClick={onClick}
    >
        <div className="category-img-container">
            <img src={image} alt={title} className="category-img" />
        </div>
        <div className="category-content">
            <h3>{title}</h3>
        </div>
    </div>
);

const Products = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('apples');

    const categories = [
        {
            id: 'apples',
            title: t('products.categories.apples'),
            image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 'plums',
            title: t('products.categories.plums'),
            image: "/images/plums.jpg"
        },
        {
            id: 'pears',
            title: t('products.categories.pears'),
            image: "/images/pears.jpg"
        },
        {
            id: 'raspberries',
            title: t('products.categories.raspberries'),
            image: "/images/raspberries.jpg"
        }
    ];

    const apples = [
        {
            title: t('products.varieties.gala.name'),
            description: t('products.varieties.gala.description')
        },
        {
            title: t('products.varieties.idared.name'),
            description: t('products.varieties.idared.description')
        },
        {
            title: t('products.varieties.golden.name'),
            description: t('products.varieties.golden.description')
        },
        {
            title: t('products.varieties.redChief.name'),
            description: t('products.varieties.redChief.description')
        },
        {
            title: t('products.varieties.florina.name'),
            description: t('products.varieties.florina.description')
        },
        {
            title: t('products.varieties.other.name'),
            description: t('products.varieties.other.description')
        }
    ];

    useEffect(() => {
        if (location.hash) {
            const category = location.hash.replace('#', '');
            if (['apples', 'plums', 'pears', 'raspberries'].includes(category)) {
                setSelectedCategory(category);
                // Scroll to category section
                const element = document.getElementById('products-categories');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }, [location]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        // Update URL hash without scrolling
        window.history.replaceState(null, '', `#${categoryId}`);
        // Scroll to details section
        const detailsElement = document.getElementById(`${categoryId}-details`);
        if (detailsElement) {
            detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">{t('products.title')}</h1>
                    <p className="page-subtitle">
                        {t('products.subtitle')}
                    </p>
                </div>
            </div>

            {/* LEVEL 1: Category Cards */}
            <section id="products-categories" className="categories-section section-padding">
                <div className="container">
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                {...category}
                                isActive={selectedCategory === category.id}
                                onClick={() => handleCategoryClick(category.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* LEVEL 2: Detail Area */}
            <section className="product-details-section section-padding bg-light">
                <div className="container">
                    {selectedCategory === 'apples' && (
                        <div id="apples-details" className="category-details">
                            <h2 className="details-title">{t('products.varietiesTitle')}</h2>
                            <div className="products-grid">
                                {apples.map((apple, index) => (
                                    <ProductCard key={index} {...apple} />
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedCategory === 'plums' && (
                        <div id="plums-details" className="category-details text-center">
                            <h2 className="details-title">{t('products.details.plums.title')}</h2>
                            <p className="details-text max-w-3xl mx-auto">
                                {t('products.details.plums.text')}
                            </p>
                        </div>
                    )}

                    {selectedCategory === 'pears' && (
                        <div id="pears-details" className="category-details text-center">
                            <h2 className="details-title">{t('products.details.pears.title')}</h2>
                            <p className="details-text max-w-3xl mx-auto">
                                {t('products.details.pears.text')}
                            </p>
                        </div>
                    )}

                    {selectedCategory === 'raspberries' && (
                        <div id="raspberries-details" className="category-details text-center">
                            <h2 className="details-title">{t('products.details.raspberries.title')}</h2>
                            <p className="details-text max-w-3xl mx-auto">
                                {t('products.details.raspberries.text')}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
