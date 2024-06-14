import React from 'react'
import { MapPinIcon, BriefcaseMedicalIcon } from "lucide-react"

const ProfessionalDetails = () => {
  return (
    <div className='flex flex-col px-10 gap-7'>
        <div className='flex flex-col gap-5 justify-around'>
            <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                <p className='underline text-sm'>Location</p>
                <div className='flex items-baseline gap-2'>
                    <MapPinIcon width={40}/>
                    <p className="mt-2 flex font-bold text-3xl">Somewhere in Russia</p>
                </div>
            </div>
            <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                <p className='underline text-sm'>Experience</p>
                <div className='flex items-baseline gap-2'>
                    <BriefcaseMedicalIcon width={40}/>
                    <p className="mt-2 flex font-bold text-3xl">Graduated from here</p>
                </div>
            </div>
        </div>
        <div>
            Reviews
        </div>
    </div>
  )
}

export default ProfessionalDetails