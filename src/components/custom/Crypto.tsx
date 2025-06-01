import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

function Crypto() {
    return (
        <>
            <div className='geist w-full p-4 flex flex-col items-center justify-center gap-1'>
                <p className='text-xl lg:text-4xl md:text-3xl text-neutral-600 font-medium lg:max-w-4xl'>All the chains that matter in one place</p>
                <p className='text-sm text-neutral-400 lg:max-w-sm'>Simplify your crypto experience with access to all key blockchains in a single,
                    easy-to-use platform tailored for seamless navigation and growth.
                </p>

                <div className='flex items-center md:gap-8 gap-2 mt-6 p-3'>
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.2 }} className='cursor-pointe2' src='/bitcoin.png' alt="crypto-logo" width={40} height={40} />
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: -10 }} transition={{ duration: 0.2 }} className='cursor-pointe2' src='/ethereum.png' alt="crypto-logo" width={40} height={40} />
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.2 }} className='cursor-pointe2' src='/dogecoin.png' alt="crypto-logo" width={40} height={40} />
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: -10 }} transition={{ duration: 0.2 }} className='cursor-pointe2' src='/solana.png' alt="crypto-logo" width={40} height={40} />
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.2 }} className='cursor-pointe2' src='/tron.png' alt="crypto-logo" width={40} height={40} />
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.1, rotate: -10 }} transition={{ duration: 0.2 }} className='cursor-pointe2' src='/xrp.png' alt="crypto-logo" width={40} height={40} />
                </div>

                <div className='mt-4 mb-16'>
                    <button className='px-3 py-2 text-neutral-100 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-purple-950'>Explore more</button>
                </div>
            </div>
        </>
    )
}

export default Crypto