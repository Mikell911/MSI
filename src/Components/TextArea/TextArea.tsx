import React, {useState} from "react";

interface TextAreaProps {
    title?: string;
    textareaRef?: React.RefObject<HTMLTextAreaElement>;
    required?: boolean;
    id?: string;
    IsDisable?: (value: boolean) => void;
    placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
    const { title, textareaRef, required, id, IsDisable, placeholder } = props;
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(event.target.value)
        setError(null)
        if (event.target.value.length > 1 && IsDisable) {
            IsDisable(true)
        }
    }
    const handleBlur = (): void => {
        if (required) {
            if (!value.trim()) {
                setError("Field cannot be empty")
            }
        }
    }
    return (
        <>
            <label htmlFor={id} className={'block'}>
                {title}
                {required
                    &&
                    <span className={'text-red'}>
                      *
                    </span>
                }
                </label>
            <textarea
                ref={textareaRef}
                required={required}
                value={value}
                id={id}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                className={"w-full h-56 border rounded-lg border-dark-blue p-5 " +
                    "outline-none focus:border-purple focus:border-2  " +
                    (error ? "border-red" : "bg-white")
            }
            />
            {error && <p className={'text-red text-xs'}>{error}</p>}
        </>
    );
};
