import React from 'react'
import { FaRegCircle } from 'react-icons/fa';

const TrackingDetails = ({dateTime ,message, trackEnd}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='inline-grid justify-items-center col-span-2'>
                <FaRegCircle color='#8c8cc2' className='box-shadow w-fit rounded-lg' />
                {trackEnd ? '' : <div className='border-l-[1px] h-24 border-[#8c8cc2]'></div>}
            </div>
            <div className='inline-grid col-span-10 gap-3 h-fit'>
                <h4 className='font-bold'>{dateTime}</h4>
                <p className='text-gray-500'>{message}</p>
            </div>
        </div>
    )
}

export default TrackingDetails