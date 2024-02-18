"use client";

import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Success = () => {
  return (
    <MainLayout>
      <div
        className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
        id="SuccessPage"
      >
        <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
          <div className="">
            <div className="flex items-center text-xl mb-4">
              <AiOutlineCheckCircle className="text-green-500" size={35} />
              <span className="pl-4">Payment Successful</span>
            </div>
            <p className="text-sm">Thank you! We have received your payment.</p>

            <Link href="/" className="w-full">
              <div className="w-full text-center bg-blue-600 text-sm font-semibold text-white p-[12px] mt-4">
                Back to shop
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Success;
