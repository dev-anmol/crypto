import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='bg-black text-white/90 giest min-h-[300px] w-full mt-20'>
            <div className='holder'>
                footer
                <div>
                    <Image alt="logo" src='/logo.png' width={20} height={20} />
                </div>
            </div>
        </div>
    )
}

export default Footer