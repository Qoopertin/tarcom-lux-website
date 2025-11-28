import React from 'react';
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

const Products = () => {
    const { t } = useLanguage();

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
            title: t('products.varieties.other.name'),
            description: t('products.varieties.other.description')
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

            <section className="products-grid-section section-padding">
                <div className="container">
                    <div className="products-grid">
                        {apples.map((apple, index) => (
                            <ProductCard key={index} {...apple} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="beyond-apples section-padding bg-light">
                <div className="container">
                    <div className="beyond-content text-center">
                        <h2>{t('products.beyondTitle')}</h2>
                        <p>
                            {t('products.beyondText')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
