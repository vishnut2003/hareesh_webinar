'use client';

import React, { ChangeEvent, useState } from 'react'
import InputGroup, { InputFieldDataInterface } from '../input-group'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const FormPopup = () => {

    const [formData, setFormData] = useState<{
        name: string,
        mobile: string,
        email: string,
    }>({
        email: "",
        mobile: "",
        name: "",
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    const inputFields: InputFieldDataInterface[] = [
        {
            label: "Full name",
            name: "name",
            value: formData["name"],
            placeholder: "Full name",
            required: true,
            type: "text",
            onChange: handleInputChange,
        },
        {
            label: "Mobile number",
            name: "mobile",
            value: formData["mobile"],
            placeholder: "Prefer WhatsApp number",
            type: "text",
            required: true,
            onChange: handleInputChange,
        },
        {
            label: "Email",
            name: "email",
            placeholder: "Enter your email id",
            type: "email",
            required: true,
            value: formData["email"],
            onChange: handleInputChange,
        }
    ];

    return (

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Register Now For Free</DialogTitle>
                <DialogDescription>
                    <form
                        className='space-y-[20px] py-[15px]'
                    >
                        {inputFields.map((field, index) => (
                            <InputGroup
                                {...field}
                            />
                        ))}

                        <button
                            className='bg-theme-primary py-[15px] px-[30px] text-white rounded-md cursor-pointer'
                        >
                            Submit Form
                        </button>

                    </form>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default FormPopup