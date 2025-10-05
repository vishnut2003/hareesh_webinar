import DefaultSection from '@/layouts/default-section'
import { RiCheckLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const WhatYouLearnSection = () => {

    const stickyCards: {
        heading: string,
        image: string,
        bgColor?: string,
        points: string[],
    }[] = [
        {
            heading: "The Real Reason You’re Not Getting Consistent Clients",
            image: "/images/graphics/sticky-cards/card-1.webp",
            bgColor: "bg-[#ECF3F7]",
            points: [
                "Understand why your content is visible but not converting",
                "Spot the 3 common mistakes that silently block your sales",
                "Learn why freebie funnels, reels, and webinars fail without this one missing link"
            ],
        },
        {
            heading: "The 3-Part Client Cashflow System",
            image: "/images/graphics/sticky-cards/card-2.webp",
            bgColor: "bg-[#F7F4EC]",
            points: [
                "Discover a simple framework that brings leads, trust, and conversions in a repeatable way",
                "Learn how to turn content + DMs into a client pipeline, even with a small audience",
                "Build a lead flow without spending on ads, using what you already know"
            ],
        },
        {
            heading: "Your Personalized Client Path Plan",
            image: "/images/graphics/sticky-cards/card-3.webp",
            bgColor: "bg-[#ECF7F5]",
            points: [
                "Map your next 3 steps to start booking clarity calls and closing clients",
                "Get clear on where to focus content, offer, DMs, or positioning",
                "End the confusion and create your action plan for the next 7 days"
            ],
        },
        {
            heading: "Offer Clarity That Gets You Paid",
            image: "/images/graphics/sticky-cards/card-4.webp",
            bgColor: "bg-[#F7F4EC]",
            points: [
                "Learn how to turn your skills or story into an offer people actually want",
                "Avoid the mistake of “offering everything” and build a clear, sellable package",
                "Know what to charge, how to present it, and how to stand out without shouting"
            ],
        },
        {
            heading: "High-Trust Sales Without Feeling Pushy",
            image: "/images/graphics/sticky-cards/card-5.webp",
            bgColor: "bg-[#ECF7F5]",
            points: [
                "Discover how to lead sales calls that feel honest not awkward",
                "Learn why clients hesitate and what to say instead",
                "Get a preview of our sales conversation framework that works even if you're introverted"
            ],
        },
    ]

  return (
    <DefaultSection
        outerClassName='py-[40px] px-[20px]'
    >
        <div
            className='flex items-start flex-col md:flex-row gap-[30px]'
        >
            <div
                className='w-full h-full sticky top-[30px]'
            >
                <h2
                    className='text-4xl font-semibold capitalize text-center md:text-left'
                >
                    What you&apos;ll learn inside this <span className='text-highlight'>free live Workshop</span>
                </h2>
            </div>
            <div
                className='w-full'
            >
                <div
                    className='space-y-[20px]'
                >
                    {
                        stickyCards.map((card, index) => (
                            <div
                                key={index}
                                className={`${card.bgColor} p-[30px] sticky top-0 rounded-2xl space-y-[30px]`}
                            >
                                <h2
                                    className='text-3xl font-bold'
                                >{card.heading}</h2>
                                <Image
                                    alt='Vector images'
                                    src={card.image}
                                    width={1000}
                                    height={600}
                                    className='w-[200px] rounded-2xl'
                                />

                                <div
                                    className='space-y-[15px]'
                                >
                                    {
                                        card.points.map((point, index) => (
                                            <div
                                                key={index}
                                                className='flex items-start gap-[15px]'
                                            >
                                                <RiCheckLine
                                                    size={15}
                                                    className='min-w-max relative top-[5px]'
                                                />
                                                <p>{point}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </DefaultSection>
  )
}

export default WhatYouLearnSection