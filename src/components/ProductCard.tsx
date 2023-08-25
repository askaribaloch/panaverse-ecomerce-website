import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { FC } from 'react';
import Link from 'next/link';

export const ProductCard: FC<{ item: any }> = ({ item }) => {
  return (
    <Link href={`/products/${item._id}`}>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
        <div className="relative">
          <Image
            src={urlForImage(item.image).url()}
            alt="product"
            layout="responsive"
            width={380}
            height={400}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-700">${item.price}</p>
          <p className="text-sm text-gray-600 mt-1">
            Category{' '}
            <span className="text-xs font-medium uppercase">
              {item.category.name}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};