"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose, IoMdSearch } from "react-icons/io";

const categories = [
  { name: "Travel", icon: "🏖️" },
  { name: "Lounge Access", icon: "🛋️" },
  { name: "Dining", icon: "🍽️" },
  { name: "Shopping", icon: "🛒" },
  { name: "Co-branded", icon: "🤝" },
  { name: "Movies", icon: "🎬" },
  { name: "Reward Points", icon: "🎁" },
  { name: "Cashback", icon: "💰" },
  { name: "Fuel", icon: "⛽" },
  { name: "Online Shopping", icon: "🛍️" },
];

const CreditCardSearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-full h-full bg-white flex flex-col items-center justify-start pt-16 lg:pt-20">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl lg:text-3xl"
          onClick={() => router.push("/")}
        >
          <IoMdClose />
        </button>

        {/* Search Bar */}
        <div className="relative w-full max-w-4xl px-4 lg:px-8">
          <input
            type="text"
            className="w-full p-4 pl-12 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-base lg:text-lg shadow-sm"
            placeholder="Search Credit Card"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoMdSearch className="absolute lg:left-10 left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
        </div>

        {/* Top Searches Section */}
        <div className="mt-6 w-full max-w-4xl bg-white shadow-md rounded-lg p-4 lg:p-6">
          <h3 className="text-gray-700 font-semibold text-md flex items-center">
            Top Searches
            <span className="ml-2 w-16 h-[2px] bg-main-bg"></span>
          </h3>

          {/* Categories Grid */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full h-24 border rounded-md shadow-sm bg-white p-3 cursor-pointer hover:shadow-md transition"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-2 text-gray-700 font-medium text-sm">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardSearch;
