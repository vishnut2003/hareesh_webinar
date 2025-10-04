'use client';

import PopupAndButton from '@/components/elements/popup-and-button';
import DefaultSection from '@/layouts/default-section';
import { RiArrowDownSFill } from '@remixicon/react';
import React, { useState } from 'react'

const faqData: {
    question: string,
    answer: string,
}[] = [
        {
            question: "Who should attend this workshop?",
            answer: "Ideal for online coaches, course creators, trainers and healers making less than 1 lakh month"
        },
        {
            question: "Will this work for my specific niche?",
            answer: "Absolutely , we’ve helped 500+ online coaches in every niche get consistent clients using this exact system"
        },
        {
            question: "Will a recording be provided?",
            answer: "No. This is a live-only, action-focused session—no replays will be shared to ensure everyone stays fully engaged.",
        },
        {
            question: "How will I receive the Zoom link?",
            answer: "You’ll get a confirmation email immediately after registering. If you don’t see it in your inbox, please check your spam or promotions folder."
        },
        {
            question: "What if I can’t attend this live session?",
            answer: "If you miss this date, you can sign up for the next live workshop when it’s announced on our registration page."
        },
        {
            question: "How long is the workshop?",
            answer: "It’s a tight, two-hour masterclass designed for maximum impact and actionable takeaways."
        }
    ];

const FaqsSection = () => {
    return (
        <DefaultSection
            outerClassName='py-[40px] px-[20px]'
            overlay={{
                color: "#0023A610",
                opacity: 100,
            }}
        >
            <div
                className='space-y-[25px]'
            >
                <h2
                    className='text-3xl font-bold text-center'
                ><span className='text-highlight'>Frequently</span> Asked Questions</h2>

                <div
                    className='space-y-[10px]'
                >
                    {faqData.map((data, index) => (
                        <FaqSingleItem
                            question={data.question}
                            answer={data.answer}
                            key={index}
                        />
                    ))}
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

function FaqSingleItem({
    answer,
    question,
}: {
    question: string,
    answer: string,
}) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className='space-y-[5px]'
        >
            <button
                className='w-full flex items-center justify-between cursor-pointer py-[10px] px-[20px] shadow-md rounded-md bg-white'
                onClick={() => setIsOpen(prev => !prev)}
            >
                <p
                    className='text-lg'
                >{question}</p>
                <RiArrowDownSFill
                    size={20}
                    className={`min-w-max transition-all ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {
                isOpen && (
                    <div
                        className='py-[10px] px-[20px] bg-gray-200'
                    >
                        <p
                            className='text-lg'
                        >{answer}</p>
                    </div>
                )
            }
        </div>
    )

}

export default FaqsSection