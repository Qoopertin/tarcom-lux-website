import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    to,
    variant = 'primary',
    size = 'medium',
    className = '',
    onClick,
    ...props
}) => {
    const baseClass = `btn btn-${variant} btn-${size} ${className}`;

    if (to) {
        return (
            <Link to={to} className={baseClass} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={baseClass} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
