import React from "react";
import {CheckBox} from "../../Components/Input/Input";

interface CheckBoxGroupProp {
    className?: string;
    checkedBoxesByGroup: any;
    id: string;
    nameGroup: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, nameGroup: string) => void;
}

export const CheckBoxGroup: React.FC<CheckBoxGroupProp> = (props) => {
    const {
        className,
        checkedBoxesByGroup,
        id,
        nameGroup,
        label,
        onChange
    } = props;
    const isChecked: boolean = (checkedBoxesByGroup[nameGroup] || []).includes(label);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event, nameGroup);
    };

    return (
        <label
            htmlFor={id}
            className={`${className} flex items-center gap-2 cursor-pointer`}
        >
            <div className={"w-3.5 h-3.5 border border-dark-blue relative"}>
                <div className={`w-3.5 h-3.5 bg-dark-blue absolute top-0 left-0 ${isChecked ? 'visible' : 'invisible'}`}></div>
                <input
                    checked={isChecked}
                    id={id}
                    name={label}
                    value={label}
                    type="checkbox"
                    onChange={handleChange}
                    className={"block invisible"}
                />
            </div>
            {label && <span>{label}</span>}
        </label>
    );
};

interface CheckBoxSingleProps {
    id?: string;
    label?: string;
    isChecked?: boolean;
    className?: string;
    onChange?: (isChecked: boolean) => void;
}

export const CheckBoxSingle:React.FC<CheckBoxSingleProps> = (props) => {
    const {
        id,
        label,
        isChecked,
        className,
        onChange,
    } = props

    const handleChangeCheckedBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.checked);
        }
    }

    return (
        <label
            htmlFor={id}
            className={`${className} flex items-center gap-2 cursor-pointer`}
        >
            <div className={"w-3.5 h-3.5 relative"}>
                <div className={`w-full h-full bg-dark-blue absolute top-0 left-0 ${isChecked ? 'visible' : 'invisible'}`}></div>
                <CheckBox
                    id={id}
                    label={label}
                    isChecked={isChecked}
                    onChange={handleChangeCheckedBox}
                />
            </div>
            {label && <span>{label}</span>}
        </label>
    )
}
