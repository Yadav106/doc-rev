"use client";

import React, { useEffect, useState } from 'react'
import { MapPinIcon, BriefcaseMedicalIcon, Phone, Mail } from "lucide-react"
import axios from 'axios';
import ReviewBox from './reviewBox';

interface ReviewProps {
    id: string,
    authorImage: string,
    author: string,
    title: string,
    body: string,
    rating: number
}

const ProfessionalDetails = () => {
    const location = "Somewhere in Russia";
    const experience = "Graduated from here";
    const phone = "+1 2345 6789";
    const mail = "bella@gmail.com";

    const [reviews, setReviews] = useState<ReviewProps[]>([])

    useEffect(() => {
        async function getReviews() {
            const reviewResponse = await axios.get('/api/reviews')
            const reviewData = reviewResponse?.data?.reviews
            console.log(reviewData)
            setReviews(reviewData)
        }

        getReviews();
    }, [])

    return (
        <div className='flex flex-col px-10 gap-1'>
            <div className='flex flex-col gap-2 justify-around md:hidden'>
                <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                    <p className='underline text-sm'>Location</p>
                    <div className='flex items-baseline gap-2'>
                        <MapPinIcon width={40}/>
                        <p className="mt-2 flex font-bold text-3xl">{location}</p>
                    </div>
                </div>
                <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                    <p className='underline text-sm'>Experience</p>
                    <div className='flex items-baseline gap-2'>
                        <BriefcaseMedicalIcon width={40}/>
                        <p className="mt-2 flex font-bold text-3xl">{experience}</p>
                    </div>
                </div>
                <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                    <p className='underline text-sm'>Phone</p>
                    <div className='flex items-baseline gap-2'>
                        <Phone width={40}/>
                        <p className="mt-2 flex font-bold text-3xl">{phone}</p>
                    </div>
                </div>
                <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                    <p className='underline text-sm'>Mail</p>
                    <div className='flex items-baseline gap-2'>
                        <Mail width={40}/>
                        <p className="mt-2 flex font-bold text-3xl">{mail}</p>
                    </div>
                </div>
            </div>

            <div className='gap-1 hidden md:flex md:flex-col'>
                <div className='gap-1 hidden md:flex'>
                    <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                        <p className='underline text-sm'>Location</p>
                        <div className='flex items-baseline gap-2'>
                            <MapPinIcon width={40}/>
                            <p className="mt-2 flex font-bold text-3xl">{location}</p>
                        </div>
                    </div>
                    <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                        <p className='underline text-sm'>Experience</p>
                        <div className='flex items-baseline gap-2'>
                            <BriefcaseMedicalIcon width={40}/>
                            <p className="mt-2 flex font-bold text-3xl">{experience}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                        <p className='underline text-sm'>Phone</p>
                        <div className='flex items-baseline gap-2'>
                           <Phone width={40}/> 
                            <p className="mt-2 flex font-bold text-3xl">{phone}</p>
                        </div>
                    </div>
                    <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
                        <p className='underline text-sm'>Mail</p>
                        <div className='flex items-baseline gap-2'>
                            <Mail width={40}/>
                            <p className="mt-2 flex font-bold text-3xl">{mail}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className='font-bold text-[30px] underline mt-[2rem]'>
                    Reviews
                </p>
                
                {
                    reviews.length > 0 
                    ?
                    reviews.map(review => {
                        return <ReviewBox 
                            key={review.id} 
                            author={review.author} 
                            authorImage={review.authorImage}
                            title={review.title}
                            body={review.body}
                            rating={review.rating}
                        />
                    })
                    :
                    <div>Loading...</div>
                }
            </div>
        </div>
    )
}

export default ProfessionalDetails