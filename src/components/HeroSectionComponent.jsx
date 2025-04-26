import React from 'react'
import GreenButton from './smallComponents/GreenButton'
import heroImg1 from '../assets/02_heroSection/hero_Graph01.png'
import heroImg2 from '../assets/02_heroSection/hero_Graph02.png'
import heroImg3 from '../assets/02_heroSection/hero_Graph03.png'
import heroArrow from '../assets/02_heroSection/hero_arrow.png'
import heroWatchDemo from '../assets/02_heroSection/hero_WatchDemo.png'
import heroCircleGroup from '../assets/02_heroSection/hero_CircleGroup.png'
import HeroGraphComponent from './smallComponents/HeroGraphComponent'
import HeroInfoComponent from './smallComponents/HeroInfoComponent'
import HeroHoverComponent from './smallComponents/HeroHoverComponent'



const HeroSectionComponent = () => {
    return (
        <section className='py-16'>
            <div className='md:px-10'>
                <h2 className='max-w-[905px] mx-auto text-[28px] md:text-[82px] text-center text-white md:leading-20'>Improve efficiency through time tracking.</h2>
                <p className='max-w-[740px] mx-auto py-5 text-[13px]  md:text-[18px] text-[#ffffffd0] font-semibold text-center md:leading-[32px] '>How to overcome common challenges and pitfalls when trying to adopt time tracking and efficient work habits, and build sustainable habits that lead to lasting success</p>
            </div>

            <section className='flex flex-col md:flex-row items-center md:items-start justify-between py-10'>
                <div className='part-1 flex flex-col gap-5'>
                    <div className='w-fit relative group'>
                        <HeroGraphComponent title="Income vs Expenses" bg1="#20C9AC" subtitle1="Projects Earnings" bg2="#546FFA" subtitle2="Labor Cost" heroGraph={heroImg1} />

                        <div className='absolute top-35 left-20 hidden group-hover:block transition-all duration-300 ease-in-out'>
                            <HeroHoverComponent title="17 Mar, 2021" bg1="#546FFA" subTitle1="P.Earnings" value1="1.5K USD" bg2="#20C9AC" subTitle2="Labor Cost" value2="1.1K USD" />
                        </div>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <HeroInfoComponent title="15+" subTitle="Years of experience" />
                        <div className='w-[1px] h-9 bg-white '></div>
                        <HeroInfoComponent title="84k" subTitle="Customers worldwide" />
                    </div>
                </div>

                <div className='part-2 flex flex-col gap-10 items-center'>
                    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 relative mt-20 md:mt-10'>
                        <div className="text-cookie absolute -left-10 -top-14 ">
                            <div className='w-[60px] text-center rotate-20 text-white '>
                                <span className='text-[12px]'>All research start from here</span>
                            </div>
                            <img src={heroArrow} alt="heroArrow" />
                        </div>
                        <div>
                            <GreenButton btnText="Get Trial Project" />
                        </div>
                        <div className='flex gap-2 text-white text-[18px] font-semibold items-center'>
                            <img src={heroWatchDemo} alt="" />
                            <span>Watch Demo</span>
                        </div>
                    </div>

                    <div className='bg-white rounded-md p-5 flex flex-col gap-5'>
                        <div className='flex flex-col md:flex-row gap-2  items-center justify-between'>
                            <div className='flex gap-5 items-center'>
                                <div className='w-[13px] h-[26px] bg-[#426AE4] rounded'></div> <span className='text-[17px] font-semibold' >Time Tracking</span>
                            </div>

                            <ul className='flex items-center gap-4'>
                                <li className='text-[#6F767E] text-[12px] font-bold '>This month</li>
                                <li className='text-[#6F767E] text-[12px] font-bold '>All time</li>
                                <li className='text-[#6F767E] text-[12px] font-bold bg-[#EFEFEF] px-[13px] py-[6px] '>Last 7 days</li>
                            </ul>
                        </div>

                        <img src={heroImg2} alt="heroImg2" />
                    </div>
                </div>

                <div className="part-3 mt-14 flex flex-col gap-5">
                    <div className='w-fit relative group'>
                        <HeroGraphComponent title="Time vs Budget" bg2="#20C9AC" subtitle1="Time Estimation" bg1="#546FFA" subtitle2="Budget" heroGraph={heroImg3} />

                        <div className='absolute top-20 left-30 hidden group-hover:block transition-all duration-300 ease-in-out'>
                            <HeroHoverComponent title="15 Mar, 2021" bg1="#24AA4A" subTitle1="Time clocked" value1="100h" bg2="#FFC046" subTitle2="Budget remain" value2="1.5k USD" />
                        </div>
                    </div>


                    <div className='flex gap-5 items-center'>
                        <img src={heroCircleGroup} alt="heroCircleGroup" />
                        <HeroInfoComponent title="140K+" subTitle="Happy Customers" />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HeroSectionComponent