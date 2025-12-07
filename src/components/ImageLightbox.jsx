import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './ImageLightbox.css';

const ImageLightbox = ({ image, alt, onClose }) => {
    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close">
                    <X size={32} />
                </button>
                <img src={image} alt={alt} className="lightbox-image" />
            </div>
        </div>
    );
};

export default ImageLightbox;
