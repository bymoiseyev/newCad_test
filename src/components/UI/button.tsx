// src\components\UI\button.tsx

import type { ReactNode } from "react";

// Just a reusable button created to maintain the same style as 
// the Yta app. It is not necessary, but it avoids repeating the same CSS across buttons.

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
