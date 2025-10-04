import InfiniteCarousel from '@/components/elements/infinite-carousel'
import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import React from 'react'

const CelebratingCarouselSection = () => {
  return (
    <DefaultSection
        outerClassName='py-[40px] px-[20px]'
    >
        <div
            className='space-y-[30px]'
        >
            <h2
                className='text-3xl font-bold text-center'
            >Celebrating Those Who Took Action And Got Results</h2>
            <div>
                <InfiniteCarousel
                    slideWidth={300}
                    slides={[
                        "/images/assets/celebrating-carousel-slides/slide-1.webp",
                        "/images/assets/celebrating-carousel-slides/slide-2.webp",
                        "/images/assets/celebrating-carousel-slides/slide-3.webp",
                        "/images/assets/celebrating-carousel-slides/slide-4.webp",
                        "/images/assets/celebrating-carousel-slides/slide-5.webp",
                        "/images/assets/celebrating-carousel-slides/slide-6.webp",
                        "/images/assets/celebrating-carousel-slides/slide-7.webp",
                        "/images/assets/celebrating-carousel-slides/slide-8.webp",
                        "/images/assets/celebrating-carousel-slides/slide-9.webp",
                        "/images/assets/celebrating-carousel-slides/slide-10.webp",
                        "/images/assets/celebrating-carousel-slides/slide-11.webp",
                        "/images/assets/celebrating-carousel-slides/slide-12.webp",
                    ]}
                />
            </div>

            <div
                className='flex justify-center'
            >
                <PopupAndButton
                    label=' I’m Ready to Get My First 5–10 Coaching Clients'
                />
            </div>

            <p
                className='text-lg font-semibold text-center'
            >Language of Workshop: English</p>
        </div>
    </DefaultSection>
  )
}

export default CelebratingCarouselSection