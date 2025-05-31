import React from 'react'
import Image from 'next/image';
import "../../app/globals.css";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const Footer = () => {
    return (
        <div className='bg-[#020617] text-white/90 giest min-h-[20px] w-full mt-20 flex items-center justify-center'>
            <div className='holder flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-10 md:gap-4 items-center justify-center w-full p-8'>
                    <div className='flex items-center justify-center w-full'>
                        <Image alt="logo" src='/export.png' width={30} height={30} />
                    </div>

                    <div className='flex flex-col md:flex-row gap-4 items-center justify-center text-xs text-center'>
                        <a href='/' className='cursor-pointer'>About</a>
                        <a href='/' className='cursor-pointer'>Features</a>
                        <a href='/' className='cursor-pointer'>Customers</a>
                        <a href='/' className='cursor-pointer'>Pricing</a>
                        <a href='/' className='cursor-pointer'>Help</a>
                        <a href='/' className='cursor-pointer'>Careers</a>
                    </div>

                    <div className="flex justify-center gap-6 mt-6">
                        <Image
                            src={SocialX}
                            alt="Social X"
                            width={20}
                            height={20}
                            className='brightness-0 invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer'
                        />
                        <Image
                            src={SocialLinkedIn}
                            alt="LinkedIn"
                            width={20}
                            height={20}
                            className='brightness-0 invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer'
                        />
                        <Image
                            src={SocialInsta}
                            alt="Instagram"
                            width={20}
                            height={20}
                            className='brightness-0 invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer'
                        />
                        <Image
                            src={SocialPin}
                            alt="Pinterest"
                            width={20}
                            height={20}
                            className='brightness-0 invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer'
                        />
                        <Image
                            src={SocialYoutube}
                            alt="YouTube"
                            width={20}
                            height={20}
                            className='brightness-0 invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer'
                        />
                    </div>

                    <div>
                        <p className="mt-6 text-xs">&copy; 2024 Your Company, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer