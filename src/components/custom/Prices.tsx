import React from 'react'

const Prices = () => {
    return (
        <div className='h-screen geist bg-neutral-50/40 flex justify-center pt-16'>
            <div className='holder flex flex-col items-center gap-14'>
                <div className='flex flex-col items-center justify-center gap-4 w-[70%]'>
                    <p className='font-bold geist text-center w-full text-4xl bg-gradient-to-b from-purple-600 to-indigo-950 inline-block text-transparent bg-clip-text'>Pricing</p>
                    <p className='text-md text-indigo-700 text-center'>Free forever, Upgrade for unlimited tasks, better security, and exclusive features.</p>
                </div>

                <div className='flex flex-col lg:flex-row gap-4 items-center justify-center'>
                    <div><Card /></div>
                    <div>Card 2</div>
                    <div>Card 3</div>
                </div>
            </div>
        </div>
    )
}

export const Card = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg giest min-w-[300px] border border-neutral-100'>
            Card-1
            <p className='text-neutral-400 text-sm'>Free</p>
            <div>
                <span className='text-3xl font-bold text-black'>$0</span><span className='text-neutral-400 text-sm'>/month</span>
            </div>
        </div>
    )
}

export default Prices