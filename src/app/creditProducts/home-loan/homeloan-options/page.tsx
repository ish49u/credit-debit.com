"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { homeLoans } from "../../../../data/affiliatedLinks-homeloan/page";
import { FaPercentage, FaMoneyBillWave, FaClock } from "react-icons/fa";
import SignIn from "@/app/signIn/pagecopy";
import Footer from "@/app/footer/page";

const HomeLoanResultsContent = () => {
  const searchParams = useSearchParams();
  const loanAmount = Number(searchParams.get("loanAmount")) || 0;
  const tenure = searchParams.get("tenure")?.trim() || "";

  const parseLoanAmount = (amount: string): number => {
    const match = amount.match(/(\d+)([L|C])/);
    if (match) {
      let num = Number(match[1]);
      let unit = match[2];
      return unit === "C" ? num * 100 : num;
    }
    return 0;
  };

  const filteredLoans = homeLoans.filter((loan) => {
    const tenureMatch = tenure
      ? loan.tenure.split("-").some((range) => tenure.includes(range.trim()))
      : true;

    const loanAmountMatch =
      loanAmount > 0
        ? (() => {
            const rangeMatch = loan.loanAmount.match(
              /₹?(\d+[LC])(?:\s*-\s*₹?(\d+[LC]))?/
            );
            if (rangeMatch) {
              const minAmount = parseLoanAmount(rangeMatch[1]);
              const maxAmount = rangeMatch[2]
                ? parseLoanAmount(rangeMatch[2])
                : minAmount;
              return loanAmount >= minAmount && loanAmount <= maxAmount;
            }
            return true;
          })()
        : true;

    return tenureMatch && loanAmountMatch;
  });

  return (
    <>
      <SignIn />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center mb-10 lg:px-0 px-5">
          <h1 className="text-2xl font-bold text-main-bg">
            Compare & Choose the Best Home Loan 🏡
          </h1>
          <p className="text-sm text-gray-600 mt-4">
            Secure your dream home with the best interest rates, minimal fees,
            and flexible repayment options.
            <strong className="text-main-tbg"> Trusted by thousands</strong>, we
            bring you the top bank loan offers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-5 lg:px-0 ">
          {filteredLoans.length > 0 ? (
            filteredLoans.map((loan, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 mb-6 border-l-4 border-main-sbg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={loan.image}
                    alt={loan.bank}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-md font-semibold text-gray-900">
                      {loan.bank}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      A trusted financial partner
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-gray-800">
                  <p className="flex items-center gap-2 text-sm">
                    <FaPercentage className="text-main-sbg" />
                    <strong>Interest Rate:</strong> {loan.interestRate}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaMoneyBillWave className="text-main-sbg" />
                    <strong>Processing Fee:</strong> {loan.processingFee}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaMoneyBillWave className="text-main-sbg" />
                    <strong>Loan Amount:</strong> {loan.loanAmount}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaClock className="text-main-sbg" />
                    <strong>Tenure:</strong> {loan.tenure}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href={loan.affiliateLink}
                    target="_blank"
                    className="inline-block px-3 py-1 bg-main-bg text-white text-lg font-semibold rounded-lg shadow-md hover:bg-hover transition-all"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-gray-900">
                No Matching Loans Found 😞
              </h2>
              <p className="text-gray-600 mt-3">
                Try adjusting your loan amount or tenure to explore more
                options.
              </p>
              <div className="mt-6">
                <a
                  href="/home-loan"
                  className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                  Go Back & Recalculate 🔄
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const HomeLoanResults = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomeLoanResultsContent />
  </Suspense>
);

export default HomeLoanResults;
