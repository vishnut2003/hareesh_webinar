import DefaultSection from '@/layouts/default-section'
import Image from 'next/image';
import React from 'react'

const BonusSection = () => {

    const gridData: {
        image: string,
        heading: string,
        subHeading: string,
        button: string,
    }[] = [
        {
            heading: "Map your entire client journey from content to conversion in one simple visual.",
            subHeading: "Bonus #1: Funnel Clarity Template",
            button: "Worth Rs. 1499",
            image: "/images/assets/bonus-images/bonus.webp",
        },
        {
            heading: "Map your entire client journey from content to conversion in one simple visual.",
            subHeading: "Bonus #1: Funnel Clarity Template",
            button: "Worth Rs. 1499",
            image: "/images/assets/bonus-images/bonus.webp",
        },
        {
            heading: "Map your entire client journey from content to conversion in one simple visual.",
            subHeading: "Bonus #1: Funnel Clarity Template",
            button: "Worth Rs. 1499",
            image: "/images/assets/bonus-images/bonus.webp",
        },
    ];

  return (
    <DefaultSection
        outerClassName='py-[40px] px-[20px]'
    >
        <div
            className='flex items-start gap-[25px]'
        >
            {
                gridData.map((data, index) => (
                    <div
                        key={index}
                        className='border-dashed border-2 border-theme-primary rounded-2xl overflow-hidden'
                    >
                        <div
                            className='bg-theme-primary p-[15px]'
                        >
                            <p
                                className='text-lg text-center text-white'
                            >{data.subHeading}</p>
                        </div>
                        <div
                            className='p-[25px] flex flex-col items-center gap-[25px] text-center'
                        >
                            <Image
                                alt='Bonus image'
                                src={data.image}
                                width={500}
                                height={1000}
                                className='w-[100px]'
                            />
                            <p>{data.heading}</p>

                            <button
                                className='bg-theme-secondary py-[15px] px-[30px] text-white rounded-2xl'
                            >{data.button}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </DefaultSection>
  )
}

export default BonusSection