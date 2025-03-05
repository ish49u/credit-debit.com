"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CreditCard,
  creditCardsList,
} from "../../../data/affiliatedLinks/page";
import SignIn from "@/app/signIn/pagecopy";
import Footer from "@/app/footer/page";

export default function CreditCardPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <>
      <SignIn />
      <div className="container mx-auto px-4 lg:px-48 py-8 bg-white">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-main-bg mt-2">Credit Card</h1>

        <p className="mt-4 text-gray-700 leading-relaxed text-[14px]">
          Finding the right credit card can help you save money, earn rewards,
          and enjoy exclusive benefits tailored to your lifestyle. Whether
          you're looking for cashback on shopping, travel perks, dining
          discounts, or fuel savings, choosing the right credit card is crucial.
          Our comprehensive list features the best credit cards in India,
          carefully selected based on eligibility, benefits, and user
          preferences. Compare various options, check eligibility instantly, and
          apply online with ease. Enjoy seamless transactions, exclusive offers,
          and financial flexibility with a card that suits your needs. Take the
          next step in smart financial management—find your perfect credit card
          today!
        </p>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row mt-8">
          {/* Left Section - Credit Card Listings */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold text-black mb-4 opacity-85">
              Apply for Credit Cards Online
            </h2>

            {/* Loop Through Credit Cards */}
            {creditCardsList.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg mb-6"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Card Image */}
                  <div className="w-full sm:w-1/4 flex justify-center items-center bg-gray-100 rounded-lg">
                    <Image
                      src={card.imageUrl || "/default-card.png"} // 👈 Use card image or fallback
                      alt={card.name}
                      width={200}
                      height={130}
                    />
                  </div>

                  {/* Card Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {card.name}
                    </h3>

                    {/* Fees Info */}
                    <p className="text-gray-600 text-sm">
                      💰 <strong>Joining fee:</strong>{" "}
                      {card.fees?.joining ?? "N/A"} | 💵{" "}
                      <strong>Annual Fee:</strong> {card.fees?.annual ?? "N/A"}
                    </p>

                    {/* Basic Features */}
                    <p className="text-gray-600 text-sm mt-1">
                      {card.description}
                    </p>

                    {/* Rating - Display only if available */}
                    {(card as any).rating && (
                      <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg">⭐</span>
                        <span className="text-gray-800 font-semibold ml-1">
                          {(card as any).rating}/5
                        </span>
                      </div>
                    )}

                    {/* Tags - Display only if available */}
                    {(card as any).tags && (card as any).tags.length > 0 && (
                      <div className="mt-3 flex gap-2 flex-wrap">
                        {(card as any).tags.map((tag: string, i: number) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="mt-4 flex items-center gap-4">
                      <a
                        href={card.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-main-bg text-white px-4 py-2 rounded-lg font-semibold hover:bg-hover">
                          Check Eligibility
                        </button>
                      </a>

                      {/* More Details Toggle */}
                      <button
                        className="text-main-bg font-normal hover:underline"
                        onClick={() =>
                          setExpandedCard(expandedCard === index ? null : index)
                        }
                      >
                        {expandedCard === index
                          ? "Less Details"
                          : "+ More Details"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Section */}
                {expandedCard === index && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                    <h4 className="text-lg font-bold text-gray-800">
                      Product Details
                    </h4>

                    {/* Product Features */}
                    {card.features && (
                      <ul className="mt-2 list-disc pl-4 text-gray-600 text-sm">
                        {card.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    )}

                    {/* Terms and Conditions */}
                    {card.terms && (
                      <div className="mt-3">
                        <h5 className="text-gray-700 font-semibold">
                          Terms & Conditions:
                        </h5>
                        <ul className="list-disc pl-4 text-gray-600 text-sm">
                          {card.terms.map((term, i) => (
                            <li key={i}>{term}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Sidebar */}
          <div className="lg:w-1/4 lg:ml-6 mt-8 lg:mt-0">
            <div className="lg:w-full lg:ml-6 mt-8 lg:mt-0">
              {/* Featured Offers & Discounts */}
              <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  🔥 Exclusive Credit Card Offers
                </h3>
                <ul className="list-disc pl-4 mt-3 text-gray-700 text-sm">
                  <li>
                    Get ₹500 cashback on your first transaction with selected
                    credit cards.
                  </li>
                  <li>0% interest on EMI purchases for up to 12 months.</li>
                  <li>Complimentary domestic & international lounge access.</li>
                  <li>Get 10X reward points on online shopping and dining.</li>
                  <li>Zero forex markup on international transactions.</li>
                  <li>Annual fee waiver on spending ₹1,00,000 per year.</li>
                </ul>
              </div>

              {/* Why Get a Credit Card? */}
              <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  💳 Why Should You Get a Credit Card?
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  A credit card isn't just a payment tool—it's a financial
                  powerhouse. Whether you're looking to earn cashback, travel
                  perks, or exclusive rewards, the right credit card can enhance
                  your lifestyle significantly.
                </p>
                <h4 className="text-gray-900 font-semibold mt-3">
                  Top Benefits:
                </h4>
                <ul className="list-disc pl-4 mt-2 text-gray-700 text-sm">
                  <li>📌 Earn reward points on every purchase.</li>
                  <li>📌 Get exciting cashback & discounts on major brands.</li>
                  <li>📌 Enjoy interest-free credit for up to 50 days.</li>
                  <li>📌 Convert large purchases into easy EMIs.</li>
                  <li>📌 Free access to airport lounges & travel insurance.</li>
                  <li>
                    📌 Fuel surcharge waivers to save money on fuel expenses.
                  </li>
                  <li>
                    📌 Exclusive deals on shopping, dining, travel &
                    entertainment.
                  </li>
                </ul>
              </div>

              {/* Customer Testimonials */}
              <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  ⭐ What Our Customers Say
                </h3>
                <div className="mt-3 border-l-4 border-blue-500 pl-3">
                  <p className="text-gray-700 text-sm italic">
                    "I applied for my Axis Flipkart Credit Card through this
                    website, and the process was seamless! Got approved within
                    48 hours."
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    — Rahul Sharma, Mumbai
                  </p>
                </div>
                <div className="mt-3 border-l-4 border-main-bg pl-3">
                  <p className="text-gray-700 text-sm italic">
                    "The comparison tool helped me find the best credit card for
                    my travel needs. Now I enjoy free lounge access every time I
                    fly!"
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    — Priya Verma, Bangalore
                  </p>
                </div>
                <div className="mt-3 border-l-4 border-main-bg pl-3">
                  <p className="text-gray-700 text-sm italic">
                    "Got my credit card with zero annual fees and amazing
                    cashback offers. Highly recommended for first-time users!"
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    — Aman Khanna, Delhi
                  </p>
                </div>
              </div>

              {/* Credit Score Importance */}
              <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  📈 Importance of a Good Credit Score
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  Your **credit score** determines your eligibility for the best
                  credit cards with premium benefits. A higher score means lower
                  interest rates, better rewards, and faster approvals.
                </p>
                <h4 className="text-gray-900 font-semibold mt-3">
                  How to Improve Your Credit Score:
                </h4>
                <ul className="list-disc pl-4 mt-2 text-gray-700 text-sm">
                  <li>📌 Pay credit card bills on time, every time.</li>
                  <li>📌 Keep your **credit utilization** below 30%.</li>
                  <li>
                    📌 Avoid multiple loan or credit card applications in a
                    short span.
                  </li>
                  <li>
                    📌 Check your **CIBIL score** regularly and report
                    discrepancies.
                  </li>
                </ul>
                <button className="w-full bg-main-bg text-white px-4 py-2 mt-4 rounded-lg font-semibold hover:bg-hover">
                  Check Your Credit Score
                </button>
              </div>

              {/* Best Credit Cards for Specific Needs */}
              <div className="bg-white p-2 shadow-lg rounded-lg">
                <h3 className="text-lg font-bold text-black">
                  💡 Best Credit Cards for Your Needs
                </h3>
                <table className="w-full mt-3 text-sm text-black">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Category</th>
                      <th className="text-left py-2">Top Card</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">🛒 Shopping</td>
                      <td className="py-2 font-[8px]">
                        Flipkart Axis Bank Credit Card
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">✈️ Travel</td>
                      <td className="py-2 font-[8px]">
                        HDFC Regalia Credit Card
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">🍽️ Dining</td>
                      <td className="py-2 font-[8px]">
                        ICICI Amazon Pay Credit Card
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">🎬 Entertainment</td>
                      <td className="py-2 font-[8px]">SBI Elite Credit Card</td>
                    </tr>
                    <tr>
                      <td className="py-2">💼 Business</td>
                      <td className="py-2 font-[8px]">
                        Amex Platinum Business Card
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
