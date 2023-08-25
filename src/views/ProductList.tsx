"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image as IImage } from "sanity";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import Wrapper from "@/app/shared/Wrapper";
import { urlForImage } from "../../sanity/lib/image";

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

export default async function ProductList({  }) {
  const data: IProduct[] = await getProductData();
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center px-5 py-20">
        <p className="text-center uppercase tracking-wide text-[#2118FF]">
          PRODUCTS
        </p>
        <h3 className="text-center my-8">Check What We Have</h3>
        <div className="w-full mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((p, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <Link href={`products/${p._id}`}>
                    <div className="relative w-[280px] h-[280px] overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={urlForImage(p.image).url()}
                        alt={p.title}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <p className="text-base font-bold text-center my-3">
                      {p.title}
                    </p>
                    <p className="text-base font-bold text-center">${p.price}</p>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}
