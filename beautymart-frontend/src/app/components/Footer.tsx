import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide font-bold text-pink-600">BeautyMart</div>
          </Link>
          <p>
            No. 55, Galle Road, Colombo 03, Sri Lanka
          </p>
          <span className="font-semibold">support@beautymart.lk</span>
          <span className="font-semibold">+94 77 123 4567</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliates">Affiliates</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/products?category=moisturizers">Moisturizers</Link>
              <Link href="/products?category=face-care">Face Care</Link>
              <Link href="/products?category=hair-care">Hair Care</Link>
              <Link href="/products?category=body-care">Body Care</Link>
              <Link href="/products">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/account">My Account</Link>
              <Link href="/shipping">Shipping Info</Link>
              <Link href="/returns">Returns & Refunds</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Get exclusive offers and the latest beauty trends delivered to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="p-4 w-3/4 border border-gray-300"
            />
            <button className="w-1/4 bg-pink-500 text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>© {new Date().getFullYear()} BeautyMart.lk</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Sri Lanka | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">LKR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
