'use client'

import React from 'react'
import '../../app/globals.css'
import Image from 'next/image'
import { motion } from 'motion/react'
import Cards from './Cards'
import Crypto from './Crypto'

const Partner = () => {
    return (
        <div className='giest w-full flex flex-col items-center gap-10 bg-black-400 mt-16 bg-gradient-to-t from-purple-400/10 via-purple-200/10 to-purple-100/10'>
            <p className='text-xs text-neutral-400 geist p-1'>Trusted by Beloved partners and customers</p>
            <div className='text-center holder flex flex-col gap-10 overflow-hidden justify-center items-center'>
                <div className='relative overflow-hidden [mask-image:linear-gradient(to_right, transparent, black)]'>
                    <motion.div
                        animate={{
                            translateX: '-100%'
                        }}
                        transition={{
                            duration: 8,
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

                </div>

                <div>
                    <p className='text-xl lg:text-2xl mt-10 text-neutral-600 font-medium lg:max-w-4xl'>Unlock the Full Potential of <br /> Your Crypto Experience</p>
                </div>
                <Cards />
                <Crypto />
            </div>

        </div>
    )
}

export default Partner