import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import header from "../assets/header.png";
import featured1 from "../assets/Featured1.png";
import featured2 from "../assets/Featured2.png";
import featured3 from "../assets/Featured3.png";
import featured4 from "../assets/Featured4.png";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 justify-center items-center content-center">
      {/* content */}
      <div className="flex-1">
        <Badge className="py-3 px-6 rounded-lg bg-blue-100 text-blue-700">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="bg-black h-12 px-8 mt-4 rounded-none items-center">
          <ShoppingCart className="mr-4" />
          Start Shopping
        </Button>
        <div className="h-40 grid grid-cols-4 gap-4 content-end">
          <div>
            <Image
              src={featured1}
              width={100}
              height={35}
              alt="img"
              className="px-2"
            />
          </div>
          <div>
            <Image
              src={featured2}
              width={100}
              height={35}
              alt="img"
              className="px-2"
            />
          </div>
          <div>
            <Image
              src={featured3}
              width={100}
              height={35}
              alt="img"
              className="px-2"
            />
          </div>
          <div>
            <Image
              src={featured4}
              width={100}
              height={35}
              alt="img"
              className="px-2"
            />
          </div>
        </div>
      </div>

      {/* image */}
      <div className="lg:block hidden w-[50%]">
          <div className="relative">
            <div className=" absolute w-[430px] h-[430px] bg-[#ffece3] -z-[10] rounded-full left-5 top-10"></div>
            <Image
              src={header}
              alt="Hero photo"
              width={600}
              height={600}
              className=""
            />
          </div>
        </div>
    </section>
  );
};
