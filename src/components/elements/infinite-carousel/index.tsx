'use client';

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';

const InfiniteCarousel = ({
    slideWidth,
    slides,
}: {
    slides: string[],
    slideWidth: number,
}) => {

    const control = useAnimation();
    const sliderRef = useRef<HTMLDivElement>(null);

    const totalWidth = slideWidth * slides.length;
    const speed = 5;

    useEffect(() => {

        control.start({
            x: [-0, -totalWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed * slides.length,
                    ease: "linear",
                },
            },
        })
        
    }, [control, totalWidth, slides.length]);

    return (
        <div
            className='w-full overflow-hidden'
        >
            <motion.div
                className='min-w-max flex items-center'
                animate={control}
                ref={sliderRef}
            >
                {[...slides, ...slides].map((slide, index) => (
                    <div
                        key={index}
                        className='p-[10px]'
                        style={{
                            width: `${slideWidth}px`,
                        }}
                    >
                        <Image
                            alt={'slide' + index}
                            src={slide}
                            className='w-full h-full rounded-2xl'
                            width={600}
                            height={500}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default InfiniteCarousel