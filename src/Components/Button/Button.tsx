import React from "react";

interface ButtonProps {
    title?: string;
    isDisabled?: boolean;
    type?: "submit" | "reset" | "button";
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        title,
        isDisabled,
        type,
        className,
        onClick,

    } = props

    return (
        <button
            className={`
            w-fit rounded-full cursor-pointer text-blue text-sm font-semibold py-2 px-7 border border-blue
                ${!isDisabled ? 'bg-opacity-25 bg-blue text-white cursor-no-drop' : `${className}`}
            `}
            disabled={!isDisabled}
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
