import React from 'react'
import { CheckIcon } from '@heroicons/react/16/solid'

const Prices = () => {
    return (
        <div className='h-screen geist bg-neutral-50/40 flex justify-center pt-16'>
            <div className='holder flex flex-col items-center gap-14'>
                <div className='flex flex-col items-center justify-center gap-4 w-[70%]'>
                    <p className='font-bold geist text-center w-full text-4xl bg-gradient-to-b from-purple-600 to-indigo-950 inline-block text-transparent bg-clip-text'>Pricing</p>
                    <p className='text-md text-indigo-700 text-center'>Free forever, Upgrade for unlimited tasks, better security, and exclusive features.</p>
                </div>

                <div className='flex flex-col lg:flex-row gap-6 items-center justify-center'>
                    <div><FreeCard /></div>
                    <div><ProCard /></div>
                    <div><BusinessCard /></div>
                </div>
            </div>
        </div>
    )
}

export const FreeCard = () => {
    return (
        <div className='bg-white rounded-2xl shadow-lg giest min-w-[250px] border border-neutral-100 flex flex-col items-center py-10 px-2 gap-8'>
            <div className='w-[80%] flex flex-col gap-5'>
                <p className='text-neutral-400 text-sm'>Free</p>
                <div>
                    <span className='text-3xl font-bold text-black'>$0</span><span className='text-neutral-400 text-sm'>/month</span>
                </div>
                <button className='w-full rounded-md text-xs bg-black text-white py-2 hover:bg-black/90 transition-colors duration-300'>Get started for free</button>
            </div>

            <div className='w-[80%] flex flex-col gap-5 text-xs font-medium text-neutral-800'>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p> Up to 5 project members</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Unlimited tasks and projects</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>2GB storage</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Integrations</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Basic support</p>

                </div>
            </div>
        </div>
    )
}

export const ProCard = () => {
    return (
        <div className='bg-white rounded-2xl shadow-lg giest min-w-[250px] border border-neutral-100 flex flex-col items-center py-10 px-2 gap-8'>
            <div className='w-[80%] flex flex-col gap-5'>
                <p className='text-neutral-400 text-sm'>Free</p>
                <div>
                    <span className='text-3xl font-bold text-black'>$0</span><span className='text-neutral-400 text-sm'>/month</span>
                </div>
                <button className='w-full rounded-md text-xs bg-black text-white py-2 hover:bg-black/90 transition-colors duration-300'>Get started for free</button>
            </div>

            <div className='w-[80%] flex flex-col gap-5 text-xs font-medium text-neutral-800'>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p> Up to 5 project members</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Unlimited tasks and projects</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>2GB storage</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Integrations</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Basic support</p>

                </div>
            </div>
        </div>
    )
}

export const BusinessCard = () => {
    return (
        <div className='bg-white rounded-2xl shadow-lg giest min-w-[250px] border border-neutral-100 flex flex-col items-center py-10 px-2 gap-8'>
            <div className='w-[80%] flex flex-col gap-5'>
                <p className='text-neutral-400 text-sm'>Free</p>
                <div>
                    <span className='text-3xl font-bold text-black'>$0</span><span className='text-neutral-400 text-sm'>/month</span>
                </div>
                <button className='w-full rounded-md text-xs bg-black text-white py-2 hover:bg-black/90 transition-colors duration-300'>Get started for free</button>
            </div>

            <div className='w-[80%] flex flex-col gap-5 text-xs font-medium text-neutral-800'>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p> Up to 5 project members</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Unlimited tasks and projects</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>2GB storage</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Integrations</p>

                </div>
                <div className='flex flex-row gap-2'>
                    <CheckIcon className='h-4 w-4' /><p>Basic support</p>

                </div>
            </div>
        </div>
    )
}


export default Prices