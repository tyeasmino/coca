import React from 'react'

const HeroInfoComponent = ({title, subTitle}) => {
    return (
        <div>
            <h4 className='text-4xl text-white font-bold'> {title} </h4>
            <p className='text-[14px] text-[#ffffff90] font-semibold '> {subTitle} </p>
        </div>
    )
}

export default HeroInfoComponent