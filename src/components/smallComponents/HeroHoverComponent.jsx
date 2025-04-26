import React from 'react'

const HeroHoverComponent = ({ title, bg1, subTitle1, value1, bg2, subTitle2, value2 }) => {
    return (
        <div className='bg-[#426AE4] rounded-md p-2 w-fit '>
            <h6 className='text-[11px] text-white font-semibold '> {title} </h6>
            <div className='flex gap-5 items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <div className='w-[6px] h-[6px] rounded-full' style={{ backgroundColor: bg1 }} ></div>
                    <p className='text-[9px]  text-white' >{subTitle1}</p>
                </div>
                <span className='text-[9px] text-[#ffffff80] ' > {value1} </span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <div className='w-[6px] h-[6px] rounded-full' style={{ backgroundColor: bg2 }} ></div>
                    <p className='text-[9px]  text-white' >{subTitle2}</p>
                </div>
                <span className='text-[9px] text-[#ffffff80] ' > {value2} </span>
            </div>
        </div>
    )
}

export default HeroHoverComponent