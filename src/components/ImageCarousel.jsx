import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, alt, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [isSwiping, setIsSwiping] = useState(false);
    const carouselRef = useRef(null);

    const minSwipeDistance = 50;
    const swipeThreshold = 10; // Threshold to determine swipe direction

    const onTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchStartY(e.targetTouches[0].clientY);
        setIsSwiping(false);
    };

    const onTouchMove = (e) => {
        if (!touchStart || !touchStartY) return;

        const currentX = e.targetTouches[0].clientX;
        const currentY = e.targetTouches[0].clientY;

        const diffX = Math.abs(touchStart - currentX);
        const diffY = Math.abs(touchStartY - currentY);

        // Determine if this is a horizontal or vertical swipe
        if (!isSwiping && (diffX > swipeThreshold || diffY > swipeThreshold)) {
            // If horizontal movement is greater, it's a horizontal swipe
            if (diffX > diffY) {
                setIsSwiping(true);
                // Prevent page scroll for horizontal swipes
                e.preventDefault();
            }
        }

        // Continue preventing scroll if we're in a horizontal swipe
        if (isSwiping) {
            e.preventDefault();
        }
    };

    const onTouchEnd = (e) => {
        if (!touchStart || !touchStartY) return;

        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;

        // Only trigger slide change if we were in a horizontal swipe
        if (isSwiping && Math.abs(distance) > minSwipeDistance) {
            const isLeftSwipe = distance > 0;
            if (isLeftSwipe) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        // Reset swipe state
        setTouchStart(null);
        setTouchStartY(null);
        setIsSwiping(false);
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
        <div className="carousel-container" ref={carouselRef}>
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
                            onClick={() => onImageClick && onImageClick(img, index)}
                            style={{ cursor: onImageClick ? 'pointer' : 'default' }}
                            draggable={false}
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
