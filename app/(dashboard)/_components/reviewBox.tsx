import Image from 'next/image'
import React from 'react'
import bella from "@/public/bella.png"
import { Star } from 'lucide-react'

interface ReviewBoxProps {
    author: string,
    authorImage: string,
    title: string,
    body: string,
    rating: number
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
    author, authorImage, title, body, rating
}) => {
  const remainingStars = 5 - rating;
  return (
    <div className='bg-white rounded-xl shadow-sm shadow-black/40 px-5 py-4 flex flex-col'>
      <div className='flex gap-3 items-center'>
        <Image src={bella} alt='profile pic' width={50} height={50} className='rounded-full border-black/70 border-[3px]'/>
        <div className='flex flex-col'>
          <span className='font-semibold text-sm text-gray-900'>
            {author}
          </span>
          <div className='flex'>
            {
              new Array(rating).fill('').map((_, index) => {
                return <Star fill='#000' className='text-sm' size={20} key={index}/>
              })
            }
            {
              new Array(remainingStars).fill('').map((_, index) => {
                return <Star fill='#fff' className='text-sm' size={20} key={index}/>
              })
            }
          </div>
        </div>
      </div>

      <span className='font-bold text-xl mt-2 underline'>
        {title}
      </span>

      <span className=''>
        {body}
      </span>
    </div>
  )
}

export default ReviewBox