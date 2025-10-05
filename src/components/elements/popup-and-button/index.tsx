'use client'

import React from 'react'
import FormPopup from './popup'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const PopupAndButton = ({
    label,
}: {
    label: string,
}) => {

    return (
            <Dialog>
                <DialogTrigger
                    className='w-full'
                >
                    <div
                        className='group w-max max-w-full'
                    >
                        <div
                            className='flex items-center text-base md:text-xl font-semibold text-white gap-[15px] bg-theme-primary py-[15px] px-[30px] rounded-full group-hover:animate-bounce cursor-pointer'
                        >
                            <span
                                className='relative top-[-3px]'
                            >👉</span>
                            <p>{label}</p>
                        </div>
                    </div>
                </DialogTrigger>

                <FormPopup/>

            </Dialog>
    )
}

export default PopupAndButton