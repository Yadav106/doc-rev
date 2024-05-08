"use client";

import { Layout, Star } from "lucide-react";
import SidebarItem from "./sidebar-item";

const routes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: '/'
    },
    {
        icon: Star,
        label: "Reviews",
        href: '/reviews'
    }
]

const SidebarRoutes = () => {
    return ( 
        <div>
            {routes.map(route => (
                <SidebarItem
                    key={route.label}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
     );
}
 
export default SidebarRoutes;