import { Menu } from "lucide-react";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const MobileSidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent
                side={'left'}
                className="p-0"
            >
                {/* <Sidebar /> */}
                <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
                    <div className="p-6">
                        <Logo />
                    </div>
                    <div className="flex flex-col w-full">
                        <SheetClose>
                            <SidebarRoutes />
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
     );
}
 
export default MobileSidebar;