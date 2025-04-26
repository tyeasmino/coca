import React from 'react'
import heroImg1 from '../../assets/02_heroSection/hero_Graph01.png'
import heroImg2 from '../../assets/02_heroSection/hero_Graph02.png'
import heroImg3 from '../../assets/02_heroSection/hero_Graph03.png'

const HeroGraphComponent = ({title, bg1, subtitle1, bg2, subtitle2, heroGraph}) => {
    return (
        <div className='bg-white rounded p-5'>
            <h6 className='text-[13px] font-bold'>{title}</h6>
            <div className='flex gap-3 items-center'>
                <div className='flex gap-2 items-center'>
                <div className='w-[6px] h-[6px] rounded-full' style={{ backgroundColor: bg1 }}></div> <span className='text-[11px] ' > {subtitle1} </span>
                </div>
                <div className='flex gap-2 items-center'>
                <div className='w-[6px] h-[6px] rounded-full' style={{ backgroundColor: bg2 }}></div> <span className='text-[11px] '> {subtitle2} </span>
                </div>
            </div>

            <img className='mt-5' src={heroGraph} alt={heroGraph} />
        </div>
    )
}

export default HeroGraphComponent