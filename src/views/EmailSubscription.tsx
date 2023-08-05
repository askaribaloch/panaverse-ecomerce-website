import React from "react";

const EmailSubscription = () => {
  return (
    <div className="EmailSubscription w-[706px] h-[158px] left-[367px] absolute">
    <div className="Background left-0 top-[4px] absolute text-slate-50 text-[120px] font-extrabold">Newsletter</div>
    <div className="Title w-[578px] left-[64px] top-0 absolute text-center text-neutral-800 text-[32px] font-bold tracking-wider">Subscribe Our Newsletter</div>
    <div className="Details w-[578px] left-[64px] top-[52px] absolute text-center text-neutral-800 text-[14px] font-light leading-relaxed">Get the latest information and promo offers directly</div>
    <div className="EmailForm w-[458px] h-10 left-[124px] top-[118px] absolute">
      <div className="InputForm w-80 h-10 left-0 top-0 absolute">
        <div className="Shape w-80 h-10 left-0 top-0 absolute bg-zinc-100 bg-opacity-20 border border-zinc-100" />
        <div className="Text left-[20px] top-[12px] absolute text-stone-500 text-[13px] font-normal">Input email address</div>
      </div>
      <div className="Button w-[130px] h-10 left-[328px] top-0 absolute">
        <div className="Shape w-[130px] h-10 left-0 top-0 absolute bg-neutral-800 shadow" />
        <div className="Text left-[27px] top-[12px] absolute text-center text-white text-[13px] font-semibold">Get Started</div>
      </div>
    </div>
  </div>
  );
};

export default EmailSubscription;
