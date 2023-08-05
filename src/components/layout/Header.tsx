import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../../assets/profile-img.png";
import { LogoText } from "../ui/logoText";

export const Header = () => {
  return (
    <div className="Header w-[1440px] h-[102px] relative">
      <div className="TopBar w-[1440px] h-9 left-0 top-0 absolute">
        <div className="Shape w-[1440px] h-9 left-0 top-0 absolute bg-slate-50" />
        <div className="Language w-[65px] h-4 left-[1240px] top-[10px] absolute">
          <div className="Chevron w-3.5 h-3.5 left-[65px] top-[1px] absolute origin-top-left rotate-90 flex-col justify-start items-start inline-flex" />
          <div className="Language w-[45px] h-4 left-0 top-0 absolute text-right text-stone-500 text-[12px] font-normal">
            English
          </div>
        </div>
        <div className="LiveLocation w-[217px] h-4 left-[135px] top-[10px] absolute">
          <div className="Title w-[71px] h-4 left-0 top-0 absolute text-stone-500 text-[12px] font-normal">
            My location
          </div>
          <div className="LiveLocation w-[134px] h-4 left-[83px] top-0 absolute">
            <div className="MapPin w-3.5 h-3.5 left-0 top-[1px] absolute flex-col justify-start items-start inline-flex" />
            <div className="LocationDetails w-[114px] h-4 left-[20px] top-0 absolute text-stone-500 text-[12px] font-semibold">
              Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
      <div className="MainNavBar w-[1440px] h-[66px] left-0 top-[36px] absolute">
        <div className="Shape w-[1440px] h-[66px] left-0 top-0 absolute bg-slate-50" />
        <div className="MainNavigation w-[341px] h-4 left-[319.80px] top-[25px] absolute">
          <div className="GenderCategory w-[67px] h-4 left-0 top-0 absolute">
            <div className="Chevron w-3.5 h-3.5 left-[67px] top-[1px] absolute origin-top-left rotate-90 flex-col justify-start items-start inline-flex" />
            <div className="Title left-0 top-0 absolute text-right text-neutral-800 text-[13px] font-normal">
              <Link href={"/category/female"}>Female</Link>
            </div>
          </div>
          <div className="GenderCategory w-[52px] h-4 left-[89px] top-0 absolute">
            <div className="Chevron w-3.5 h-3.5 left-[52px] top-[1px] absolute origin-top-left rotate-90 flex-col justify-start items-start inline-flex" />
            <div className="Title left-0 top-0 absolute text-right text-neutral-800 text-[13px] font-normal">
              <Link href={"/category/male"}>Male</Link>
            </div>
          </div>
          <div className="GenderCategory w-[49px] h-4 left-[163px] top-0 absolute">
            <div className="Chevron w-3.5 h-3.5 left-[49px] top-[1px] absolute origin-top-left rotate-90 flex-col justify-start items-start inline-flex" />
            <div className="Title left-0 top-0 absolute text-right text-neutral-800 text-[13px] font-normal">
              <Link href={"/category/kids"}>Kids</Link>
            </div>
          </div>
          <div className="Title left-[234px] top-0 absolute text-neutral-800 text-[13px] font-normal">
            <Link href={"/products"}>Popular Products</Link>
          </div>
        </div>
        <Link href={"/"}>
          <div className="Logo w-[134.80px] h-[23px] left-[135px] top-[21px] absolute">
            <div className="Ellipse w-[23px] h-[23px] left-0 top-0 absolute rounded-full border-2 border-neutral-800" />
            <div className="ml-8">
              <LogoText />
            </div>
          </div>
        </Link>
        <div className="Search w-[308px] h-9 left-[701px] top-[15px] absolute">
          <div className="Shape w-[308px] h-9 left-0 top-0 absolute bg-zinc-100 bg-opacity-20 rounded-lg border border-zinc-100" />
          <div className="WhatYouLookingFor left-[36.80px] top-[10px] absolute text-stone-300 text-[13px] font-normal">
            What you looking for
          </div>
          <div className="Search w-4 h-4 left-[14.80px] top-[10px] absolute" />
        </div>
        <div className="Profile w-[163px] h-9 left-[1088px] top-[15px] absolute">
          <Image
            className="Image w-14 h-14 justify-center left-[127px] top-0 absolute rounded-full shadow border border-white"
            src={profileImg}
            alt="Prfile image"
          />
          <div className="Greetings left-[75px] top-[1px] absolute text-right text-stone-500 text-[13px] font-semibold">
            Hello
          </div>
          <div className="UserName left-0 top-[17px] absolute text-right text-neutral-800 text-[14px] font-bold">
            Evelyn Andreas
          </div>
        </div>
        <div className="Chart w-9 h-9 left-[1269px] top-[15px] absolute">
          <div className="Image w-9 h-9 left-0 top-0 absolute bg-zinc-100 bg-opacity-20 rounded-full border border-zinc-100">
          <ShoppingCart />
          </div>
        </div>
      </div>
      <div className="Frame1 w-[100px] h-[100px] left-[26px] top-[-6px] absolute" />
    </div>
  );
};
