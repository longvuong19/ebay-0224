"use client";

import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import { CiDeliveryTruck } from "react-icons/ci";

const Orders = () => {
  const orders = [
    {
      id: 1,
      stripe_id: "1902",
      name: "Test",
      address: "Test",
      zipcode: "Test",
      city: "Test",
      country: "Test",
      total: 1299,
      orderItem: [
        {
          id: 1,
          title: "LG Screen",
          url: "https://picsum.photos/id/7",
        },
      ],
    },
  ];

  return (
    <>
      <MainLayout>
        <div
          className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
          id="OrdersPage"
        >
          <div className="bg-white w-full p-6 min-h0[150px]">
            <div className="flex items-center text-xl">
              <CiDeliveryTruck className="text-green-500" size={35} />
              <span className="pl-4">Orders</span>
            </div>

            {orders.length < 1 ? (
              <div className="flex items-center justify-center">
                You have no order history
              </div>
            ) : null}

            {orders.map((order) => (
              <div key={order?.id} className="text-sm pl-[50px]">
                <div className="border-b py-1">
                  <div className="pt-2">
                    <span className="font-bold mr-2">Stripe ID:</span>
                    {order?.stripe_id}
                  </div>

                  <div className="pt-2">
                    <span className="font-bold mr-2">Delivery Address:</span>
                    {order?.name}, {order?.address}, {order?.zipcode},{" "}
                    {order?.city}, {order?.country}
                  </div>

                  <div className="pt-2">
                    <span className="font-bold mr-2">Total:</span>$
                    {order?.total / 100}
                  </div>

                  <div className="flex items-center gap-4">
                    {order?.orderItem.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <Link
                          href="/"
                          className="py-1 hover:underline text-blue-500 font-bold"
                        >
                          <img
                            src={item.url + "/120"}
                            className="rounded"
                            alt=""
                          />
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Orders;
