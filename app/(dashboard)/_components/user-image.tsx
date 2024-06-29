"use client";

import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import defpic from "@/public/default.png"

interface UserImageProps {
    setShowMore: (state:boolean) => void,
    showMore: boolean
}

const UserImage:React.FC<UserImageProps> = ({
    setShowMore,
    showMore
}) => {
    const session = useSession();
    return (
        <div>
            <Image 
                src={session?.data?.user?.image || defpic}
                alt="profile"
                width={40}
                height={40}
                className='rounded-full cursor-pointer'
                onClick={() => setShowMore(!showMore)}
            />
        </div>
    )
}

export default UserImage