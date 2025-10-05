import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import Image from 'next/image'
import React from 'react'

const TestimonialsSection = () => {
    return (
        <DefaultSection
            outerClassName='py-[40px] px-[20px]'
        >
            <div
                className='text-center space-y-[20px]'
            >
                <h2
                    className='text-3xl font-bold text-highlight'
                >Testimonials</h2>
                <h3
                    className='text-2xl font-semibold'
                >Real Coaches, Real Cashflow Wins</h3>
                <p
                    className='text-lg'
                >Reviews and Screenshots from those who turned the Cashflow System into consistent clients and revenue.</p>

                <div
                    className='grid grid-cols-1 md:grid-cols-3 gap-[25px] items-center'
                >
                    {
                        [
                            "/images/assets/testimonials/card-1.webp",
                            "/images/assets/testimonials/card-2.webp",
                            "/images/assets/testimonials/card-3.webp",
                            "/images/assets/testimonials/card-4.webp",
                            "/images/assets/testimonials/card-5.webp",
                            "/images/assets/testimonials/card-6.webp",
                        ]
                            .map((image, index) => (
                                <Image
                                    key={index}
                                    alt='Testimonials'
                                    src={image}
                                    className='w-full border border-gray-300 rounded-2xl'
                                    width={1000}
                                    height={500}
                                />
                            ))
                    }
                </div>

                <div className="flex justify-center">
                    <PopupAndButton
                        label='I’m Ready to Get My First 5–10 Coaching Clients'
                    />
                </div>

                <p className='font-semibold text-lg'>Language of Workshop: English</p>

            </div>
        </DefaultSection>
    )
}

export default TestimonialsSection