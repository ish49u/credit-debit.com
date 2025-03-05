"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LoginDialog from "../../signIn/dialog/page";
import { motion } from "framer-motion";

const CreditScorePage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative">
      {/* Top Bar - Logo */}
      <div className="absolute top-5 left-5">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 lg:h-16 w-auto mix-blend-multiply cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Top Bar - Login Button */}
      <div className="absolute top-5 right-5">
        <LoginDialog />
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start px-6 lg:px-12 lg:pt-10 pt-24 pb-5 lg:pb-0 bg-gradient-to-br from-[#ff8c42] to-[#d7263d] text-white">
          <h1 className="text-xl lg:text-4xl font-extrabold leading-snug">
            Your Credit Score <br />
            <span className="text-yellow-300">Matters!</span>
          </h1>
          <p className="mt-4 lg:mt-6 text-sm lg:text-lg font-medium opacity-95">
            Get access to exclusive{" "}
            <strong>
              loan offers, lower interest rates, and financial insights.
            </strong>
            <br />
            <strong>
              Track, improve, and take control of your financial future.
            </strong>{" "}
            🚀
          </p>

          {/* Key Benefits */}
          <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4 text-sm lg:text-lg">
            {[
              { icon: "💰", text: "Instant Loan Eligibility Check" },
              { icon: "📊", text: "Access Personalized Loan Offers" },
              { icon: "🔍", text: "Monitor Your Credit Score Monthly" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="bg-white text-[#d7263d] px-2 py-1 rounded-full text-lg lg:text-xl mr-2 lg:mr-3">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <p className="mt-6 lg:mt-8 text-sm lg:text-lg font-semibold">
            Explore{" "}
            <a href="#" className="underline text-yellow-300">
              Credit Cards
            </a>
          </p>

          {/* Illustration */}
          <img
            src="/credit-analysis.avif"
            alt="Credit Analysis"
            className="mt-6 lg:mt-8 w-32 lg:w-48 mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-10 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">
              Get Your <span className="text-[#f3972d]">Free Credit Score</span>
            </h2>
            <p className="text-gray-600 text-center mt-1 lg:mt-2">
              Monitor and improve your credit score easily.
            </p>

            <div className="mt-4 lg:mt-6 space-y-4 lg:space-y-5">
              {/* Gender */}
              <div className="flex gap-4 lg:gap-6 text-black">
                {["Male", "Female"].map((gender) => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      className="mr-1 lg:mr-2"
                    />
                    {gender}
                  </label>
                ))}
              </div>

              {/* Full Name */}
              <div>
                <label className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 lg:p-3 border rounded-lg focus:ring-2 focus:ring-[#f3972d] focus:border-[#f3972d] outline-none"
                  placeholder="As per your bank records"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 lg:p-3 border rounded-lg focus:ring-2 focus:ring-[#f3972d] focus:border-[#f3972d] outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="text-gray-700 font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 p-2 lg:p-3 border rounded-lg focus:ring-2 focus:ring-[#f3972d] focus:border-[#f3972d] outline-none"
                  placeholder="Enter your mobile number"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Note: Use the number registered with your credit card or loan.
                </p>
              </div>

              {/* Checkbox Agreement */}
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-xs lg:text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-[#f3972d] underline">
                    Terms & Conditions
                  </a>{" "}
                  and allow access to my credit report.
                </p>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#f3972d] text-white py-2 lg:py-3 rounded-lg font-semibold hover:bg-[#e6841b] transition">
                Get Free Credit Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScorePage;
