"use client";

import SimilarProducts from "@/app/components/SimilarProducts";
import { useCart } from "@/app/context/cart";
import MainLayout from "@/app/layouts/MainLayout";
import { toast } from "react-toastify";

const Product = ({ params }) => {
  const cart = useCart();

  const product = {
    id: 1,
    title: "LG Screen",
    description:
      "Nulla ultrices tellus id nisl aliquam efficitur. Nulla congue eu libero ut vehicula. Ut faucibus vulputate pharetra. Aenean pretium accumsan magna, in ultricies neque congue in.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex px-4 py-10">
          {product?.url ? (
            <img
              src={product?.url + "/280"}
              className="w-[40%] rounded-lg"
              alt=""
            />
          ) : (
            <div className="w-[40%]"></div>
          )}

          <div className="px-4 w-full">
            <div className="font-bold text-xl">{product?.title}</div>
            <div className="text-sm text-gray-700 pt-2">
              Brand New - Full Warranty
            </div>
            <div className="border-b py-1" />

            <div className="pt-3 pb-2">
              <div className="flex items-center">
                Condition:{" "}
                <span className="font-bold text-[16px] ml-2">New</span>
              </div>
            </div>
            <div className="border-b py-1" />

            <div className="pt-3">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  Price:
                  {product?.price ? (
                    <div className="font-bold text-[20px] ml-2">
                      USD ${(product?.price / 100).toFixed(2)}
                    </div>
                  ) : null}
                </div>
                <button
                  className={`text-white bg-[#3498c9] py-2 px-20 rounded-full cursor-pointer
                ${
                  cart.isItemAdded
                    ? "bg-[#e9a321] hover:bg-[#bf851a]"
                    : "bg-[#3498c9] hover:bg-[#0054a0]"
                }
                `}
                  onClick={() => {
                    if (cart.isItemAdded) {
                      cart.removeFromCart(product);
                      toast.info("Removed from cart!", { autoClose: 3000 });
                    } else {
                      cart.addToCart(product);
                      toast.success("Added to cart!", { autoClose: 3000 });
                    }
                  }}
                >
                  {cart.isItemAdded ? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{product?.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimilarProducts />
    </MainLayout>
  );
};

export default Product;
