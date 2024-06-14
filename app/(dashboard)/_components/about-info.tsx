import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

      <Button title='Appointment' variant={'default'} className='mt-3 shadow-md shadow-slate-500'> 
        Get an appointment
      </Button>

      <div className='w-full mt-10'>
        <p>
          Info about Dr. Bella. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis lacus ut leo feugiat, a pretium elit sodales. Ut felis neque, venenatis id nisl sit amet, blandit rhoncus massa. Curabitur fringilla molestie viverra. Duis interdum dolor vestibulum eleifend mattis. Curabitur ac neque urna.
        </p>
      </div>
    </div>
  )
}

export default AboutInfo