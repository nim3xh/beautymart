import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Navicons from "./Navicons";

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className="flex items-center justify-between md:hidden">
        {/*Mobile Screen*/}
        <Link href="/">
          <div className="text-2xl tracking-wide">BeautyMart</div>
        </Link>
        <Menu />
      </div>
      {/*Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href='/' className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24}/>
            <div className="text-2xl tracking-wide">BeautyMart</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <Navicons />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
