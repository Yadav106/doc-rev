"use client";

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

const AboutInfo = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <div className='bg-black p-1 rounded-full'>
        <Image 
          height={150}
          width={150}
          src={'/bella.png'}
          alt='Dr. Salsa'
          className='rounded-full'
        />
      </div>

      <p className='text-xl mt-1 font-bold'>
        Dr. Salsabila
      </p>

      <div className='flex mt-2 bg-gray-300/80 rounded-xl shadow-md p-2 px-5'>
        <Star fill='#000'/>
        <Star fill='#000'/>
        <Star fill='#000'/>
        <Star fill='#000'/>
        <Star fill='#000'/>
      </div>

      <Button title='Appointment' variant={'default'} className='mt-3 shadow-md shadow-slate-500' onClick={() => toast.success('Appointment Registered')}> 
        Get an appointment
      </Button>

      <div className='w-full mt-10'>
        <p className='text-justify'>
        {`Dr. Salsabila Bajaber specializes in being a good friend and saying "noice" a lot. She also is professionally trained in drinking soda (please don't try this at home on your own). Please contact Dr. Salsabila Bajaber's office today to set up an appointment, and her amazing assistant/apprentice/twin Totah will be happy to help you out!`}
        </p>
      </div>
    </div>
  )
}

export default AboutInfo