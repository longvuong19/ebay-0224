"use client";

import CartItem from "../components/CartItem";
import SimilarProducts from "../components/SimilarProducts";
import MainLayout from "../layouts/MainLayout";

const page = () => {
  const product = {
    id: 1,
    title: "LG Screen",
    description:
      "Nulla ultrices tellus id nisl aliquam efficitur. Nulla congue eu libero ut vehicula. Ut faucibus vulputate pharetra. Aenean pretium accumsan magna, in ultricies neque congue in.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <div>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Shopping Cart</div>

          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-[65%]">
              <CartItem key={product.id} product={product} />
            </div>

            <div
              id="GoToCheckout"
              className="md:w-[33%] absolute top-0 right-0 m-2"
            >
              <div className="bg-white p-4 border">
                <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                  Go to Checkout
                </button>

                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                  <div className="">Items (3)</div>
                  <div className="">$13</div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="">Shipping:</div>
                  <div className="">Free</div>
                </div>

                <div className="border-b border-gray-300"></div>

                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                  <div className="">Subtotal</div>
                  <div className="">$13</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </div>
  );
};

export default page;
