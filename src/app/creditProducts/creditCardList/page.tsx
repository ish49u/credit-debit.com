"use client";
import { Suspense, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  CreditCard,
  creditCardsList,
} from "../../../data/affiliatedLinks/page";
import Footer from "@/app/footer/page";
import SignIn from "@/app/signIn/pagecopy";

const CreditCardListContent = () => {
  const searchParams = useSearchParams();

  const salary = Number(searchParams.get("salary") || 0);
  const age = Number(searchParams.get("age") || 0);
  const employment = searchParams.get("employment") || "";
  const creditScore = Number(searchParams.get("creditScore") || 0);
  // Ensure selectedCard is properly typed
  const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);

  const filteredCards = creditCardsList.filter((card) => {
    let employmentArray: string[] = [];

    if (typeof card.eligibility?.employmentStatus === "string") {
      employmentArray = card.eligibility.employmentStatus
        .split(" or ")
        .map((status) => status.toLowerCase());
    } else if (Array.isArray(card.eligibility?.employmentStatus)) {
      employmentArray = card.eligibility.employmentStatus.map((status) =>
        status.toLowerCase()
      );
    }

    const isAgeEligible =
      age >= (card.eligibility?.age?.min || 0) &&
      age <= (card.eligibility?.age?.max || 100);

    let minRequiredSalary = 0;

    if (
      card.eligibility?.income &&
      typeof card.eligibility.income === "object"
    ) {
      if (employment.toLowerCase() === "salaried") {
        minRequiredSalary = card.eligibility.income.salaried || 0;
      } else if (employment.toLowerCase() === "self-employed") {
        minRequiredSalary = card.eligibility.income.selfEmployed || 0;
      }
    }

    const isSalaryEligible = salary >= minRequiredSalary;
    const isEmploymentEligible = employmentArray.includes(
      employment.toLowerCase()
    );

    return isAgeEligible && isSalaryEligible && isEmploymentEligible;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="text-left mb-6">
          <h2 className="text-md font-bold text-gray-900">
            {filteredCards.length} Cards From{" "}
            <span className="text-main-bg">4 Banks</span>
          </h2>
        </div>

        {filteredCards.length > 0 ? (
          <div className="space-y-6">
            {filteredCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="w-full sm:w-1/4 flex justify-center items-center p-4">
                  <Image
                    src={card.imageUrl || "/default-card.png"}
                    alt={card.name}
                    width={180}
                    height={120}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {card.name}
                  </h3>
                  <ul className="text-gray-600 text-sm mt-2 list-disc pl-5">
                    {card.benefits?.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                  <p className="text-gray-700 text-sm mt-3">
                    <strong>1st Year Fee:</strong>{" "}
                    <span className="font-bold text-gray-900">
                      ₹{card.fees?.joining || "N/A"}
                    </span>
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <button
                      onClick={() => setSelectedCard(card as CreditCard)}
                      // ✅ Ensures correct type assignment
                      className="border border-main-bg text-main-bg px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-300 transition"
                    >
                      More Details
                    </button>

                    <a
                      href={card.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-main-bg text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-hover transition"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6 text-lg">
            No matching credit cards found.
          </p>
        )}
      </div>
      {/* Side Panel for More Details */}
      {/* Side Panel for More Details */}
      {selectedCard && (
        <div className="fixed top-0 right-0 w-full sm:w-[90vw] md:w-[70vw] lg:w-[30vw] h-full bg-white shadow-lg p-6 overflow-y-auto border-l z-50 transition-transform transform translate-x-0">
          <button
            onClick={() => setSelectedCard(null)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
          >
            ✕
          </button>
          <div className="max-w-md mx-auto">
            <Image
              src={selectedCard.imageUrl || "/default-card.png"}
              alt={selectedCard.name}
              width={180}
              height={120}
              className="rounded-md mb-4 mx-auto"
            />
            <h2 className="text-xl font-bold mb-2 text-black text-center lg:text-left">
              {selectedCard.name}
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              {selectedCard.description}
            </p>

            <h3 className="text-lg font-semibold text-main-bg mt-4">
              Fee Details
            </h3>
            <p className="text-black">
              <strong>1st Year Fee:</strong> ₹
              {selectedCard.fees?.joining || "N/A"}
            </p>
            <p className="text-black">
              <strong>Annual Fee:</strong> ₹{selectedCard.fees?.annual || "N/A"}
            </p>

            <h3 className="text-lg font-semibold text-main-bg mt-4">Terms</h3>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              {selectedCard.terms && selectedCard.terms.length > 0 ? (
                selectedCard.terms.map((term, i) => <li key={i}>{term}</li>)
              ) : (
                <li className="text-gray-500">No specific terms available.</li>
              )}
            </ul>

            {/* Apply Now Button */}
            <a
              href={selectedCard.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full text-center bg-main-bg text-white font-semibold py-3 rounded-lg hover:bg-hover transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const CreditCardList = () => {
  return (
    <>
      <SignIn />
      <Suspense fallback={<p>Loading...</p>}>
        <CreditCardListContent />
      </Suspense>
      <Footer />
    </>
  );
};

export default CreditCardList;
