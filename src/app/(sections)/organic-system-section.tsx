import DefaultSection from '@/layouts/default-section'
import { RiCheckboxCircleFill } from '@remixicon/react'
import React from 'react'

const OrganicSystemSection = () => {

    return (
        <DefaultSection
            outerClassName='py-[40px] px-[20px]'
        >
            <div
                className='space-y-[25px]'
            >
                <h2
                    className='text-center text-3xl font-bold'
                >The Organic System Workshop is For</h2>
                <div
                    className='flex flex-wrap justify-center items-stretch gap-[20px]'
                >
                    {
                        [
                            'A <b>coach, trainer, consultant or healer</b> struggling to get first 5–10 clients',
                            'Tired of wasting time on <b>“post more”</b> strategies that don’t convert',
                            'Don’t want to rely on <b>ads, funnels, or sales tricks</b> to make income',
                            'Want a clear path to hit <b>₹1L/month</b> organically',
                            'Looking for trusted mentor & community to get real <b>Growth</b>',
                        ].map((content, index) => (
                            <div
                                key={index}
                                className='w-full md:max-w-[31%] p-[25px] bg-gradient-to-b from-white to-theme-primary/10 flex items-stretch gap-[15px] shadow-md rounded-md'
                            >
                                    <RiCheckboxCircleFill
                                        className='min-w-max text-theme-primary'
                                        size={30}
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{__html: content}}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
        </DefaultSection>
    )
}

export default OrganicSystemSection