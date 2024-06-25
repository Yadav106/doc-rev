"use client"

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const Reviews = () => {
    const { isSignedIn, user } = useUser()

    if (!isSignedIn) {
        return null
    }

    return ( 
        <div>
            {user.imageUrl}
            <Image
                src={user.imageUrl}
                height={100}
                width={100}
                alt="user image"
            />
        </div>
     );
}
 
export default Reviews;