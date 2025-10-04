import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import { RiCheckboxFill } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const MeetCoachSection = () => {
    return (
        <DefaultSection
            outerClassName='py-[40px] px-[20px]'
            className='space-y-[35px]'
        >
            <div
                className='flex items-center gap-[30px]'
            >
                <div
                    className='w-[40%] text-center border-2 border-theme-primary rounded-2xl overflow-hidden'
                >
                    <Image
                        alt='Meet our coach'
                        src={"/images/assets/meet-coach/coach-profile.webp"}
                        width={500}
                        height={600}
                        className='w-full'
                    />
                    <div
                        className='p-[15px] space-y-[10px]'
                    >
                        <h2
                            className='text-2xl font-semibold'
                        >Sagar Sangam Sahu</h2>
                        <p>Cashflow System Coach for Coaches, Experts & Trainers</p>
                    </div>
                </div>

                <div
                    className='w-full space-y-[20px]'
                >
                    <h2
                        className='text-3xl font-bold'
                    >Meet Your Coach</h2>
                    <p
                        className='text-lg'
                    >From a small village in Odisha to helping thousands of coaches build consistent income systems , Sagar brings heart and results to everything he teaches.</p>
                    <h3
                        className='text-xl font-medium'
                    >Why Learn From Sagar?</h3>

                    <div
                        className='space-y-[10px]'
                    >
                        {
                            [
                                "<b>+9 years in Sales & Marketing</b> across startups, events, and online coaching",
                                "Generated over <b>₹2 Crore+ in coaching revenue</b> organically",
                                "Built a <b>500+ member paid community</b> of thriving coaches & experts",
                                "Trained <b>15,000+ coaches</b> in organic marketing, lead generation & sales",
                                "Grown a <b>20K+ social media tribe</b> from scratch",
                                "Known as the <b>“King of Consistency”</b> after completing 365 days of daily Facebook Lives in 2020–21",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-start gap-[10px]'
                                >
                                    <RiCheckboxFill
                                        size={25}
                                        className='min-w-max text-green-600'
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item }}
                                        className='text-lg'
                                    />
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

            <div
                className='flex justify-center'
            >
                <PopupAndButton
                    label='I’m Ready to Get My First 5–10 Coaching Clients'
                />
            </div>
        </DefaultSection>
    )
}

export default MeetCoachSection