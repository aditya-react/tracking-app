import React from 'react'
import './index.css'
import TrackingDetails from '../TrackingDetails';


const TrackInfo = () => {
    return (
        <div className='mt-12 bg-[#e9f6ff] p-4 rounded-lg py-6 border border-gray-300'>
            <TrackingDetails dateTime={"1 August 2023, 10:00 AM"} message={"Order received"}/>
            <TrackingDetails dateTime={"2 August 2023, 12:00 PM"} message={"Ready to Dispatch"}/>
            <TrackingDetails dateTime={"4 August 2023, 10:00 AM"} message={"Shipped"}/>
            <TrackingDetails dateTime={"6 August 2023, 01:00 PM"} message={"Delivered"} trackEnd/>

        </div>
    )
}

export default TrackInfo