"use client";
import { useAppSelector } from '@/redux/store';
import { BiShoppingBag } from 'react-icons/bi';
import { Toaster, toast } from 'react-hot-toast';
import CartItemCard from '@/app/shared/CartItemCard';
import Wrapper from '@/app/shared/Wrapper';
import StripeCheckOutButton from '@/components/sections/CheckOut';
import StartShopping from '../shared/StartShoping';
import { selectIsLoading } from '@/redux/features/cartSlice';

const CartDataLoadingFromApi = () => {
  return (
    <Wrapper>
      <div className="flex justify-center items-center w-full h-40">
        <h1>Loading Data</h1>
      </div>
    </Wrapper>
  );
};

const LoadedCartData = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalAmount);

  if (cartItems.length > 0) {
    return (
      <Wrapper>
        <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-5 px-5">
          <div className="md:flex-3">
            {cartItems.map((elm) => (
              <CartItemCard key={elm._id} cartItem={elm} />
            ))}
          </div>
          <div className="md:flex-1 bg-gray-200 rounded-md mt-5 md:mt-0 p-4">
            <div className="flex flex-col items-center justify-between gap-3">
              <h4 className="text-lg font-semibold">Order Summary</h4>
              <div className="flex justify-between w-full">
                <p className="text-gray-600">Quantity</p>
                <p className="font-semibold">{totalItems}</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-gray-600">Total Amount</p>
                <p className="font-semibold">${totalPrice}</p>
              </div>
              <StripeCheckOutButton products={cartItems} />
            </div>
          </div>
        </div>
        <Toaster />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
        <div className="flex flex-col items-center gap-10 h-full justify-center">
          <BiShoppingBag size={200} className="text-gray-400" />
          <h1 className="text-xl font-semibold">Your shopping bag is empty</h1>
          <StartShopping />
        </div>
      </Wrapper>
    );
  }
};

const CartPage = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return <div className="min-h-screen bg-gray-100">{isLoading ? <CartDataLoadingFromApi /> : <LoadedCartData />}</div>;
};

export default CartPage;
