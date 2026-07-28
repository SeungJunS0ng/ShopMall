import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    fullWidth?: boolean;
    children: ReactNode;
}
function Button({
    variant = 'primary',
    fullWidth = false,
    children,
    className = '',
    ...rest
}: ButtonProps) {
    const buttonClass = `
${styles.button}
${styles[variant]}
${fullWidth ? styles.fullWidth : ''}
${className}
`.trim();
    return (
        <button className={buttonClass} {...rest}>
            {children}
        </button>
    );
}
export default Button;