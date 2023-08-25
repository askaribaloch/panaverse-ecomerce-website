import { ProductCard } from "@/components/ProductCard";
import { client } from "../../../../sanity/lib/client";
import { IProduct } from "@/utils/types";
//import ProductList from "@/views/ProductList";

const getProductData = async (slug: string) => {
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

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const data: IProduct[] = await getProductData(params.slug);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 md:gap-6">
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
