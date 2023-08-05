import { Image as IImage } from "sanity";
//import { Hero } from "@/views/Hero";
import { ProductCard } from "@/components/ProductCard";
import { client } from "../../../../sanity/lib/client";
//import ProductList from "@/views/ProductList";

export const getProductData = async (slug: string) => {
  const res = await client.fetch(
    `*[_type=="product" && category->name == $slug]{
    _id,
      title,
      image,
      price,
      category -> {
        name
      }
  }`,
    { slug }
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

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const data: IProduct[] = await getProductData(params.slug);

  return (
    <div className="grid grid-cols-5 gap-x-10">
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
