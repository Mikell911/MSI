import React, {useState} from "react";
interface Props {
    title?: string;
    inputRef?: React.RefObject<HTMLInputElement>;
    required?: boolean;
    type?: string;
    id?: string;
    IsDisable?: (value: boolean) => void;
    placeholder?: string;
    className?: string;
}

export const Input:React.FC<Props> = (props:Props) => {
    const {
        inputRef,
        title,
        required,
        type,
        id,
        IsDisable,
        placeholder,
        className,
    } = props
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
        setError(null)
        if (event.target.value.length > 1 && IsDisable) {
            IsDisable(true)
        }
    }
    const handleBlur = (): void => {
        if (required) {
            if (!value.trim()) {
                setError("Field cannot be empty");
            } else if (type === "email" && !isValidEmail(value)) {
                setError("Please use correct formatting. Example: address@email.com");
            } else if (value.length < 2) {
                setError("Please write correct");
            }
        }
    }
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
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
          <input
            ref={inputRef}
            required={required}
            type={type}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            id={id}
            placeholder={placeholder}
            className={
                "w-full border bg-white rounded-lg border-dark-blue p-5 leading-3 " +
                `outline-none focus:border-purple focus:border-dark-blue ${className} ` +
                (error ? "border-red" : "bg-white")

            }
          />
          {error && <p className={'text-red text-xs'}>{error}</p>}
      </>
  )
}

interface CheckBoxProps {
    id?: string;
    label?: string;
    isChecked?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox:React.FC<CheckBoxProps> = (props) => {
    const {
        id,
        label,
        isChecked,
        className,
        onChange,
    } = props

    const visibilityClass = isChecked ? 'visible' : 'invisible';
    return (
        <label
            htmlFor={id}
            className={`${className} flex items-center gap-2 cursor-pointer`}
        >
            <div className={"w-3.5 h-3.5 border border-dark-blue relative"}>
                <div className={`w-3.5 h-3.5 bg-dark-blue absolute ${visibilityClass} top-0 left-0`}></div>
                <input
                    checked={isChecked}
                    id={id}
                    name={label}
                    value={label}
                    type="checkbox"
                    onChange={onChange}
                    className={"block invisible"}
                />
            </div>
        </label>
    )
}