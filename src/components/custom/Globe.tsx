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
            style={{
                y: parallax
            }}
        >
            <div
                className='holder flex items-center justify-center'
            >
                <Image src="/landing3.webp" alt="globe" width={1000} height={1000} className='rounded-xl' />
            </div>
        </motion.main>
    );
}