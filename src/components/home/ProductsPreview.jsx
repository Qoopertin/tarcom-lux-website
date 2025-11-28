import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './ProductsPreview.css';

const ProductCard = ({ image, title, description, link }) => (
    <div className="preview-card">
        <div className="preview-img-container">
            <img src={image} alt={title} className="preview-img" />
        </div>
        <div className="preview-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const ProductsPreview = () => {
    const { t } = useLanguage();

    const products = [
        {
            title: t('productsPreview.apples.title'),
            description: t('productsPreview.apples.description'),
            image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: t('productsPreview.plums.title'),
            description: t('productsPreview.plums.description'),
            image: "/images/plums.jpg"
        },
        {
            title: t('productsPreview.pears.title'),
            description: t('productsPreview.pears.description'),
            image: "/images/pears.jpg"
        },
        {
            title: t('productsPreview.raspberries.title'),
            description: t('productsPreview.raspberries.description'),
            image: "/images/raspberries.jpg"
        }
    ];

    return (
        <section className="products-preview section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">{t('productsPreview.title')}</h2>
                    <p className="section-subtitle">{t('productsPreview.subtitle')}</p>
                </div>

                <div className="preview-grid">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;
