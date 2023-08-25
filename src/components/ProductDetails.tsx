import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { FC } from 'react';
import AddtoCartProduct from './AddtoCartProduct';
import { auth } from '@clerk/nextjs';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export const ProductDetails: FC<{ item: any }> = ({ item }) => {
  const { userId: user_id } = auth();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="md:w-1/3">
          <Image
            width={380}
            height={400}
            src={urlForImage(item.image).url()}
            alt="product"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="font-bold text-2xl md:text-3xl mt-3">{item.title}</h1>
          <h2 className="text-lg md:text-xl text-gray-500 mt-1">{item.tagline.name}</h2>
          
          <p className="font-bold text-lg mt-4">
            Category{' '}
            <span className="text-base font-normal uppercase">
              {item.category.name}
            </span>
          </p>
          <p className="font-bold text-lg mt-4">
            Price{' '}
            <span className="text-base font-normal uppercase">
              {item.price}
            </span>
          </p>
          <div className="mt-6">
            <h3 className="text-xs md:text-sm font-semibold">Select Size</h3>
            <div className="flex gap-x-3 mt-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border bg-gray-50 hover:shadow-xl duration-300 flex justify-center items-center"
                >
                  <span className="text-xs md:text-sm font-semibold text-center text-gray-600">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-6 gap-x-3">
            <h3 className="text-xs md:text-sm font-semibold">Quantity:</h3>
            <AddtoCartProduct product={item} qty={1} userId={user_id as string} />
          </div>
        </div>
      </div>
    </div>
  );
};
