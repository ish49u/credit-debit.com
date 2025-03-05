"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { homeLoans } from "../../../../data/affiliatedLinks-homeloan/page"; // Adjust the import path
import SignIn from "@/app/signIn/pagecopy";
import Footer from "@/app/footer/page";

const HomeLoanPage = () => {
  // Select 5 home loans
  const selectedLoans = homeLoans.slice(0, 5);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number | null>(null);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [loanTenure, setLoanTenure] = useState<number | null>(null);
  const [emi, setEmi] = useState<number | null>(null);

  // EMI Calculation Function
  const calculateEMI = () => {
    if (loanAmount === null || interestRate === null || loanTenure === null) {
      alert("Please enter all values before calculating EMI.");
      return;
    }

    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = loanTenure * 12;

    if (R === 0) {
      setEmi(P / N);
    } else {
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiValue);
    }
  };

  return (
    <>
      <SignIn />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-main-bg text-white py-8 text-center">
          <h1 className="text-xl md:text-2xl font-extrabold">
            Your Home, Your Loan, Your Way ✨
          </h1>
          <p className="mt-4 text-md max-w-lg mx-auto">
            A home loan is a financial product offered by lenders to individuals
            for purchasing residential property. It covers a significant portion
            of the property's cost, while the borrower is required to make a
            down payment. The remaining amount is repaid through Equated Monthly
            Instalments (EMIs). The loan tenure typically ranges from 5 to 30
            years.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg mx-auto transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Home Loan EMI Calculator 🏠💰
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Loan Amount */}
              <div>
                <label className="block text-gray-700 font-semibold">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-main-bg focus:outline-none"
                  value={loanAmount ?? ""}
                  onChange={(e) =>
                    setLoanAmount(Number(e.target.value) || null)
                  }
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-gray-700 font-semibold">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-main-bg focus:outline-none"
                  value={interestRate ?? ""}
                  onChange={(e) =>
                    setInterestRate(Number(e.target.value) || null)
                  }
                />
              </div>

              {/* Loan Tenure */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-semibold">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-700 focus:ring-2 focus:ring-main-bg focus:outline-none"
                  value={loanTenure ?? ""}
                  onChange={(e) =>
                    setLoanTenure(Number(e.target.value) || null)
                  }
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center mt-6">
              <button
                onClick={calculateEMI}
                className="w-full bg-main-bg text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-main-hover transition-transform transform hover:scale-105"
              >
                Calculate EMI
              </button>
            </div>

            {/* EMI Result */}
            {emi !== null && (
              <div className="text-center mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">
                  Estimated Monthly EMI: ₹{emi.toFixed(2)}
                </h3>
              </div>
            )}
          </div>

          {/* Why Choose a Home Loan? */}
          <div className="p-6">
            <h2 className="text-2xl font-extrabold text-main-tbg text-center mb-6">
              Why Choose a Home Loan? 🏡
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              A home loan offers financial flexibility with competitive interest
              rates, easy approvals, and tax benefits. Here's why you should
              consider it:
            </p>
            <div className="grid md:grid-cols-1 gap-6">
              {[
                { text: "Low interest rates & flexible tenure", icon: "💰" },
                { text: "Minimal documentation & easy approval", icon: "📑" },
                { text: "Tax benefits on home loan interest", icon: "🏦" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
                >
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <p className="text-gray-700 font-semibold text-md">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Home Loan Offers Table */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Home Loan Interest Rates Offered by Partner Banks and HFCs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left bg-white shadow-md">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="border border-gray-300 p-3 font-semibold">
                    Name of Lender
                  </th>
                  <th className="border border-gray-300 p-3 font-semibold">
                    Interest Rates (p.a.)
                  </th>
                </tr>
              </thead>
              <tbody>
                {homeLoans.map((loan, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-3 text-main-bg font-semibold hover:underline cursor-pointer">
                      <a
                        href={loan.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {loan.bank}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-3 text-gray-700">
                      {loan.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            FAQs 🤔
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Here are some common questions and answers about home loans to help
            you make informed decisions.
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                question: "What is a home loan?",
                answer: (
                  <>
                    A home loan is a financial product that allows individuals
                    to borrow money from banks or financial institutions to
                    purchase a house. The loan is repaid in monthly installments
                    (EMIs) over a fixed tenure, which includes both principal
                    and interest components. Home loans come with different
                    types of interest rates, such as fixed or floating.
                  </>
                ),
              },
              {
                question: "What are the current home loan interest rates?",
                answer: (
                  <>
                    Home loan interest rates typically range from{" "}
                    <strong>8.25% to 9.25%</strong>, but this can vary based on
                    several factors such as:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Your credit score</li>
                      <li>Loan amount and tenure</li>
                      <li>Type of interest rate (fixed or floating)</li>
                      <li>Income and employment status</li>
                    </ul>
                    You can check with different lenders to compare rates before
                    applying.
                  </>
                ),
              },
              {
                question: "How long is the repayment period for home loans?",
                answer: (
                  <>
                    The repayment tenure for home loans typically ranges from{" "}
                    <strong>5 to 30 years</strong>. The tenure you choose
                    affects your EMI payments:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>
                        Shorter tenure = Higher EMI, but lower total interest
                        paid
                      </li>
                      <li>
                        Longer tenure = Lower EMI, but higher total interest
                        paid
                      </li>
                    </ul>
                    It's essential to balance your monthly budget while
                    selecting an appropriate tenure.
                  </>
                ),
              },
              {
                question:
                  "What documents are required to apply for a home loan?",
                answer: (
                  <>
                    To apply for a home loan, you typically need the following
                    documents:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>
                        Identity proof (Aadhar Card, PAN Card, Passport, etc.)
                      </li>
                      <li>Address proof (Utility bill, Voter ID, etc.)</li>
                      <li>
                        Income proof (Salary slips, bank statements, ITR
                        documents)
                      </li>
                      <li>
                        Property-related documents (Sale agreement, title deed,
                        etc.)
                      </li>
                    </ul>
                    Different lenders may require additional documents based on
                    their policies.
                  </>
                ),
              },
              {
                question: "How is home loan eligibility calculated?",
                answer: (
                  <>
                    Lenders assess home loan eligibility based on factors like:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Income and employment stability</li>
                      <li>
                        Credit score (Higher score improves approval chances)
                      </li>
                      <li>Existing liabilities and debts</li>
                      <li>Property value and loan amount</li>
                    </ul>
                    You can use an online **Home Loan Eligibility Calculator**
                    to get an estimate before applying.
                  </>
                ),
              },
              {
                question: "Can I get a home loan with a low credit score?",
                answer: (
                  <>
                    Yes, you can still get a home loan with a low credit score,
                    but it may come with:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Higher interest rates</li>
                      <li>Stricter eligibility criteria</li>
                      <li>Lower loan approval amount</li>
                    </ul>
                    To improve your chances, consider **increasing your credit
                    score** by paying off existing debts and maintaining a good
                    repayment history.
                  </>
                ),
              },
              {
                question: "Can I prepay my home loan before the tenure ends?",
                answer: (
                  <>
                    Yes, most banks allow home loan prepayment. However, some
                    lenders may charge a **prepayment penalty**, especially for
                    fixed-rate loans. Benefits of prepayment include:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>Reduced interest burden</li>
                      <li>Faster loan closure</li>
                      <li>Improved financial flexibility</li>
                    </ul>
                    Check your loan agreement for prepayment terms before
                    proceeding.
                  </>
                ),
              },
              {
                question: "What are the additional charges in a home loan?",
                answer: (
                  <>
                    Apart from the principal and interest, home loans may have
                    additional charges such as:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                      <li>
                        <strong>Processing fee:</strong> 0.5% to 2% of the loan
                        amount
                      </li>
                      <li>
                        <strong>Legal and valuation charges:</strong> Based on
                        the lender's policies
                      </li>
                      <li>
                        <strong>Late payment fees:</strong> If EMIs are not paid
                        on time
                      </li>
                      <li>
                        <strong>Prepayment or foreclosure charges:</strong> If
                        the loan is repaid before the tenure
                      </li>
                    </ul>
                    It's important to factor in these costs when planning your
                    loan.
                  </>
                ),
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer"
              >
                <summary className="text-lg font-bold text-gray-800">
                  {faq.question}
                </summary>
                <div className="text-gray-600 mt-2">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLoanPage;
