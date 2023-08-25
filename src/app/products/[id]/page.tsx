import { client } from '../../../../sanity/lib/client';
import { IProduct } from '@/utils/types';
import { ProductDetails } from '@/components/ProductDetails';

const getProductData = async (id: string) => {
  const res = await client.fetch(
    `*[_type=="product" && _id == $id]{
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
    }`,
    { id }
  );
  return res;
};

export default  async function ProductSummary({
  params,
}: {
  params: { id: string };
}) {
  const data: IProduct[] = await getProductData(params.id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {data.length !== 0 ? (
        data.map((item) => (
          <div
            key={item._id}
          >
            <ProductDetails item={item} />
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">
          No Product Available for this Category
        </div>
      )}
    </div>
  );
}