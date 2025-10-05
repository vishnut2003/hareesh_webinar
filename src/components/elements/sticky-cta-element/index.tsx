import { RiCalendarLine, RiTimeLine } from '@remixicon/react'
import React from 'react'
import PopupAndButton from '../popup-and-button'

const StickyCTAElement = () => {
  return (
    <div
        className='fixed bottom-0 left-0 w-full bg-black py-[10px] px-[20px] z-50 flex items-center justify-between rounded-tl-[20px] rounded-tr-[20px]'
    >
        <div
            className='flex items-center gap-2.5 text-white'
        >
            {
                [
                    {
                        icon: RiCalendarLine,
                        label: "Date: 14th Sep",
                    },
                    {
                        icon: RiTimeLine,
                        label: "Time: 11:00 AM",
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-2.5'
                    >
                        <item.icon
                            size={25}
                            className='min-w-max'
                        />
                        <p>{item.label}</p>
                    </div>
                ))
            }
        </div>
        <div>
            <PopupAndButton
                label=' I’m Ready to Get My First 5–10 Coaching Clients'
            />
        </div>
    </div>
  )
}

export default StickyCTAElement