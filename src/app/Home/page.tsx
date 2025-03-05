"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreditProducts from "../creditProducts/page";
import InsuranceInvestment from "../insurance/page";
import SignIn from "../signIn/pagecopy";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
} from "react-icons/io";
import Footer from "../footer/page";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation"; // Use this instead of "next/router" for Next.js 13+
import SignInButton from "../signIn/page";

const banners = [
  {
    image: "/banner.jpg",
    title: "Check Your Credit Score for Free!",
    offer: "Worth ₹1,500",
    freeText: "No Hidden Charges",
    description:
      "Your credit score is the key to better financial opportunities. Get instant access and improve your chances for the best loans & credit cards.",
    buttonText: "Check My Credit Score",
  },
  {
    image: "/banner2.jpg",
    title: "Find the Perfect Credit Card Instantly!",
    offer: "",
    freeText: "",
    description:
      "Compare 400+ credit cards and choose the one that fits your lifestyle.",
    features: ["✔ Search by Card Type or Benefits  |   ✔ Compare Top Offers"],
    features1: [
      "✔ Get Rewards & Cashback Deals |  ✔ Find Cards with No Annual Fees",
    ],
    buttonText: "Explore Credit Cards",
  },
];

export default function Home() {
  const router = useRouter();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(currentIndex === 0 ? 1 : -1);
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <SignIn />
      <SignInButton />
      <div className="relative flex flex-col bg-white text-black pt-5">
        <div className="w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[330px] flex flex-col items-center border-b-[3px] px-6 sm:px-16 lg:pr-56 lg:pl-28 border-[#d6e3e6]">
          <AnimatePresence mode="popLayout">
            {banners.map((banner, index) =>
              index === currentIndex ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: `${100 * direction}%` }}
                  animate={{ opacity: 1, x: "0%" }}
                  exit={{ opacity: 0, x: `${-100 * direction}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col sm:flex-row items-center w-full"
                >
                  {/* Left - Image */}
                  <div className="flex w-full sm:w-1/2 justify-center">
                    <img
                      src={banner.image}
                      alt="Banner Image"
                      className="w-full sm:w-[80%] lg:w-[70%] max-w-xl max-h-[250px] sm:max-h-[300px] object-cover"
                    />
                  </div>

                  {/* Right - Content */}
                  <div className="text-center sm:text-left w-full sm:w-1/2 flex flex-col justify-center mt-4 lg:mt-0">
                    <h1 className="text-[23px] sm:text-[25px] lg:text-[32px] font-bold text-[#f3972d] leading-tight">
                      {banner.title}
                    </h1>
                    {banner.offer && (
                      <p className="text-[20px] sm:text-[22px] lg:text-[26px] font-semibold mt-2">
                        <span className="text-[#f3972d] line-through">
                          {banner.offer}
                        </span>{" "}
                        <span className="text-[#cd2b32]">
                          {banner.freeText}
                        </span>
                      </p>
                    )}
                    {banner.description && (
                      <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-gray-500 mt-2 leading-[1.5]">
                        {banner.description}
                      </p>
                    )}
                    {banner.features && (
                      <div className="flex flex-wrap space-x-2 sm:space-x-4 mt-2">
                        {banner.features.map((feature, i) => (
                          <p
                            key={i}
                            className="text-gray-600 text-[14px] sm:text-[13px]"
                          >
                            {feature}
                          </p>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-center items-center h-full w-full lg:justify-start">
                      <button
                        onClick={() => {
                          if (banner.buttonText === "Check My Credit Score") {
                            router.push("/Home/creditReport");
                          } else if (
                            banner.buttonText === "Explore Credit Cards"
                          ) {
                            router.push("/Home/exploreCredit");
                          }
                        }}
                        className="flex w-[75%] sm:w-[50%] lg:w-[45%] mt-6 sm:mt-8 mb-5 px-5 py-3 bg-[#f3972d] text-white font-semibold text-[16px] sm:text-[18px] rounded-md shadow-md hover:bg-[#ce8a3c] transition-all"
                      >
                        {banner.buttonText}
                        <IoIosArrowForward className="w-5 h-5 mt-[3px] ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 lg:mb-0 mb-5">
          <div className="inline-flex space-x-2 bg-gray-100 px-2 py-1 rounded-md border-gray-100 border-t-2">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`w-[6px] sm:w-[7px] h-[6px] sm:h-[7px] rounded-full cursor-pointer transition-all ${
                  currentIndex === index ? "bg-main-bg" : "bg-gray-400"
                }`}
                onClick={() => {
                  setDirection(currentIndex === index ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <CreditProducts />
      <InsuranceInvestment />
      <Footer />
    </>
  );
}
