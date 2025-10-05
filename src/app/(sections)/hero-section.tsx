import PopupAndButton from '@/components/elements/popup-and-button'
import DefaultSection from '@/layouts/default-section'
import { RiCalendarLine, RiStarFill, RiTimeLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <DefaultSection
      className='bg-theme-primary'
      outerClassName='min-h-[400px]'
      outerStyle={{
        backgroundImage: "url('/images/graphics/xy-lines.webp')",
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
        padding: "40px 20px"
      }}
      overlay={{
        color: "white",
        opacity: 80,
      }}
    >
      <div
        className='bg-white shadow-xl shadow-gray-200 p-[25px] flex flex-col-reverse md:flex-row items-center gap-[25px]'
      >
        <div
          className='w-full space-y-[15px]'
        >
          <div
            className='flex justify-start'
          >
            <p
              className='py-[10px] px-[25px] text-lg border-2 text-center md:text-left border-theme-primary rounded-full font-semibold text-theme-primary'
            >For Online Coaches, Trainers & Consultants Only</p>
          </div>

          <h1
            className='text-3xl font-black text-center md:text-left'
          >How to Get Your <span
            className='text-highlight'
          >First 5–10 Coaching Clients</span> Without Ads or Complex Funnels (Even If You Have a Small Audience)</h1>

          <p
            className='text-lg text-center md:text-left'
          >Join the <b>live 3-step system workshop</b> trusted by <b>500+ coaches</b> to consistently attract, engage & convert clients, even with a small audience.</p>

          <div
            className='flex items-center gap-[15px] pb-[10px]'
          >
            {
              [
                {
                  icon: RiCalendarLine,
                  label: "Date: 11th Sep"
                },
                {
                  icon: RiTimeLine,
                  label: "Time: 4:00 PM"
                },
              ]
                .map((item, index) => (
                  <div
                    key={index}
                    className='w-full bg-theme-primary/15 rounded-lg flex items-center gap-[10px] py-[10px] px-[15px]'
                  >
                    <item.icon
                      size={20}
                    />
                    <p
                      className='text-sm md:text-base'
                    >{item.label}</p>
                  </div>
                ))
            }
          </div>

          <PopupAndButton
            label='Yes! I’m a Coach, Save My Seat'
          />

          <p
            className='text-lg font-bold text-center md:text-left'
          >Language of Workshop: English</p>

          <div
            className='flex w-full gap-[20px]'
          >
            <div
              className='flex items-center w-full'
            >
              {
                [
                  "/images/assets/profile-images/profile-1.webp",
                  "/images/assets/profile-images/profile-2.webp",
                  "/images/assets/profile-images/profile-3.webp",
                  "/images/assets/profile-images/profile-4.webp",
                  "/images/assets/profile-images/profile-5.webp",
                ]
                  .map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt='Profile'
                      width={100}
                      height={100}
                      className='w-[50px] h-[50px] rounded-full bg-white shadow-md p-[3px]'
                      style={{
                        position: "relative",
                        left: `-${15 * (index + 1)}px`
                      }}
                    />
                  ))
              }
            </div>
            <div
              className='w-full flex flex-col items-start justify-center'
            >
              <div
                className='flex gap-1'
              >
                {
                  [1, 2, 3, 4, 5].map((key) => (
                    <RiStarFill
                      size={15}
                      className='text-orange-500'
                      key={key}
                    />
                  ))
                }
              </div>

              <div>
                <p
                  className='text-sm'
                >14k+ reviews (4.9 of 5)</p>
              </div>

            </div>
          </div>

        </div>
        <div
          className='w-full space-y-[10px]'
        >
          <Image
            alt='coach'
            src={"/images/graphics/Coach-Image-Sagar-Sangam.webp"}
            width={1000}
            height={1000}
            className='w-full'
          />
          <h3
            className='text-highlight text-4xl text-center'
          >Sagar Sangam Sahu</h3>
          <p
            className='text-center text-lg'
          >9+ years of experience in marketing & sales 15k+ Coaches Trained</p>
        </div>
      </div>
    </DefaultSection>
  )
}

export default HeroSection