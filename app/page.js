"use client";

import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "LG Screen",
      description:
        "Nulla ultrices tellus id nisl aliquam efficitur. Nulla congue eu libero ut vehicula. Ut faucibus vulputate pharetra. Aenean pretium accumsan magna, in ultricies neque congue in.",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "Snickers",
      description:
        "Nulla ultrices tellus id nisl aliquam efficitur. Nulla congue eu libero ut vehicula. Ut faucibus vulputate pharetra. Aenean pretium accumsan magna, in ultricies neque congue in.",
      url: "https://picsum.photos/id/20",
      price: 1300,
    },
  ];

  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
