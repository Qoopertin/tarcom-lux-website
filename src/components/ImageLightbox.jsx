import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, initialIndex = 0, alt, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [touchStart, setTouchStart] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [isSwiping, setIsSwiping] = useState(false);

    const minSwipeDistance = 50;

    // Handle single image (backward compatibility)
    const imageArray = Array.isArray(images) ? images : [images];
    const currentImage = imageArray[currentIndex];

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft' && imageArray.length > 1) {
                prevImage();
            } else if (e.key === 'ArrowRight' && imageArray.length > 1) {
                nextImage();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
    };

    // Touch handlers for mobile swipe
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

        // In fullscreen mode, only allow horizontal swipes for navigation
        // Prevent all vertical scrolling (body overflow is already hidden)
        if (!isSwiping) {
            // Detect primarily horizontal movement
            if (diffX > 20 && diffX > diffY) {
                setIsSwiping(true);
            }
        }

        // Always prevent default in lightbox to block any page movement
        e.preventDefault();
    };

    const onTouchEnd = (e) => {
        if (!touchStart || !touchStartY || imageArray.length <= 1) return;

        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;

        if (isSwiping && Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }

        setTouchStart(null);
        setTouchStartY(null);
        setIsSwiping(false);
    };

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <button className="lightbox-close" onClick={onClose} aria-label="Close">
                    <X size={32} />
                </button>

                {imageArray.length > 1 && (
                    <>
                        {/* Desktop arrow navigation */}
                        <button
                            className="lightbox-arrow lightbox-arrow-left"
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={36} />
                        </button>
                        <button
                            className="lightbox-arrow lightbox-arrow-right"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <ChevronRight size={36} />
                        </button>

                        {/* Image counter */}
                        <div className="lightbox-counter">
                            {currentIndex + 1} / {imageArray.length}
                        </div>
                    </>
                )}

                <img
                    src={currentImage}
                    alt={`${alt} - ${currentIndex + 1}`}
                    className="lightbox-image"
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default ImageLightbox;
