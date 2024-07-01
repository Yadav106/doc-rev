"use client";

import Image from "next/image";
import bella from "@/public/bella.png"
import UserImage from "./user-image";
import { useState } from "react";

const NavbarRoutes = () => {
    return ( 
        <div className="flex gap-x-2 ml-auto">
            <UserImage />
        </div>
     );
}
 
export default NavbarRoutes;