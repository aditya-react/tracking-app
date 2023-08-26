import React from 'react'
import { FaShareAlt } from 'react-icons/fa';

const CourierInfo = () => {
    return (
        <div className='grid grid-cols-12 border border-gray-300 rounded-md p-4'>
            <div className='col-span-10 inline-grid gap-6'>
                <p>Courier: Delhivery</p>
                <p>Tracking ID: 28449338251884</p>
                <p>Order ID: TSC-13666971-5104767-
                    1-1</p>
                <p>Last Updated: <span className='text-[#337e5e]'>Ready to Dispatch</span> on
                    16th Aug, 10:32pm</p>
            </div>
            <div className='col-span-2 w-full'>
            <FaShareAlt size={48} className='text-center w-full'/> 
            </div>
        </div>
    )
}

export default CourierInfo