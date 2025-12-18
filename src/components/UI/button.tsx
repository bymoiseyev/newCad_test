// src\components\UI\button.tsx

import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({
    children,
    className = '',
    onClick,
    type = 'button',
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-10 p-2 rounded-xs ${className}`}>
              {children}
        </button>
    )
}

export default Button
