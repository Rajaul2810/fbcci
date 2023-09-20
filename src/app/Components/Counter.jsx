"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className=' bg-yellow-100'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
               
                <div className=' flex justify-center'>
                    <div className=' gap-5 w-full md:w-3/4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:h-56'>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {
                                    counterOn && <p className=' text-center text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={87} />+</p>
                                }
                                <p className='text-center text-black font-bold text-md'>Chambers</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {counterOn && <p className=' text-center text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={414} />+</p>
                                }
                                <p className='text-center text-black font-bold text-md'>Association</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {counterOn && <p className=' text-center text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={20} />+</p>
                                }
                                <p className='text-center text-black font-bold text-md'>Joint Chambers</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {counterOn && <p className=' text-center text-6xl text-teal-600 font-extrabold '><CountUp duration={8} end={2459} />+</p>
                                }
                                <p className='text-center text-black font-bold text-md'>G.B Members</p>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollTrigger>

        </div>
    )
}

export default Counter