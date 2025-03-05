"use client";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const InsuranceInvestment: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "TERM LIFE INSURANCE",
      description: "Safeguard your loved ones from future uncertainties",
      link: "Starting from ₹ 485/month*",
      tag: "Up to 15% Off",
      icon: "/ins-icons/icon.png",
    },
    {
      title: "INVESTMENT PLAN",
      description:
        "Plans starting from ₹1,000 with Inbuilt Life Cover & Tax Benefits",
      link: "View Plans",
      tag: "Tax Free Returns",
      icon: "/ins-icons/icon2.png",
    },
    {
      title: "HEALTH INSURANCE",
      description:
        "Protect yourself and your family against medical expenses with up to 25% discount",
      link: "Starting @ ₹ 8/day*",
      tag: "FREE Home Visit",
      icon: "/ins-icons/icon3.png",
    },
    {
      title: "DIRECT MUTUAL FUNDS",
      description: "Get higher returns on your Mutual Fund investments",
      link: "Check Your Investment",
      icon: "/ins-icons/icon4.png",
    },
    {
      title: "POCKET PROTECT",
      description:
        "Safeguard yourself against potential financial loss and frauds",
      link: "Know More",
      tag: "New",
      icon: "/ins-icons/icon5.png",
    },
    {
      title: "CAR INSURANCE",
      description:
        "Protect yourself & your Car from financial emergencies and save up to 85%*",
      link: "View Prices",
      tag: "New",
      icon: "/ins-icons/icon6.png",
    },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-36 bg-white pt-8 lg:pb-16 pb-8">
      <h2 className="flex items-center text-md font-bold text-main-bg mb-6">
        INSURANCE & INVESTMENT
        <div className="w-[10%] border-t-2 border-main-bg ml-2"></div>
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-md rounded-md px-3 pt-6 pb-4 border-t border-gray-200 transition-all duration-300 flex flex-col h-full
            ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-60"
                : "opacity-100"
            }
            hover:opacity-100 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tag positioned at top-left */}
            {card.tag && (
              <span className="absolute -top-3 left-3 bg-main-tbg text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                {card.tag}
              </span>
            )}

            {/* Card Content */}
            <div className="flex justify-between items-start w-full">
              <h3 className="text-sm font-semibold text-black w-[65%]">
                {card.title}
              </h3>
              <img
                src={card.icon}
                alt={card.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* 🔥 Added flex-grow to ensure uniform height */}
            <p className="text-gray-600 mt-0 text-[13px] font-semibold opacity-80 flex-grow">
              {card.description}
            </p>

            {/* Ensures links are always at the bottom */}
            <div className="mt-8">
              {card.link && (
                <a
                  href="#"
                  className="text-main-bg font-semibold inline-flex items-center text-[14px]"
                >
                  {card.link}
                  <span
                    className={`transition-transform duration-300 ${
                      hoveredIndex === index
                        ? "translate-x-[10px]"
                        : "translate-x-1"
                    }`}
                  >
                    <IoArrowForward className="inline-block text-lg ml-1" />
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceInvestment;
