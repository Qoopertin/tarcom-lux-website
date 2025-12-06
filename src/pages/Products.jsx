
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Products.css';

import ImageCarousel from '../components/ImageCarousel';

const ProductCard = ({ title, description, images }) => (
    <div className="product-card">
        {images && images.length > 0 && (
            <ImageCarousel images={images} alt={title} />
        )}
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
    const navigate = useNavigate();

    // Derive selected category directly from URL hash, default to 'apples'
    const getCategoryFromHash = () => {
        if (location.hash) {
            const category = location.hash.replace('#', '');
            if (['apples', 'plums', 'pears', 'raspberries'].includes(category)) {
                return category;
            }
        }
        return 'apples';
    };

    const selectedCategory = getCategoryFromHash();

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
            title: t('products.varieties.redChief.name'),
            description: t('products.varieties.redChief.description'),
            images: [
                '/images/red-chief/1.jpg',
                '/images/red-chief/2.jpg',
                '/images/red-chief/3.jpg'
            ]
        },
        {
            title: t('products.varieties.redDelicious.name'),
            description: t('products.varieties.redDelicious.description'),
            images: [
                '/images/red-delicious/1.jpg',
                '/images/red-delicious/2.jpg'
            ]
        },
        {
            title: t('products.varieties.jonagold.name'),
            description: t('products.varieties.jonagold.description'),
            images: [
                '/images/jonagold/1.jpg',
                '/images/jonagold/2.jpg'
            ]
        },
        {
            title: t('products.varieties.florina.name'),
            description: t('products.varieties.florina.description'),
            images: [
                '/images/florina/1.jpg',
                '/images/florina/2.jpg',
                '/images/florina/3.jpg'
            ]
        },
        {
            title: t('products.varieties.gala.name'),
            description: t('products.varieties.gala.description'),
            images: [
                '/images/gala/1.jpg',
                '/images/gala/2.jpg'
            ]
        }
    ];

    // Scroll to section when hash changes (simulating anchor behavior but controlled)
    useEffect(() => {
        if (location.hash) {
            const category = location.hash.replace('#', '');
            if (['apples', 'plums', 'pears', 'raspberries'].includes(category)) {
                // Scroll to details section first if it exists, or category list
                const detailsElement = document.getElementById(`${category}-details`);
                const categoriesElement = document.getElementById('products-categories');

                if (detailsElement) {
                    // Optional: check if we just navigated here. For now, simple scroll.
                } else if (categoriesElement) {
                    categoriesElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }, [location.hash]);

    const handleCategoryClick = (categoryId) => {
        // Update URL hash using Router navigation
        navigate(`#${categoryId}`, { replace: true });
    };

    const berries = [
        {
            title: t('products.details.berries.raspberry.name'),
            description: t('products.details.berries.raspberry.description'),
            images: [
                '/images/raspberry/1.jpg',
                '/images/raspberry/2.jpg'
            ]
        },
        {
            title: t('products.details.berries.cherry.name'),
            description: t('products.details.berries.cherry.description'),
            images: [
                '/images/cherry/1.jpg',
                '/images/cherry/2.jpg'
            ]
        },
        {
            title: t('products.details.berries.blackberry.name'),
            description: t('products.details.berries.blackberry.description'),
            images: [
                '/images/blackberry/1.jpg'
            ]
        }
    ];

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
                            <div className="max-w-3xl mx-auto mb-8">
                                <ImageCarousel
                                    images={['/images/plums-gallery/1.jpg']}
                                    alt={t('products.details.plums.title')}
                                />
                            </div>
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
                        <div id="raspberries-details" className="category-details">
                            <h2 className="details-title text-center mb-8">{t('products.details.berries.title')}</h2>
                            <p className="details-text max-w-3xl mx-auto text-center mb-12">
                                {t('products.details.berries.text')}
                            </p>
                            <div className="products-grid">
                                {berries.map((berry, index) => (
                                    <ProductCard key={index} {...berry} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
