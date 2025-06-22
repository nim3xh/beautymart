import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test">
        <Image src="https://images.pexels.com/photos/32577893/pexels-photo-32577893.jpeg" alt="" sizes="25vw" />
      </Link>
    </div>
  );
}

export default ProductList;