'use client'
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Globe() {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <motion.main
            className='mt-40 flex items-center justify-center'
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            style={{
                y: parallax
            }}
        >
            <div
                className='holder flex items-center justify-center shadow-2xl'
            >
                <Image src="/landing3.webp" alt="globe" width={1000} height={1000} className='rounded-xl' />
            </div>
        </motion.main>
    );
}