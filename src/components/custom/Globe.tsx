'use client'
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useCallback } from 'react';

export default function Globe() {
    const splineRef = useRef(null);

    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    // Preload and optimize Spline events
    const onLoad = useCallback((spline: any) => {
        splineRef.current = spline;

        // Optimize rendering settings
        if (spline && spline.renderer) {
            // Reduce quality for better performance
            spline.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Enable hardware acceleration
            spline.renderer.powerPreference = "high-performance";
        }
    }, []);

    return (
        <motion.main
            className='md:w-[100vw] w-[100vw] h-[100vh] mt-10'
            // Optimize motion transforms
            style={{
                willChange: 'transform',
                transform: 'translateZ(0)', // Force hardware acceleration
                y: parallax
            }}
        >
            <div
                className='h-full w-full'
                style={{
                    // Enable GPU acceleration
                    backfaceVisibility: 'hidden',
                    perspective: '1000px',
                    // Reduce repaints
                    willChange: 'transform'
                }}
                onWheel={(e) => e.preventDefault()} // Prevent scroll zoom
            >
                <Spline
                    scene="https://prod.spline.design/S07urrNygLtpLNsJ/scene.splinecode"
                    onLoad={onLoad}
                    // Performance optimizations
                    renderOnDemand={true}
                    style={{
                        width: '100%',
                        height: '100%',
                        // Improve rendering performance
                        // Reduce layout shifts
                        contain: 'layout style paint'
                    }}
                />
            </div>
        </motion.main>
    );
}