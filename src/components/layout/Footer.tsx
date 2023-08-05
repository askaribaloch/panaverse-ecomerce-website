import Link from "next/link";
import { LogoText } from "../ui/logoText";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="Footer w-[1440px] h-[336px] relative">
      <div className="Shape w-[1440px] h-[336px] left-0 top-0 absolute bg-white" />
      <div className="Menu w-[140px] h-[179px] left-[573px] top-[50px] absolute">
        <div className="PageList w-[140px] left-0 top-[39px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          About
        </div>
        <div className="PageList w-[140px] left-0 top-[69px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Terms of Use
        </div>
        <div className="PageList w-[140px] left-0 top-[99px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Privacy Policy
        </div>
        <div className="PageList w-[140px] left-0 top-[129px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          How it Works
        </div>
        <div className="PageList w-[140px] left-0 top-[159px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Contact Us
        </div>
        <div className="Title left-0 top-0 absolute text-stone-500 text-[15px] font-bold tracking-wide">
          Company
        </div>
      </div>
      <div className="Menu w-[140px] h-[119px] left-[869px] top-[50px] absolute">
        <div className="PageList w-[140px] left-0 top-[39px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Support Carrer
        </div>
        <div className="PageList w-[140px] left-0 top-[69px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          24h Service
        </div>
        <div className="PageList w-[140px] left-0 top-[99px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Quick Chat
        </div>
        <div className="Title left-0 top-0 absolute text-stone-500 text-[15px] font-bold tracking-wide">
          Support
        </div>
      </div>
      <div className="Menu w-[140px] h-[89px] left-[1165px] top-[50px] absolute">
        <div className="PageList w-[140px] left-0 top-[39px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Whatsapp
        </div>
        <div className="PageList w-[140px] left-0 top-[69px] absolute text-stone-500 text-[13px] font-normal leading-tight">
          Support 24
        </div>
        <div className="Title left-0 top-0 absolute text-stone-500 text-[15px] font-bold tracking-wide">
          Contact
        </div>
      </div>
      <div className="Copyright w-[1440px] h-[39px] left-0 top-[273px] absolute">
        <div className="Line w-[1440px] h-[0px] left-[1440px] top-0 absolute origin-top-left -rotate-180 border border-neutral-400 border-opacity-25"></div>
        <div className="Copyright2021DineMarket left-[135px] top-[24px] absolute text-stone-500 text-[12px] font-normal">
          Copyright © 2021 Dine Market
        </div>
        <div className="CreatedByWeirdDesignStudio left-[1105px] top-[24px] absolute text-right">
          <span className="text-stone-500 text-[12px] font-light">
            Created by.
          </span>
          <span className="text-stone-500 text-[12px] font-semibold"> </span>
          <span className="text-neutral-800 text-[12px] font-bold">
            Weird Design Studio
          </span>
        </div>
      </div>
      <div className="CompanyInformation w-[282px] h-[165px] left-[135px] top-[50px] absolute">
        <div className="SocialMedia w-[104px] h-7 left-0 top-[137px] absolute">
          <div className="Twitter w-7 h-7 left-0 top-0 absolute">
            <Twitter />
          </div>
          <div className="Facebook w-7 h-7 left-[38px] top-0 absolute">
            <Facebook />
          </div>
          <div className="Linkedin w-7 h-7 left-[76px] top-0 absolute">
            <Linkedin />
          </div>
        </div>
        <Link href={"/"}>
          <div className="Logo w-[134.80px] h-[23px] left-0 top-0 absolute">
            <div className="Ellipse w-[23px] h-[23px] left-0 top-0 absolute rounded-full border-2 border-neutral-800" />
            <div className="ml-8">
              <LogoText />
            </div>
          </div>
        </Link>
        <div className="Details w-[282px] left-0 top-[43px] absolute text-stone-500 text-[12px] font-normal leading-none">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </div>
      </div>
    </div>
  );
};

export default Footer;
