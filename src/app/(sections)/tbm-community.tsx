import DefaultSection from '@/layouts/default-section'
import Image from 'next/image'
import React from 'react'

const TBMCommunitySection = () => {
  return (
    <DefaultSection
        outerClassName='py-[40px] px-[20px]'
        className='!max-w-[800px]'
    >
        <div
            className='space-y-[25px]'
        >
            <h2
                className='text-3xl text-center font-bold'
            >Meet Your Coach & Founder of <span className='text-highlight'>TBM Community</span></h2>
            <Image
                alt='Group Photo'
                src={"/images/assets/tbm-comminity-section/goup-photo.webp"}
                width={1000}
                height={500}
                className='w-full rounded-2xl'
            />
        </div>
    </DefaultSection>
  )
}

export default TBMCommunitySection