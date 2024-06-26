"use client";

import Image from "next/image";
import bella from "@/public/bella.png"
import UserImage from "./user-image";
import { useState } from "react";

const NavbarRoutes = () => {
    const [showMore, setShowMore] = useState(false)
    return ( 
        <div className="flex gap-x-2 ml-auto">
            <UserImage showMore setShowMore={setShowMore}/>
        </div>
     );
}
 
export default NavbarRoutes;