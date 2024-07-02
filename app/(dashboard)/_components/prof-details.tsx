"use client";

import React, { useEffect, useState } from 'react'
import { MapPinIcon, BriefcaseMedicalIcon, Phone, Mail } from "lucide-react"
import axios from 'axios';
import ReviewBox from './reviewBox';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface ReviewProps {
    id: string,
    authorId: string,
    authorImage: string,
    authorName: string,
    title: string,
    body: string,
    rating: number
}

const ProfessionalDetails = () => {
    const location = "Somewhere in Russia";
    const experience = "Graduated from Russia's top medical school";
    const phone = "+7 1234 5678";
    const mail = "bella@gmail.com";

    const router = useRouter();

    const [reviews, setReviews] = useState<ReviewProps[]>([])

    useEffect(() => {
        async function getReviews() {
            const reviewResponse = await axios.get('/api/reviews')
            const reviewData = reviewResponse?.data?.reviews
            if (reviewData.length > 2) {
                setReviews([reviewData[0], reviewData[1]])
            } else {
                setReviews(reviewData)
            }
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
                {/* <div className='bg-gray-300/80 p-3 px-5 rounded-xl'>
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
                </div> */}

                <div className='flex flex-col gap-2 mt-6'>
                    <span className='font-semibold text-[30px] text-gray-600 underline'>
                        About the doctor
                    </span>
                    <div className='flex flex-col gap-5 p-4 bg-gray-300/80 rounded-xl'>
                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Name : </span>
                            <span className='font-semibold ml-5'>{`Salsabila Bajaber (aka Bella Bee)`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Age : </span>
                            <span className='font-semibold ml-5'>{`24 years, or the equivalent of a Russian grandmother`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Passion : </span>
                            <span className='font-semibold ml-5'>{`Reading, Writing, Threatening`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Extra-curricular activities : </span>
                            <span className='font-semibold ml-5'>{`Tax Evasion & Organ Smuggling`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Favourite Pastime : </span>
                            <span className='font-semibold ml-5'>{`Hobnobbing with Mafia members`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Accepted payments : </span>
                            <span className='font-semibold ml-5'>{`Dollars, Bitcoin & Hideo Kojima Memorabilia`}</span>
                        </div>
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
                {/* <div className='flex flex-col gap-1'>
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
                </div> */}
                <div className='flex flex-col gap-2 mt-6'>
                    <span className='font-semibold text-[30px] text-gray-600 underline'>
                        About the doctor
                    </span>
                    <div className='flex flex-col gap-5 p-4 bg-gray-300/80 rounded-xl'>
                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Name : </span>
                            <span className='font-semibold ml-5'>{`Salsabila Bajaber (aka Bella Bee)`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Age : </span>
                            <span className='font-semibold ml-5'>{`24 years, or the equivalent of a Russian grandmother`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Passion : </span>
                            <span className='font-semibold ml-5'>{`Reading, Writing, Threatening`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Extra-curricular activities : </span>
                            <span className='font-semibold ml-5'>{`Tax Evasion & Organ Smuggling`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Favourite Pastime : </span>
                            <span className='font-semibold ml-5'>{`Hobnobbing with Mafia members`}</span>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-gray-700'>Accepted payments : </span>
                            <span className='font-semibold ml-5'>{`Dollars, Bitcoin & Hideo Kojima Memorabilia`}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-3 mt-[20px]'>
                    <Button variant='ghost' className='mb-4' onClick={() => router.push('/reviews')}>
                        Read Reviews
                    </Button>
                </div>  
            </div>
        </div>
    )
}

export default ProfessionalDetails