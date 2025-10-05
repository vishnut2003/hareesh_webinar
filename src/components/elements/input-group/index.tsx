import React, { ChangeEvent, InputHTMLAttributes } from 'react'

export interface InputFieldDataInterface {
    label: string,
    placeholder: string,
    value: string,
    type: InputHTMLAttributes<HTMLInputElement>["type"],
    name: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    required: boolean,
}

const InputGroup = (data: InputFieldDataInterface) => {
    return (
        <div
            className='space-y-[5px] flex flex-col items-start'
        >
            <label
                className='font-medium'
            >
                {data.label}
            </label>
            <input
                type={data.type}
                placeholder={data.placeholder}
                name={data.name}
                value={data.value}
                onChange={data.onChange}
                required={data.required}
                className='py-[10px] px-[20px] border border-gray-300 w-full rounded-md focus:outline outline-theme-primary'
            />
        </div>
    )
}

export default InputGroup