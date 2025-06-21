"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const Navicons = () => {
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const router = useRouter();
    const isLoggedin = false;

    const handleProfile = () => {
       if(!isLoggedin) {
           router.push("/login");
       }
       setIsProfileOpen((prev) => !prev);
    };
    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="Profile icon" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {isProfileOpen &&  <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
                    <Link href="/">Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>}
            <Image src="/notification.png" alt="Wishlist icon" width={22} height={22} className="cursor-pointer"/>
            <div className="relative cursor-pointer">
                <Image src="/cart.png" alt="Cart icon" width={22} height={22} className="cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}/>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#F35c7A] rounded-full  text-white text-sm flex items-center justify-center">2</div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    )
}
export default Navicons;
