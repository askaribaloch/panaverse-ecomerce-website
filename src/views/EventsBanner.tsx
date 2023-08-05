import React from "react";
import Image from "next/image";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import Next from "../assets/Next.png";

const EventsBanner = () => {
  return (
    <div className="PromotionsEvent w-[1170px] h-[570px] relative">
      <div className="SectionHeader w-[400px] h-[75px] left-[385px] top-0 absolute">
        <div className="Text left-[149px] top-0 absolute text-center text-blue-600 text-[12px] font-bold tracking-wider">
          PROMOTIONS
        </div>
        <div className="ProductName left-0 top-[35px] absolute text-center text-neutral-800 text-[32px] font-bold tracking-wider">
          Our Promotions Events
        </div>
      </div>
      <div className="PromoBanner w-[282px] h-[450px] left-[888px] top-[120px]  bg-zinc-300 absolute">
        <div className="Shape w-[282px] h-[72px] left-0 top-0 absolute" />
        <Image
          className="Image mt-20 left-0 top-0 absolut"
          src={event3}
          alt={"event3"}
        />
        <div className="ProductDetails w-[200px] h-[52px] left-[20px] top-[15px] absolute">
          <div className="Price left-0 top-[32px] absolute text-stone-500 text-[16px] font-normal line-through">
            $225.00
          </div>
          <div className="Price left-[83px] top-[29px] absolute text-neutral-800 text-[18px] font-semibold">
            $190.00
          </div>
          <div className="ProductName left-0 top-0 absolute text-neutral-800 text-[15px] font-normal leading-normal tracking-wide">
            Flex Push Button Bomber
          </div>
        </div>
      </div>
      <div className="PromoBanner w-[282px] h-[450px] left-[592px] top-[120px] bg-amber-100 absolute">
        <Image
          className="Image mt-20 left-0 top-0 absolute"
          src={event2}
          alt="event2"
        />
        <div className="Shape w-[282px] h-[74px] left-0 top-0 absolute" />
        <div className="ProductDetails w-[149px] h-[52px] left-[20px] top-[15px] absolute">
          <div className="Price left-0 top-[32px] absolute text-stone-500 text-[16px] font-normal line-through">
            $100.00
          </div>
          <div className="Price left-[83px] top-[29px] absolute text-neutral-800 text-[18px] font-semibold">
            $75.00
          </div>
          <div className="ProductName left-0 top-0 absolute text-neutral-800 text-[15px] font-normal leading-normal tracking-wide">
            Flex Sweatshirt
          </div>
        </div>
      </div>
      <div className="Next w-10 h-10 left-[1110px] top-[510px] absolute">
        <div className="Chevron w-[54px] h-[54px] left-[11px] top-[11px] absolute">
          <Image src={Next} alt="Next" />
        </div>
      </div>
      <div className="Next w-10 h-10 left-[814px] top-[510px] absolute">
        <div className="Chevron w-[54px] h-[54px] left-[11px] top-[11px] absolute">
          <Image src={Next} alt="Next" />
        </div>
      </div>
      <div className="PromoBanner w-[578px] h-[218px] left-0 top-[120px] absolute">
        <div className="Shape w-[578px] h-[218px] left-0 top-0 absolute bg-zinc-300" />
        <Image
          className="Image w-[282px] h-[218px] left-[296px] top-0 absolute"
          src={event1}
          alt="event1"
        />
        <div className="Text w-[578px] h-[218px] left-[40px] top-[73px] absolute">
          <div className="Text left-0 top-[49px] absolute text-neutral-800 text-[18px] font-normal tracking-wide">
            For the summer season
          </div>
          <div className="Text left-0 top-0 absolute">
            <span className="text-neutral-800 text-[28px] font-bold tracking-widest">
              GET UP TO
            </span>
            <span
              className={
                "text-neutral-800 text-[36px] font-extrabold tracking-widest"
              }
            >
              {" "}
              60%
            </span>
          </div>
        </div>
      </div>
      <div className="PromoBanner w-[578px] h-[218px] left-0 top-[352px] absolute">
        <div className="Shape w-[578px] h-[218px] left-0 top-0 absolute bg-neutral-800" />
        <div className="Details w-[330px] h-[121px] left-[124px] top-[49px] absolute">
          <div className="Text left-[45px] top-0 absolute text-center text-white text-[36px] font-extrabold tracking-wider">
            GET 30% Off
          </div>
          <div className="PromoCode w-[330px] h-[42px] left-0 top-[79px] absolute">
            <div className="Shape w-[330px] h-[42px] left-0 top-0 absolute opacity-20 bg-white rounded-lg" />
            <div className="Text left-[46px] top-[11px] absolute text-center text-white text-[17px] font-bold tracking-widest">
              DINEWEEKENDSALE
            </div>
          </div>
          <div className="Text left-[95px] top-[57px] absolute text-center text-white text-[14px] font-normal tracking-wide">
            USE PROMO CODE
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;