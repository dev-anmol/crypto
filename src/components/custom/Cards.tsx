import { FolderIcon, LockClosedIcon, ServerStackIcon } from '@heroicons/react/24/solid'
import { motion, useScroll, useTransform } from 'motion/react'
import React, { useRef } from 'react'

const Cards = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

    return (
        <div ref={ref} className=' geist mt-4 flex flex-col md:flex-row lg:flex-row gap-4 py-8'>
            {
                cards.map((card, idx) => (
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.02
                        }}
                        style={{ opacity }}
                        transition={{ duration: 0.3 }}
                        key={idx} className='cursor-pointer z-50 bg-white flex flex-col items-center justify-center gap-2 w-[200px] border border-neutral-200 p-8 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]'>
                        <div className='h-10 w-10 text-neutral-500'>{card.image}</div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-sm text-neutral-700'>{card.heading}</p>
                            <p className='text-xs text-neutral-400 font-light'>{card.subHeading}</p>
                        </div>

                    </motion.div>
                ))
            }
        </div>
    )
}

type CardItem = {
    image: React.ReactNode,
    heading: string,
    subHeading: string
}

const cards: CardItem[] = [{
    image: <LockClosedIcon />,
    heading: 'Security You Can Trust',
    subHeading: 'Industry-leading encryption keeps your assests and data secure',
}, {
    image: <FolderIcon />,
    heading: 'Seamless Accessiblity',
    subHeading: 'Easily manage your investments on any device, anytime.',
}, {
    image: <ServerStackIcon />,
    heading: 'Real-Time Data & Insights',
    subHeading: 'Stay informed with live market data confident decisions.',
},]

export default Cards