import React from 'react'

const PopupAndButton = ({
    label,
}: {
    label: string,
}) => {
    return (
        <>
            <div
                className='group w-max'
            >
                <button
                    className='flex items-center text-xl font-semibold text-white gap-[15px] bg-theme-primary py-[15px] px-[30px] rounded-full group-hover:animate-bounce cursor-pointer'
                >
                    <span
                        className='relative top-[-3px]'
                    >👉</span>
                    <p>{label}</p>
                </button>
            </div>
        </>
    )
}

export default PopupAndButton