import React from 'react'
import scheduling_download from '../assets/06_schedulingSection/scheduling_download.png'
import scheduling_graph from '../assets/06_schedulingSection/scheduling_Graph.png'
import scheduling_pencil from '../assets/06_schedulingSection/scheduling_pencil.png'
import scheduling_track from '../assets/06_schedulingSection/scheduling_track.png'
import commonBg from '../assets/commonBg.png'


const SimplifySchedulingComponent = () => {
    return (
        <section className='bg-[#FCFCFC]'>
            <section className='container py-20'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between px-5'>
                    <div className='w-full md:w-1/2 flex relative'>
                        <img src={commonBg} alt="" />
                        <div className='bg-white flex gap-2 md:gap-5 flex-col rounded-md p-5 absolute left-6 md:left-10 md:right-38 top-6 md:top-10 -bottom-2'>
                            <div>
                                <h3 className='md:text-[23px] font-semibold text-[#1D1E25]'>Overal time used</h3>
                                <p className='text-sm md:text-[18px] text-[#7E8492]'>Here's we show data about your effective working hours</p>
                            </div>


                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <h6 className='text-[12px] md:text-[20px] text-[#1D1E25] '>36h</h6>
                                    <p className='text-[10px] md:text-[18px] text-[#7E8492] '>Total hrs</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h6 className='text-[12px] md:text-[20px] text-[#1D1E25] '>32h 20m</h6>
                                    <p className='text-[10px] md:text-[18px] text-[#7E8492] '>Efc. time</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h6 className='text-[12px] md:text-[20px] text-[#1D1E25] '>3h 4m</h6>
                                    <p className='text-[10px] md:text-[18px] text-[#7E8492] '>Non-efc.</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h6 className='text-[12px] md:text-[20px] text-[#1D1E25] '>95%</h6>
                                    <p className='text-[10px] md:text-[18px] text-[#7E8492] '>Productivity</p>
                                </div>
                            </div>

                            <div className='md:mt-8'>
                                <img src={scheduling_graph} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col gap-20'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-[#1D1E25] text-xl md:text-[56px] text-center md:text-left font-bold md:leading-18   '> Simplify scheduling processes for all tasks</h2>
                            <p className='text-[#7E8492] text-[12px] md:text-[16px] font-semibold ' >   Coca is an effortlessly intuitive, lightweight solution for tracking hours and projects, designed for easy adoption and daily use, with a focus on lightning-fast performance. </p>
                        </div>

                        <div className='flex gap-5'>
                            {/* Pending From Here: TIME 5.54 AM */}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default SimplifySchedulingComponent