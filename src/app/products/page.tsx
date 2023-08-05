import { Image as IImage } from "sanity";
//import { Hero } from "@/views/Hero";
import { ProductCard } from "@/components/ProductCard";
import { client } from "../../../sanity/lib/client";
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
  image:IImage;
  category: {
    name:string
  }
}

export default async function AllProducts() {
  const data: IProduct[] = await getProductData();

  return (
    <div className="grid grid-cols-5 justify-center">
      {data.map((item) => (
        <div key={item._id}>
            <ProductCard item={item} />
        </div>        
      ))}
    </div>
  );
}
