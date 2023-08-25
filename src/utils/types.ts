import { Image as IImage } from "sanity";

export interface IProduct {
    _id: string;
    title: string;
    price: number;
    tagline: {
      name:string;
    };
    description: string;
    image: IImage;
    category: {
      name: string;
    };
    quantity:number;
    totalPrice:number
  }