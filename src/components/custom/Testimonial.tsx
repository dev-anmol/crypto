import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import AnimationTestimonials from './AnimationTestimonials'

function Testimonial() {
    return (
        <div className='geist w-full mt-20 flex justify-center'>
            <div className='holder flex flex-col gap-4 items-center'>
                <div className='w-full flex items-center justify-center'>
                    <p className='px-2 py-1 text-xs border border-neutral-200 rounded-xl w-fit bg-white text-neutral-900 font-medium'>Testimonials</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <p className='font-bold geist text-center w-full md:text-5xl text-4xl bg-gradient-to-b from-indigo-800 to-indigo-950 inline-block text-transparent bg-clip-text'>What our users say</p>
                    <p className='text-md text-indigo-900 text-center max-w-[300px]'>From intuitive design to powerful, our app has become an essential tool for users around the world.</p>
                </div>

                {/* testimonails */}
                <AnimationTestimonials />


                <div className='flex flex-col items-center justify-center gap-3 mt-10'>
                    <p className='font-bold geist text-center w-full text-4xl bg-gradient-to-b from-indigo-800 to-indigo-950 inline-block text-transparent bg-clip-text'>Sign up for free today</p>
                    <p className='text-md text-indigo-900 text-center max-w-[300px]'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                </div>

                <div className='flex items-center gap-6'>
                    <button className='px-3 py-2 text-white bg-black rounded-lg text-xs'>Get for free</button>
                    <div className='flex items-center gap-1'>
                        <button className='text-sm text-neutral-900'>Learn more</button>
                        <ArrowRightIcon className='h-3 w-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial