'use client'

import React, { useState } from 'react'
import FormPopup from './popup'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const PopupAndButton = ({
    label,
}: {
    label: string,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
            <Dialog>
                <DialogTrigger>
                    <div
                        className='group w-max'
                    >
                        <button
                            className='flex items-center text-xl font-semibold text-white gap-[15px] bg-theme-primary py-[15px] px-[30px] rounded-full group-hover:animate-bounce cursor-pointer'
                            onClick={() => setIsOpen(prev => !prev)}
                        >
                            <span
                                className='relative top-[-3px]'
                            >👉</span>
                            <p>{label}</p>
                        </button>
                    </div>
                </DialogTrigger>

                <FormPopup/>

            </Dialog>
    )
}

export default PopupAndButton