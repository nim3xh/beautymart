"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}/>
            {
                open && (
                    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                        <Link href="/">Homepage</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/login">Logout</Link>
                        <Link href="/cart">Cart(1)</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu;
