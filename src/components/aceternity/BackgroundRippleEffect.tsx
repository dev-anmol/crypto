"use client";
import { cn } from "@/utils/cn";
import { motion, useAnimation, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "../../app/globals.css";
import Globe from "../custom/Globe";
import NavBar from "../custom/NavBar";

const subText = "Access reliable data, detailed insights, and intuitive tools to make informed investment decisions — anytime, anywhere."

export const BackgroundCellAnimation = () => {

    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const parallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])
    const blur = useTransform(scrollYProgress, [0.6, 1], [0, 10])

    return (
        <>
            <div className={`geist relative bg-slate-950 flex items-center flex-col overflow-hidden w-full`}>
                {/* <BackgroundCellCore /> */}
                <div className="holder flex flex-col justify-center items-center w-full">
                    {/* Header Section */}
                    <div className="flex text-center flex-row items-center justify-between px-4 z-50 gap-6 lg:gap-80 md:gap-40 mt-10"
                    >
                        <div
                            className="rounded-full">
                            <motion.img
                                initial={{ opacity: 0, filter: `blur(10px)` }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.3 }}
                                src='/export.png'
                                alt="logo"
                                className="hidden md:inline-block z-50 mt-1 rounded-full max-h-[50px] max-w-[50px] md:max-h-[75px] md:max-w-[75px]"
                            />
                        </div>
                        <div className="flex-1 flex -mt-5">
                            <NavBar />
                        </div>
                    </div>

                    {/* Content Section */}
                    <motion.div ref={ref} style={{ y: parallax, opacity, scale, filter: useMotionTemplate`blur(${blur}px)` }} className="relative z-50 mt-28 pointer-events-none select-none flex flex-col gap-5">
                        {/* ... your existing content ... */}
                        <motion.h1 key={subText[0]} initial={{ opacity: 0, filter: `blur(10px)`, y: 5 }} animate={{ y: 0, opacity: 1, filter: `blur(0px)` }} transition={{ duration: 0.4 }} className="md:text-5xl text-4xl lg:text-6xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-neutral-500 pointer-events-none">
                            Monitor Crypto & Stocks Seamlessly <br />
                            in One Place.
                        </motion.h1>
                        <div className="w-full flex items-center justify-center">
                            <motion.p className="text-neutral-400/80 text-xs md:text-sm text-center md:max-w-xl lg:max-w-2xl max-w-xs">
                                {subText.split(" ").map((t: string, idx: number, arr: string[]) => (
                                    <motion.span
                                        className="inline-block"
                                        initial={{
                                            opacity: 0,
                                            filter: `blur(10px)`,
                                            scale: 0.8
                                        }}
                                        animate={{
                                            opacity: 1,
                                            filter: `blur(0px)`,
                                            scale: 1
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: idx * 0.1,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            filter: { duration: 0.8 },
                                            scale: { type: "spring", stiffness: 100, damping: 10 }
                                        }}
                                        key={idx}
                                    >
                                        {t}
                                        {idx < arr.length - 1 && '\u00A0'}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <button className="bg-gray-300 text-neutral-800 text-xs rounded-lg border-neutral-600 px-4 py-2 z-50">Learn more</button>
                            <button className="bg-purple-700 rounded-lg text-neutral-300 text-xs border-neutral-400 px-4 py-2 z-50">Get Started</button>
                        </div>
                    </motion.div>

                    <div>
                        <Globe />
                    </div>

                    <div className="[mask-image:linear-gradient(to_top,transparent,black_80%)] py-10 lg:w-[65%] w-[70%] flex gap-1 flex-col">
                        <p className="text-neutral-400 giest text-[18px] text-center">We're dedicated to making cryptocurrency accessible and secure for everyone.</p>
                        <p className="text-neutral-500 giest text-[18px] text-center">From beginners to experts, our mission is to provide you with tools and insights. That simplify digital finance, so you can invest confidently</p>
                        <p className="text-neutral-600 giest text-[18px] text-center">and make informed decisions in the fast-paced world of crypto</p>
                    </div>


                </div>
            </div>
        </>
    );
};

// const BackgroundCellCore = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     const ref = useRef<any>(null);

//     const handleMouseMove = (event: any) => {
//         const rect = ref.current && ref.current.getBoundingClientRect();
//         setMousePosition({
//             x: event.clientX - rect.left,
//             y: event.clientY - rect.top,
//         });
//     };

//     const size = 300;
//     return (
//         <div
//             ref={ref}
//             onMouseMove={handleMouseMove}
//             className="h-full absolute inset-0"
//         >
//             <div className="absolute h-[20rem] inset-y-0  overflow-hidden">
//                 <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
//                 <div
//                     className="absolute inset-0 z-20 bg-transparent"
//                     style={{
//                         maskImage: `radial-gradient(
//             ${size / 4}px circle at center,
//            white, transparent
//           )`,
//                         WebkitMaskImage: `radial-gradient(
//           ${size / 4}px circle at center,
//           white, transparent
//         )`,
//                         WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2
//                             }px`,
//                         WebkitMaskSize: `${size}px`,
//                         maskSize: `${size}px`,
//                         pointerEvents: "none",
//                         maskRepeat: "no-repeat",
//                         WebkitMaskRepeat: "no-repeat",
//                     }}
//                 >
//                     <Pattern cellClassName="border-blue-600 relative z-[100]" />
//                 </div>
//                 <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
//             </div>
//         </div>
//     );
// };

// const Pattern = ({
//     className,
//     cellClassName,
// }: {
//     className?: string;
//     cellClassName?: string;
// }) => {
//     const x = new Array(47).fill(0);
//     const y = new Array(30).fill(0);
//     const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
//     const [clickedCell, setClickedCell] = useState<any>(null);

//     return (
//         <div className={cn("flex flex-row  relative z-30", className)}>
//             {matrix.map((row, rowIdx) => (
//                 <div
//                     key={`matrix-row-${rowIdx}`}
//                     className="flex flex-col  relative z-20 border-b"
//                 >
//                     {row.map((column, colIdx) => {
//                         const controls = useAnimation();

//                         useEffect(() => {
//                             if (clickedCell) {
//                                 const distance = Math.sqrt(
//                                     Math.pow(clickedCell[0] - rowIdx, 2) +
//                                     Math.pow(clickedCell[1] - colIdx, 2)
//                                 );
//                                 controls.start({
//                                     opacity: [0, 1 - distance * 0.1, 0],
//                                     transition: { duration: distance * 0.2 },
//                                 });
//                             }
//                         }, [clickedCell]);

//                         return (
//                             <div
//                                 key={`matrix-col-${colIdx}`}
//                                 className={cn(
//                                     "bg-transparent border-l border-b border-neutral-600",
//                                     cellClassName
//                                 )}
//                                 onClick={() => setClickedCell([rowIdx, colIdx])}
//                             >
//                                 <motion.div
//                                     initial={{
//                                         opacity: 0,
//                                     }}
//                                     whileHover={{
//                                         opacity: [0, 1, 0.5],
//                                     }}
//                                     transition={{
//                                         duration: 0.5,
//                                         ease: "backOut",
//                                     }}
//                                     animate={controls}
//                                     className="bg-[rgba(14,165,233,0.3)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
//                                 ></motion.div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             ))}
//         </div>
//     );
// };


