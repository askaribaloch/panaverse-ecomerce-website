"use client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { FC } from "react";
import Link from "next/link";

export const ProductCard: FC<{ item: any }> = ({ item }) => {
  /* const handleAddToCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body:JSON.stringify({
                product_id:item._id
            })
        })
    } */
  return (
    <div>
      <Link href={`/products/${item._id}`}>
      <div>
      <Image
        width={380}
        height={400}
        src={urlForImage(item.image).url()}
        alt="product"
      />
      <h3 className="font-bold text-lg mt-3">{item.title}</h3>
      <p className="font-bold text-lg">${item.price}</p>
      <p className="font-bold text-lg">
        Category {' '}
        <span className="text-base font-normal uppercase">{item.category.name}</span>
      </p>
    </div>    
      </Link>
      {/* <button onClick={handleAddToCart} className="border py-2 px-6 rounded bg-blue-600 text-white">Add to Cart</button> */}
    </div>
  );
};

/* src={urlForImage(item.image).url() */
