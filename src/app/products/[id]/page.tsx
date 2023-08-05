import { Image as IImage } from "sanity";
//import { Hero } from "@/views/Hero";
import { ProductCard } from "@/components/ProductCard";
import { client } from "../../../../sanity/lib/client";
//import ProductList from "@/views/ProductList";

export const getProductData = async (id: string) => {
  const res = await client.fetch(
    `*[_type=="product" && _id == $id]{
    _id,
      title,
      image,
      price,
      category -> {
        name
      }
  }`,
    { id }
  );
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

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const data: IProduct[] = await getProductData(params.id);

  return (
    <div className="grid justify-center">
      {data.length !== 0 ? (
        data.map((item) => (
          <div key={item._id}>
            <ProductCard item={item} />
          </div>
        ))
      ) : (
        <div>No Product Available for this Category</div>
      )}
    </div>
  );
}
