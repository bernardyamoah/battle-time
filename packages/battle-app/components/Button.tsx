import React from 'react';
import { atDotCss } from '@iyio/at-dot-css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    variant = 'primary',
    disabled = false,
    type = 'button',
    children,
}) => {
    return (
        <button
            type={type}
            className={`${style.button()} ${style[variant]()}  ${
                disabled ? style.disabled() : ''
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

const style = atDotCss({
    name: 'Button',
    css: `
        @.button {
            display: inline-block;
            
            font-family: 'Inter-SemiBold';
            font-size: 1rem;
            font-weight: 600;
            padding: 0.43rem 1rem 0.562rem 1rem;
            border-radius: 0.75rem;
            text-align: center;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;

            
        }

        /* Variant Styles */
        @.primary {
            background-color: #007bff;
            color: #ffffff;
        }

        @.primary:hover {
            background-color: #0056b3;
        }

        
        @.outline {
            border-radius: 12px;
            border: 2px solid rgba(39, 43, 48, 1);
            opacity: 1;
            background-color:transparent;
            color:#FCFCFC;
        }

        @.outline:hover {
            background-color: #5a6268;
        }


        @.disabled {
            background-color:#6F767E;
            color: #ffffff;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
            cursor: not-allowed;
        }
    `,
});

export default Button;
