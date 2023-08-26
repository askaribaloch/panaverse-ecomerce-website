"use client";

import getStipePromise from "@/lib/stripe";
import { IProduct } from "@/utils/types";
import Link from "next/link";

interface IProps {
  products: IProduct[];
}

const StripeCheckOutButton = (props: IProps) => {
  console.log("cout:", props.products);
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(props.products),
    });

    const data = await response.json();
    console.log(data)

    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5">
        <button
          className="bg-[#212121] text-white py-3 px-3 rounded-md"
          onClick={handleCheckout}
        >
          Process to Checkout
        </button>
    </div>
  );
};

export default StripeCheckOutButton;
