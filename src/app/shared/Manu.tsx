import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
      <Link href={"/category/female"}>Female</Link>
      <Link href={"/category/male"}>Male</Link>
      <Link href={"/category/kids"}>Kids</Link>
      <Link href={"/products"}>All Products</Link>
    </div>
  );
};

export default Menu;