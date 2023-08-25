import React from 'react';
import { ProductCard } from '@/components/ProductCard';
import { client } from '../../../sanity/lib/client';
import { IProduct } from '@/utils/types';

const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    image,
    tagline -> {
      name
    },
    price,
    category -> {
      name
    }
  }`);
  return res;
};
export default async function AllProducts() {
  const data: IProduct[] = await getProductData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 md:gap-6">
      {data.map((item) => (
        <div key={item._id}>
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};
