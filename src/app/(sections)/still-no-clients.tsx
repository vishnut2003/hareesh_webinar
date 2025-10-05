import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import Image from 'next/image'
import React from 'react'

const StillNoClints = () => {

    const cardData: {
        image: string,
        title: string,
        description: string,
    }[] = [
            {
                title: "You’re Posting Non-Stop… But No One’s Buying",
                description: "You’re showing up daily with reels, carousels, and stories",
                image: "/images/graphics/still-no-clients/card-1.webp",
            },
            {
                title: "You’ve Tried Funnels, Freebies & Webinars",
                description: "You’ve built freebies, attended 10 masterclasses, maybe even launched",
                image: "/images/graphics/still-no-clients/card-2.webp",
            },
            {
                title: "You Don’t Know What’s Broken",
                description: "You’re constantly asking: Is it my niche? My offer? My content? My price?",
                image: "/images/graphics/still-no-clients/card-3.webp",
            },
            {
                title: "Sales Still Feel Awkward or Pushy",
                description: "You’ve taken calls… but it felt weird, and they didn’t convert",
                image: "/images/graphics/still-no-clients/card-4.webp",
            },
        ]

    return (
        <DefaultSection
            outerClassName='py-[50px] px-[20px]'
            overlay={{
                color: "#0023A605",
                opacity: 100,
            }}
        >
            <div
                className='space-y-[25px]'
            >
                <h2
                    className='text-3xl font-bold text-center'
                ><span className='text-highlight'>Doing Everything</span> They Said on Instagram… Still No Clients?</h2>

                <div
                    className='max-w-[800px] w-full flex flex-wrap mx-auto'
                >
                    {
                        cardData.map((data, index) => (
                            <div
                                key={index}
                                className='w-full md:w-1/2 p-[10px]'
                            >
                                <div
                                    className='p-[15px] border-2 bg-white border-theme-primary flex flex-col gap-[20px] items-center text-center h-full rounded-2xl'
                                >
                                    <Image
                                        alt={data.title}
                                        src={data.image}
                                        width={500}
                                        height={500}
                                        className='w-[100px]'
                                    />
                                    <h3
                                        className='text-2xl font-semibold'
                                    >{data.title}</h3>
                                    <p
                                        className='text-lg'
                                    >{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
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

export default StillNoClints