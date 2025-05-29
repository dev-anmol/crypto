import Prices from '@/components/custom/Prices'
import React from 'react'
import Testimonials from './Testimonials'

const Pricing = () => {
    return (
        <div className='bg-gradient-to-t from-purple-200/10 via-purple-100/10 to-purple-100/10'>
            <Prices />
            <Testimonials />
        </div>
    )
}

export default Pricing