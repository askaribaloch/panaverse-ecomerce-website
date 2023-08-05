import Image from "next/image";
import img from "../assets/feature.png";

const FeaturesBanner = () => {
  return (
    <div className="w-[1305px] h-[697px] relative">
      <div className="w-[787px] h-[600px] left-0 top-[97px] absolute bg-slate-50"></div>
      <div className="w-[511px] left-[128px] top-[247px] absolute opacity-5 text-neutral-800 text-[100px] font-extrabold leading-10">
        Different from others
      </div>

      <Image
        className="left-[648px] top-[197px] absolute origin-top-left"
        width={325}
        height={400}
        src={img}
        alt="products"
      />

      <div className="w-[564px] left-[741px] top-0 absolute text-neutral-800 text-[44px] font-bold tracking-widest">
        Unique and Authentic Vintage Designer Jewellery
      </div>
      <div className="w-[282px] h-[252px] left-[1023px] top-[271px] absolute">
        <div className="w-[282px] left-0 top-0 absolute text-justify text-neutral-800 text-[14px] font-light leading-relaxed">
          This piece is ethically crafted in our small family-owned workshop in
          Peru with unmatched attention to detail and care. The Natural color is
          the actual natural color of the fiber, undyed and 100% traceable.
        </div>
        <div className="w-[186px] h-[46px] left-0 top-[206px] absolute">
          <div className="w-[186px] h-[46px] left-0 top-0 absolute bg-neutral-800 shadow"></div>
          <div className="left-[34px] top-[14px] absolute text-center text-white text-[14px] font-semibold">
            See All Products
          </div>
        </div>
      </div>
      <div className="w-[392px] h-[268px] left-[135px] top-[263px] absolute">
        <div className="w-[170px] h-[114px] left-0 top-0 absolute">
          <div className="w-[170px] left-0 top-[48px] absolute text-neutral-800 text-[14px] font-light leading-snug tracking-wider">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </div>
          <div className="w-[170px] left-0 top-0 absolute text-neutral-800 text-[16px] font-semibold tracking-wide">
            Using Good Quality Materials
          </div>
        </div>
        <div className="w-[170px] h-[114px] left-[222px] top-[154px] absolute">
          <div className="w-[170px] left-0 top-[48px] absolute text-neutral-800 text-[14px] font-light leading-snug tracking-wider">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </div>
          <div className="w-[170px] left-0 top-0 absolute text-neutral-800 text-[16px] font-semibold tracking-wide">
            Discount for Bulk Orders
          </div>
        </div>
        <div className="w-[170px] h-[114px] left-[222px] top-0 absolute">
          <div className="w-[170px] left-0 top-[48px] absolute text-neutral-800 text-[14px] font-light leading-snug tracking-wider">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </div>
          <div className="w-[170px] left-0 top-0 absolute text-neutral-800 text-[16px] font-semibold tracking-wide">
            100% Handmade Products
          </div>
        </div>
        <div className="w-[170px] h-[114px] left-0 top-[154px] absolute">
          <div className="w-[170px] left-0 top-[48px] absolute text-neutral-800 text-[14px] font-light leading-snug tracking-wider">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
          </div>
          <div className="w-[170px] left-0 top-0 absolute text-neutral-800 text-[16px] font-semibold tracking-wide">
            Modern Fashion Design
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
