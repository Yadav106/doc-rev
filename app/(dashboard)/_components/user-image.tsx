"use client";

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import defpic from "@/public/default.png"
import LogOutModal from './LogOutModal';

const UserImage = () => {
    const session = useSession();

    const [logoutModalOpen, setLogoutModalOpen] = useState(false)
    return (
        <div>
            <LogOutModal isOpen={logoutModalOpen} onClose={() => setLogoutModalOpen(false)}/>
            <Image 
                src={session?.data?.user?.image || defpic}
                alt="profile"
                width={40}
                height={40}
                className='rounded-full cursor-pointer'
                onClick={() => setLogoutModalOpen(true)}
            />
        </div>
    )
}

export default UserImage