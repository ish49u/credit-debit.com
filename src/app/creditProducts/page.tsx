"use client";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

const creditProducts = [
  {
    title: "CREDIT CARDS",
    description:
      "From 50+ Options, Choose a card matching your lifestyle & needs",
    linkText: "Get Best Offers",
    icon: "/icons/icon.png",
    route: "creditProducts/apply",
  },
  {
    title: "PERSONAL LOAN",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    linkText: "Check Eligibility",
    icon: "/icons/icon2.png",
  },
  {
    title: "MICRO LOANS (UNDER ₹50K)",
    description: "Instant small ticket loans to meet your immediate cash needs",
    linkText: "Get Instant Loan",
    icon: "/icons/icon3.png",
  },
  {
    title: "BUSINESS LOAN",
    description: "Expand your business with loans at low interest rates",
    linkText: "Check Eligibility",
    icon: "/icons/icon4.png",
  },
  {
    title: "TRANSFER PERSONAL LOAN",
    description: "Get better interest rates on your existing personal loan",
    linkText: "Reduce Your EMI",
    icon: "/icons/icon5.png",
  },
  {
    title: "HOME LOAN",
    description:
      "Choose from lowest interest rates available for your dream home",
    linkText: "Check Eligibility",
    icon: "/icons/icon6.png",
    route: "creditProducts/home-loan/apply",
  },
  {
    title: "LOAN AGAINST PROPERTY",
    description: "Get liquidity against your property at best interest rates",
    linkText: "Check Eligibility",
    icon: "/icons/icon7.png",
  },
  {
    title: "TRANSFER HOME LOAN",
    description: "Get better interest rates on your existing home loan",
    linkText: "Reduce Your EMI",
    icon: "/icons/icon8.png",
  },
  {
    title: "STEP UP CREDIT CARD",
    description: "A Credit Card for everyone, backed by a Fixed Deposit",
    linkText: "Know More",
    icon: "/icons/icon9.png",
  },
  {
    title: "GOLD LOAN",
    description:
      "Get loan against your gold at best interest rates with our doorstep service",
    linkText: "Know More",
    icon: "/icons/icon10.png",
  },
  {
    title: "LOAN AGAINST MUTUAL FUNDS",
    description: "Get best loan offer against your mutual fund portfolio",
    linkText: "Apply Now",
    icon: "/icons/icon11.png",
  },
];

const CreditProducts: React.FC = () => {
  const router = useRouter();

  const navigateToForm = () => {
    router.push("/apply");
  };
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6 lg:px-36 bg-white lg:pt-8 pt-0 pb-7 lg:pb-0">
      <h2 className="flex items-center text-md font-bold text-main-bg mb-6">
        CREDIT PRODUCTS
        <div className="w-[10%] border-t-2 border-main-bg ml-2"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {creditProducts.map((product, index) => (
          <div
            key={index}
            className={`px-3 py-2 rounded-md shadow-xl bg-white transition-all duration-300 border-t border-gray-200 cursor-pointer
              ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "opacity-60"
                  : "opacity-100"
              }
              hover:opacity-100 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300
              `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-black w-[50%]">
                {product.title}
              </h3>
              <img
                src={product.icon}
                alt={product.title}
                className="w-10 h-10 mt-2"
              />
            </div>

            <p className="text-gray-600 mt-0 text-[13px] font-semibold opacity-80">
              {product.description}
            </p>
            <button
              onClick={() => product.route && router.push(product.route)}
              className="text-main-bg font-semibold mt-10 mb-3 inline-flex items-center text-[14px]"
            >
              {product.linkText}{" "}
              <span
                className={`transition-transform duration-300 ${
                  hoveredIndex === index
                    ? "translate-x-[10px]"
                    : "translate-x-1"
                }`}
              >
                <IoArrowForward className="inline-block text-lg" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditProducts;
