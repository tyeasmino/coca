import React from 'react'
import service1 from '../../assets/05_servicesSection/service1.png'
import service2 from '../../assets/05_servicesSection/service2.png'
import service3 from '../../assets/05_servicesSection/service3.png'
import service4 from '../../assets/05_servicesSection/service4.png'



const OurServicesComponent = () => {
    return (
        <section className='bg-[#FCFCFC]'>
            <div className='max-w-228 mx-auto py-20 px-5'>
                <h4 className='text-[#1D1E25] text-[22px] md:text-[35px] '>Our services/products are trusted by industry leaders</h4>
                <div className='flex flex-wrap gap-2 md:gap-10 items-center justify-center mt-5 md:mt-20'>
                    <img className='w-[145px]' src={service1} alt="" />
                    <img className='w-[145px]' src={service2} alt="" />
                    <img className='w-[145px]' src={service3} alt="" />
                    <img className='w-[145px]' src={service4} alt="" />
                    <img className='w-[145px]' src={service1} alt="" />
                    <img className='w-[145px]' src={service2} alt="" />
                    <img className='w-[145px]' src={service4} alt="" />
                </div>

            </div>
        </section>
    )
}

export default OurServicesComponent