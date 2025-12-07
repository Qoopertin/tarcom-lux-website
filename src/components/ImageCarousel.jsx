import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, alt, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {images.map((img, index) => (
                    <div className="carousel-slide" key={index}>
                        <img
                            src={img}
                            alt={`${alt} - ${index + 1}`}
                            onClick={() => onImageClick && onImageClick(img)}
                            style={{ cursor: onImageClick ? 'pointer' : 'default' }}
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous image">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next image">
                        <ChevronRight size={24} />
                    </button>

                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;
