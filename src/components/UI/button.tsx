// src\components\UI\button.tsx

import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    className = '',
    onClick,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-10 p-2 rounded-xs cursor-pointer ${className}`}>
              {children}
        </button>
    )
}

export default Button
