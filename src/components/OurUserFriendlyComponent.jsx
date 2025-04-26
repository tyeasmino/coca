import React from 'react'

const OurUserFriendlyComponent = () => {
    return (
        <section className='bg-[#FCFCFC] py-15 flex flex-col gap-10'>
            <div className='container'>
                <div className=''>
                    <h2 className='max-w-[905px] font-semibold mx-auto text-[20px] md:text-[52px] text-center text-[#1D1E25] md:leading-15'>Our user-friendly interface allows for easy management of tasks</h2>
                    <p className='max-w-[590px] mx-auto py-5 text-[13px] md:text-[18px] text-[#7E8492] font-semibold text-center leading-[24px] '>The Simple Solution to Task Management: Our Interface Offers an Easy and Efficient Way to Manage Your Tasks</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-14'>
                    <section className='flex flex-col justify-between gap-5 border border-[#EDEDED] p-8 rounded-2xl  border-secondary'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-[18px] text-[#1D1E25] font-semibold  '>Top Clients</h3>
                            <button className='bg-linear-to-b from-[#426AE4] to-[#23F0A9] px-4 py-1.5 rounded-full text-white font-semibold ' >Active</button>
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-5 items-center'>
                                <div className='bg-[#CACACA] w-[70px] h-[70px] rounded-md '></div>
                                <div>
                                    <h4 className='text-[16px] font-bold '>Jonatan Cristy</h4>
                                    <p className='text-[14px] text-[#7E8492] font-semibold ' >New York</p>
                                </div>
                            </div>

                            <div className='w-11/12 mx-auto bg-[#EDEDED] h-[0.5px] '></div>
                        </div>

                        <div className='max-w-[270px] mt-7 flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#111111] '>Manager customer relationships</h2>
                            <p className='text-[18px] text-[#7E8492] font-semibold '  > Improve Customer Satisfaction with Effective Relationship Management </p>
                        </div>
                    </section>


                    <section className='flex flex-col justify-between gap-5 border border-[#EDEDED] p-8 rounded-2xl  border-secondary'>
                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-5 items-center'>
                                <div className='bg-[#CACACA] w-[70px] h-[70px] rounded-md '></div>
                                <div>
                                    <h4 className='text-[16px] font-bold '>Jonatan Cristy</h4>
                                    <p className='text-[14px] text-[#7E8492] font-semibold ' >Utilizing Feedback Insights</p>
                                </div>
                            </div>

                            <div className='w-11/12 mx-auto bg-[#EDEDED] h-[0.5px] '></div>
                        </div>

                        <div className='max-w-[270px] mt-7 flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#111111] '>Get insights from feedback to improve</h2>
                            <p className='text-[18px] text-[#7E8492] font-semibold '  > Utilizing Feedback Insights to Enhance Your Performance and Achieve Your Goals </p>
                        </div>
                    </section>


                    <section className='flex flex-col justify-between gap-5 border border-[#EDEDED] p-8 rounded-2xl  border-secondary'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-[18px] text-[#1D1E25] font-semibold  '>Task Progress</h3>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between text-[14px] font-semibold' ><h6>Copywriting</h6> <span>5/10</span> </div>
                                <div className='relative'>
                                    <div className='bg-[#45C646] w-50 h-2 rounded absolute'> </div>
                                    <div className='bg-[#45C6461F] w-full h-2 rounded '> </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between text-[14px] font-semibold' ><h6>Illustration</h6> <span>4/7</span> </div>
                                <div className='relative'>
                                    <div className='bg-[#008EFF] w-57 h-2 rounded absolute'> </div>
                                    <div className='bg-[#008EFF1F] w-full h-2 rounded '> </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between text-[14px] font-semibold' ><h6>UX Design</h6> <span>3/8</span> </div>
                                <div className='relative'>
                                    <div className='bg-[#FFC947] w-34 h-2 rounded absolute'> </div>
                                    <div className='bg-[#FFC9471F] w-full h-2 rounded '> </div>
                                </div>
                            </div>
                        </div>

                        <div className='max-w-[270px] mt-7 flex flex-col gap-5'>
                            <h2 className='text-2xl font-bold text-[#111111] '>Review your hard work's outcome</h2>
                            <p className='text-[18px] text-[#7E8492] font-semibold '  > Analyzing Your Hard Work's Outcome: The Key to Continued Growth and Success  </p>
                        </div>
                    </section>

                </div>
            </div>

        </section>
    )
}

export default OurUserFriendlyComponent