'use client'

import React from 'react'
import '../../app/globals.css'
import Image from 'next/image'
import { motion } from 'motion/react'
import Cards from './Cards'

const Partner = () => {
    return (
        <div className='giest w-full flex flex-col items-center gap-10 bg-black-400 mt-16'>
            <p className='text-xs text-neutral-400 geist [mask-image:linear-gradient(to_right, transparent, black)] p-1'>Trusted by Beloved partners and customers</p>
            <div className='text-center holder flex flex-col gap-10 overflow-hidden justify-center items-center [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <motion.div
                    animate={{
                        translateX: '-50%'
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop'
                    }}

                    className='holder h-8 flex flex-none pr-14 gap-14'>
                    <Image alt="logos" width={400} height={400} src='/logo-acme.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-apex.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-celestial.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-echo.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-pulse.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-quantum.png' />

                    {/* second set of images */}
                    <Image alt="logos" width={400} height={400} src='/logo-acme.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-apex.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-celestial.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-echo.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-pulse.png' />
                    <Image alt="logos" width={400} height={400} src='/logo-quantum.png' />
                </motion.div>
                <div>
                    <p className='text-xl lg:text-2xl mt-10 text-neutral-600 font-medium lg:max-w-4xl'>Unlock the Full Potential of <br /> Your Crypto Experience</p>
                </div>
                <div>
                    <Cards />
                </div>
            </div>

        </div>
    )
}

export default Partner