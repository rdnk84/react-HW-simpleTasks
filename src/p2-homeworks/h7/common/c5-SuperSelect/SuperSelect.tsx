import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState} from "react";
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value, ...restProps
    }
) => {
    //value?

    const mappedOptions = options ? options.map((o, index) => (
            <option key={index} value={o} selected={o === value}>{o}</option>))
        : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <select className={s.SuperSelectOptionClassName}
                onChange={onChangeCallback}
                {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
