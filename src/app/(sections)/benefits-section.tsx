import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import { RiCheckboxFill } from '@remixicon/react'
import React from 'react'

const BenefitsSection = () => {
    return (
        <DefaultSection
            outerClassName='py-[40px] px-[20px]'
        >
            <div
                className='space-y-[30px]'
            >
                <h2
                    className='text-center text-3xl font-bold'
                >Benefits of Attending the Workshop</h2>
                <div
                    className='flex flex-wrap'
                >
                    {
                        [
                            "Learn why your current content <b>isn’t bringing clients</b> even if it’s getting views and engagement",
                            "Build your personalized <b>Client Path Plan</b> with clear next 3 steps to get your first 5–10 clients",
                            "Understand the <b>3 key elements</b> missing in most coaching businesses that stop them from earning ₹1L/month",
                            "Stop guessing between funnels, freebies, and launches — <b>learn what actually works in 2025</b>",
                            "Get a proven system used by 500+ coaches to generate <b>consistent leads without paid ads</b>",
                            "Receive <<b>3 ready-to-use bonuses</b> to help you take action immediately after the session",
                            "Know exactly <b>what to post</b> and <b>what to say</b> in DMs to turn conversations into paid clients",
                            "Save <b>time and energy</b> by following a structured method instead of trying random growth hacks"
                        ]
                            .map((item, index, items) => (
                                <div
                                    key={index}
                                    className='w-full md:w-1/2 space-y-[15px] pb-[15px] px-[15px]'
                                >
                                    <div
                                        className='flex items-start gap-[15px]'
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

                                    {
                                        index < (items.length - 2) &&
                                        <hr
                                            className='w-1/2 text-black/30'
                                        />
                                    }
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

export default BenefitsSection