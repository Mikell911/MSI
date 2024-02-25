import React, { useState, useRef, useEffect } from "react";

export type Option = {
    label: string;
    value: string | number;
};

interface SelectorProps {
    placeholder?: string;
    className?: string;
    options: Option[];
    selected?: Option | null;
    onChange?: (selection: Option) => void;
}

export const Selector: React.FC<SelectorProps> = (props) => {
    const { placeholder, className, options, onChange, selected: propSelected } = props;
    const [showOptions, setShowOptions] = useState(false);
    const [selected, setSelected] = useState<Option | null>(propSelected || null);
    const selectorRef = useRef<HTMLDivElement | null>(null);

    const toggleOptions = () => setShowOptions(!showOptions);

    const handleOutsideClick = (event: MouseEvent) => {
        if (selectorRef.current && !(selectorRef.current as HTMLElement).contains(event.target as Node)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleOptionClick = (option: Option) => {
        onChange && onChange(option);
        toggleOptions();
        setSelected(option);
    };

    return (
        <div ref={selectorRef} className={`relative max-w-52 border border-gray text-black cursor-pointer ${className}`}>
            <div onClick={toggleOptions}>
                <p className={"p-1 max-sm:text-sm max-sm:text-center"}>{selected ? selected.label : placeholder}</p>
            </div>
            {showOptions && (
                <div className={"absolute bottom-0 translate-y-full z-50 bg-white w-full"}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className={"border p-1 border-gray w-full hover:text-red"}
                        >
                            <p>{option.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
