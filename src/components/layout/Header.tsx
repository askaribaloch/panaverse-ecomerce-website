"use client"
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import Menu from "@/app/shared/Manu";
import { UserButton } from "@clerk/nextjs";
import { LogoText } from "../ui/logoText";

export const Header = ({ userId }: { userId: string }) => {
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-white shadow-md mb-4">
      <div className="flex justify-between items-center p-4 lg:px-12 max-w-screen-xl mx-auto">
        <div>
          <Link href={"/"}>
            <LogoText />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Menu />
        </div>
        <div className="lg:w-[30%] border border-gray-300 rounded-md px-2 bg-white hidden lg:flex items-center">
          <AiOutlineSearch size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none ml-2 w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <Link href={"/cart"} onClick={handleNav}>
            <div className="relative group">
              <div className="w-10 h-10 bg-[#f1f1f1] rounded-full flex justify-center items-center">
                <AiOutlineShoppingCart size={25} />
              </div>
              {totalItems > 0 && (
                <span className="absolute bottom-1 left-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>
        <div className="lg:hidden">
          <AiOutlineMenu onClick={handleNav} size={25} />
        </div>
      </div>

      {/* Mobile Screen */}
      <div
        className={`${
          nav
            ? "block lg:hidden fixed top-0 left-0 h-full w-full z-50 bg-white p-4"
            : "hidden lg:hidden"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <Link href={"/"}>
              <LogoText />
            </Link>
          </div>
          <div>
            <TiDeleteOutline onClick={handleNav} size={30} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <Link href={"/cart"} onClick={handleNav}>
            <div className="relative group">
              <div className="w-12 h-12 bg-[#f1f1f1] rounded-full flex justify-center items-center">
                <AiOutlineShoppingCart size={25} />
              </div>
              {totalItems > 0 && (
                <span className="absolute bottom-2 left-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
          <span onClick={handleNav}>
            <Menu />
          </span>
        </div>
      </div>
    </nav>
  );
};
