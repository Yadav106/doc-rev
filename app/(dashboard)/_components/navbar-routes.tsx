import { UserButton } from "@clerk/nextjs";

const NavbarRoutes = () => {
    return ( 
        <div className="flex gap-x-2 ml-auto">
            <UserButton 
                afterSignOutUrl="/sign-in"
            />
        </div>
     );
}
 
export default NavbarRoutes;