import InfiniteCarousel from '@/components/elements/infinite-carousel'
import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import React from 'react'

const CashflowWinsSection = () => {
    return (
        <DefaultSection
            outerClassName='py-[40px] px-[20px]'
        >
            <div
                className='space-y-[15px] text-center'
            >
                <h2
                    className='text-3xl font-bold'
                >Real Coaches, Real Cashflow Wins</h2>
                <p
                    className='text-lg'
                ><b>Sagar Sangam Sahu</b> alongside the industry’s leading marketing and coaching pioneers.</p>

                <div>
                    <InfiniteCarousel
                        slideWidth={300}
                        slides={[
                            "/images/assets/cashflow-wins-section/slide-1.webp",
                            "/images/assets/cashflow-wins-section/slide-2.webp",
                            "/images/assets/cashflow-wins-section/slide-3.webp",
                            "/images/assets/cashflow-wins-section/slide-4.webp",
                            "/images/assets/cashflow-wins-section/slide-5.webp",
                        ]}
                    />

                    <InfiniteCarousel
                        slideWidth={300}
                        slides={[
                            "/images/assets/cashflow-wins-section/slide-6.webp",
                            "/images/assets/cashflow-wins-section/slide-7.webp",
                            "/images/assets/cashflow-wins-section/slide-8.webp",
                            "/images/assets/cashflow-wins-section/slide-9.webp",
                            "/images/assets/cashflow-wins-section/slide-10.webp",
                        ]}
                    />
                </div>

                <div
                    className='flex justify-center'
                >
                    <PopupAndButton
                        label='I’m Ready to Get My First 5–10 Coaching Clients'
                    />
                </div>

                <p
                    className='text-lg font-semibold text-center'
                >Language of Workshop: English</p>

            </div>
        </DefaultSection>
    )
}

export default CashflowWinsSection