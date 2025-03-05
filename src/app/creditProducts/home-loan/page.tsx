"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa"; // Home Loan Icon

interface FormData {
  loanAmount: string;
  tenure: string;
  employmentType: string;
  coApplicant: string;
  repaymentType: string;
  propertyType: string;
  ltvRatio: string;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    loanAmount: "",
    tenure: "",
    employmentType: "",
    coApplicant: "",
    repaymentType: "",
    propertyType: "",
    ltvRatio: "",
  });

  const router = useRouter();

  const handleNext = () => {
    if (formData[stepData[step - 1].name as keyof FormData]) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const queryParams = new URLSearchParams(
      Object.entries(formData).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    console.log(
      "Redirecting to:",
      `/creditProducts/home-loan/homeloan-options?${queryParams}`
    );

    router.push(`/creditProducts/home-loan/homeloan-options?${queryParams}`);
  };

  const stepData = [
    {
      title: "Home Loan Amount",
      name: "loanAmount",
      options: ["₹10L - ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹3Crs", "₹3Crs+"],
      description: "Select the amount you need to purchase your dream home.",
    },
    {
      title: "Select Tenure",
      name: "tenure",
      options: ["1-5 Years", "5-10 Years", "10-20 Years", "20-30 Years"],
      description:
        "Choose the repayment period that suits your financial plans.",
    },
    {
      title: "Employment Type",
      name: "employmentType",
      options: [
        "Salaried",
        "Self-Employed",
        "Government Employee",
        "Student",
        "Retired",
      ],
      description: "Your employment type helps determine loan eligibility.",
    },
    {
      title: "Add a Co-Applicant?",
      name: "coApplicant",
      options: ["No", "Spouse", "Parent", "Sibling", "Other"],
      description: "Adding a co-applicant may increase your loan eligibility.",
    },
    {
      title: "Repayment Type",
      name: "repaymentType",
      options: ["EMI-Based", "Flexi Loan with Overdraft Facility"],
      description: "Select the repayment type that works best for you.",
    },
    {
      title: "Loan-to-Value (LTV) Ratio",
      name: "ltvRatio",
      options: [
        "75% - Lower EMI",
        "80% - Balanced",
        "90% - Minimal Down Payment",
      ],
      description: "LTV ratio affects your loan amount and down payment.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white py-5">
      {/* Left Side - Content Section */}
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center p-12 bg-main-bg text-white">
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4">Home Loan</h2>
          <p className="text-md max-w-xl">
            Owning a house and calling it your home is a dream many of us carry
            in our hearts.
            <span className="font-semibold text-gray-700">
              {" "}
              Secure the best home loan deals{" "}
            </span>
            and achieve your dream with{" "}
            <span className="text-main-sbg font-semibold">
              {" "}
              lowest rates{" "}
            </span>{" "}
            and
            <span className="text-main-tbg font-semibold"> easy approval</span>.
          </p>
          <img
            src="/home-loan.jpg"
            alt="Home Loan"
            className="w-3/4 mt-8 mix-blend-multiply"
          />
        </div>
      </div>

      {/* Right Side - Multi-Step Form */}
      <div className="md:w-[60%] bg-white px-10 py-9 flex flex-col min-h-screen">
        <div className="max-w-xl mx-auto">
          {/* Header - Home Loan & Step Indicator */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <FaHome className="text-main-bg text-3xl" />
              <h2 className="text-md font-semibold text-gray-700">Home Loan</h2>
            </div>
            <h2 className="text-md font-semibold text-gray-600">
              Step {step}/7
            </h2>
          </div>

          {/* Steps 1-6 */}
          {step <= 6 && (
            <>
              <h1 className="text-2xl font-bold text-main-bg mb-1">
                {stepData[step - 1].title}
              </h1>
              <div className="w-16 h-[2px] bg-pink-500 mb-3"></div>
              <p className="text-sm text-gray-600 mb-6">
                {stepData[step - 1].description}
              </p>

              {/* Radio Options */}
              <div className="grid grid-cols-2 gap-4">
                {stepData[step - 1].options.map((option) => (
                  <label
                    key={option}
                    className={`flex flex-col p-4 rounded-lg border-2 transition-all cursor-pointer text-md
                    ${
                      formData[stepData[step - 1].name as keyof FormData] ===
                      option
                        ? "border-main-bg bg-blue-50 text-main-bg font-semibold shadow-md"
                        : "border-gray-300 text-gray-700 bg-white"
                    }`}
                  >
                    <span className="mb-1">{option}</span>
                    <span className="text-xs text-gray-500">
                      {stepData[step - 1].description}
                    </span>
                    <input
                      type="radio"
                      name={stepData[step - 1].name}
                      value={option}
                      checked={
                        formData[stepData[step - 1].name as keyof FormData] ===
                        option
                      }
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                ))}
              </div>
            </>
          )}
          {/* Step 7 - Loan Summary */}
          {step === 7 && (
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Loan Summary
              </h3>
              <div className="bg-white p-4 rounded-lg shadow">
                {Object.entries(formData).map(([key, value]) => (
                  <p key={key} className="text-lg text-gray-700">
                    <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {value}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handlePrev}
                className="px-6 py-3 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
              >
                Back
              </button>
            )}
            <button
              onClick={() => {
                if (step < 7) {
                  handleNext();
                } else {
                  console.log("Submitting form...");
                  handleSubmit();
                }
              }}
              disabled={
                step < 7 &&
                !formData?.[stepData[step - 1]?.name as keyof FormData]
              }
              className={`px-6 py-3 rounded-lg text-white ${
                step < 7
                  ? formData?.[stepData[step - 1]?.name as keyof FormData]
                    ? "bg-main-bg hover:bg-hover"
                    : "bg-gray-300 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {step < 7 ? "Continue" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
