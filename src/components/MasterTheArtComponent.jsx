import React from 'react'
import commonArrow from '../assets/commonArrow.png'
import commonBg from '../assets/commonBg.png'
import projectScope from '../assets/04_managingWorkSection/projectScope.png'

const MasterTheArtComponent = () => {
    return (
        <section className='bg-[#FCFCFC]'>
            <section className='container'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between md:py-20 px-5'>
                    <div className='w-full md:w-1/2 flex flex-col gap-20'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-[#1D1E25] text-xl md:text-[56px] text-center md:text-left font-bold md:leading-18   '>Master the art of managing your work hours effectively</h2>

                            <p className='text-[#1D1E25] text-[14px] md:text-[18px] font-bold ' > Time management is essential for ensuring that you have enough time to complete your tasks.</p>
                            <p className='text-[#7E8492] text-[12px] md:text-[16px] font-semibold ' > Time is a crucial element in our lives, helping us to structure and organize our daily activities into good habits. By understanding the value of time, we can gain valuable experience and develop ourselves.  </p>
                        </div>

                        <div className='flex items-center gap-5'>
                            <span className='text-[18px] font-semibold ' > Discover More </span> <img src={commonArrow} alt="" />
                        </div>
                    </div>


                    <div className='w-full md:w-1/2 flex justify-end relative'>
                        <img src={commonBg} alt="" />
                        <div className='bg-white flex flex-col gap-10 md:gap-30 rounded-md p-5 absolute left-6 md:left-30 right-0 top-6 md:top-10 bottom-0'>
                            <h3 className='text-center text-[23px] text-[#1D1E25]'>Project scope</h3>

                            <div className='relative text-center w-30 h-30 md:w-60 md:h-60 flex flex-col items-center justify-center mx-auto'>
                                <h4 className='text-[18px] md:text-[30px] text-[#1D1E25] font-semibold '>72h 30m</h4>
                                <p className='text-[#504F54 md:text-[20px]' >Total time</p>
                                <img className='absolute' src={projectScope} alt="" />
                            </div>


                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center justify-between '>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-[#546FFA] w-[10px] h-[10px] rounded-full  ' ></div>
                                        <h6 className='text-[#1D1E25] text-[14px] md:text-[18px] font-semibold  ' >Branding</h6>
                                    </div>
                                    <span className='text-[#1D1D21] md:text-[20px]' >17h 30m</span>
                                </div>
                                <div className='flex items-center justify-between '>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-[#00A5FF] w-[10px] h-[10px] rounded-full  ' ></div>
                                        <h6 className='text-[#1D1E25] text-[14px] md:text-[18px] font-semibold  ' >User Interface</h6>
                                    </div>
                                    <span className='text-[#1D1D21] md:text-[20px]' >23h 30m</span>
                                </div>
                                <div className='flex items-center justify-between '>
                                    <div className='flex items-center gap-3'>
                                        <div className='bg-[#FC3400] w-[10px] h-[10px] rounded-full  ' ></div>
                                        <h6 className='text-[#1D1E25] text-[14px] md:text-[18px] font-semibold  ' >Illustration</h6>
                                    </div>
                                    <span className='text-[#1D1D21] md:text-[20px]' >6h 30m</span>
                                </div>
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MasterTheArtComponent