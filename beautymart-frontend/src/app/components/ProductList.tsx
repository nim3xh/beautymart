import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test"  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/32577893/pexels-photo-32577893.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/29524087/pexels-photo-29524087.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
        </div>
         <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">LKR 1000</span>
          </div>
          <div className="text-sm text-gray-500">
            My Description
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-[#F35c7A] hover:text-white">
            Add to Cart
          </button>
      </Link>
      <Link href="/test"  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/32577893/pexels-photo-32577893.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/29524087/pexels-photo-29524087.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
        </div>
         <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">LKR 1000</span>
          </div>
          <div className="text-sm text-gray-500">
            My Description
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-[#F35c7A] hover:text-white">
            Add to Cart
          </button>
      </Link>
      <Link href="/test"  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/32577893/pexels-photo-32577893.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/29524087/pexels-photo-29524087.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
        </div>
         <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">LKR 1000</span>
          </div>
          <div className="text-sm text-gray-500">
            My Description
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-[#F35c7A] hover:text-white">
            Add to Cart
          </button>
      </Link>
      <Link href="/test"  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/32577893/pexels-photo-32577893.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/29524087/pexels-photo-29524087.jpeg"
                alt=""
                sizes="25vw"
                fill
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
        </div>
         <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">LKR 1000</span>
          </div>
          <div className="text-sm text-gray-500">
            My Description
          </div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-[#F35c7A] hover:text-white">
            Add to Cart
          </button>
      </Link>
    </div>
  );
}

export default ProductList;