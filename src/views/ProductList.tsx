import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
//import { Hero } from "@/views/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
//import ProductList from "@/views/ProductList";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
      title,
      image,
      price,
      category -> {
        name
      }
  }`);
  return res;
};

interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: IImage;
  category: {
    name: string;
  };
}

export default async function ProductList() {
  const data: IProduct[] = await getProductData();
  return (
    <div className="FeaturedProduct w-[1210px] h-[617px] relative">
      <div className="Text left-[566px] top-0 absolute text-center text-blue-600 text-[12px] font-bold tracking-wider">
        PRODUCTS
      </div>
      <div className="ProductName left-[421px] top-[35px] absolute text-center text-neutral-800 text-[32px] font-bold tracking-wider">
        Check What We Have
      </div>
      <div className="FeaturedProduct w-[1210px] h-[497px] left-0 top-[120px] absolute">
        <div className="ProductList w-[1170px] h-[497px] left-[20px] top-0 absolute justify-start items-start gap-[30px] inline-flex">
          <div className="grid grid-flow-col gap-4">
            {data.slice(0,3).map((item) => (
              <ProductCard item={item} key={item._id} />
            ))}
          </div>
        </div>
        <div className="Back w-10 h-10 left-0 top-[177px] absolute">
          <div className="Ellipse w-10 h-10 left-0 top-0 absolute bg-white rounded-full shadow border border-zinc-100" />
          <div className="Chevron w-[18px] h-[18px] left-[29px] top-[29px] absolute origin-top-left rotate-180" />
        </div>
        <div className="Next w-10 h-10 left-[1170px] top-[177px] absolute">
          <div className="Ellipse w-10 h-10 left-0 top-0 absolute bg-white rounded-full shadow border border-zinc-100">
          
            <ChevronRight />
          
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <section className="flex justify-center items-center">
      <div className="flex justify-between mb-8 overflow-x-scroll bg-white p-4 drop-shadow-xl">
        <div className="flex flex-none items-center gap-4">
          {data.map((item) => (
            <ProductCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </section> */
}
