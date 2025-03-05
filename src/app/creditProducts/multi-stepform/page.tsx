"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BanknotesIcon,
  AdjustmentsVerticalIcon,
  TrophyIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const MultiStepForm: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    employmentType: "",
    salary: "",
    age: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value ? Number(e.target.value) : "",
    });
  };

  const handleSelect = (type: string) => {
    setFormData({ ...formData, employmentType: type });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    router.push(
      `/creditProducts/creditCardList?employment=${formData.employmentType}&salary=${formData.salary}&age=${formData.age}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row py-5 bg-white">
      {/* Left Side - Info Section */}
      <div className="lg:w-1/2 w-full bg-gradient-to-r from-blue-600 to-main-tbg text-white flex flex-col justify-center items-center p-6 lg:p-12 pt-10 lg:pt-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 lg:mb-6 text-center leading-tight">
          Find the Perfect Credit Card
        </h2>
        <ul className="space-y-4 lg:space-y-6 text-base lg:text-lg text-center">
          {[
            {
              icon: (
                <BanknotesIcon className="w-6 lg:w-8 h-6 lg:h-8 text-yellow-400" />
              ),
              text: "50+ Credit Cards from Leading Banks",
            },
            {
              icon: (
                <AdjustmentsVerticalIcon className="w-6 lg:w-8 h-6 lg:h-8 text-blue-400" />
              ),
              text: "Compare Features & Benefits Easily",
            },
            {
              icon: (
                <TrophyIcon className="w-6 lg:w-8 h-6 lg:h-8 text-green-400" />
              ),
              text: "Get Exclusive Rewards & Offers",
            },
            {
              icon: (
                <RocketLaunchIcon className="w-6 lg:w-8 h-6 lg:h-8 text-red-400" />
              ),
              text: "Hassle-Free & Quick Application",
            },
          ].map(({ icon, text }, index) => (
            <li key={index} className="flex items-center gap-3 lg:gap-4">
              {icon}
              <span className="font-semibold text-gray-900">{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 lg:mt-10">
          <img
            src="/applycredit.png"
            alt="Credit Card Application"
            className="w-40 lg:w-60"
          />
        </div>
      </div>

      {/* Right Side - Multi-Step Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-white text-black px-4 lg:px-0">
        <div className="w-full max-w-lg p-6 lg:p-8 bg-white">
          {step === 1 && (
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-blue-900">
                Employment Type
              </h2>
              <p className="text-gray-600 text-sm mb-4 lg:mb-6">
                We require this information to recommend the best cards for you.
              </p>

              <div className="space-y-3 lg:space-y-4">
                {[
                  {
                    type: "Salaried",
                    description: "Receives fixed monthly income",
                  },
                  {
                    type: "Self-Employed",
                    description: "Doctor, CA, Business Owner, etc.",
                  },
                  {
                    type: "Government Employee",
                    description: "Works in a government sector job",
                  },
                  {
                    type: "Student",
                    description: "Currently pursuing education",
                  },
                  {
                    type: "Retired",
                    description:
                      "No active employment, living on pension/savings",
                  },
                ].map(({ type, description }) => (
                  <div
                    key={type}
                    className={`p-3 lg:p-4 border rounded-lg cursor-pointer ${
                      formData.employmentType === type
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleSelect(type)}
                  >
                    <h3 className="text-blue-900 font-semibold">{type}</h3>
                    <p className="text-gray-500 text-sm">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 lg:mt-6">
                <button
                  onClick={nextStep}
                  className="w-full py-2 lg:py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                  disabled={!formData.employmentType}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <button
                onClick={prevStep}
                className="text-gray-600 hover:text-blue-600 mb-3 lg:mb-4"
              >
                ← Back
              </button>

              <h2 className="text-xl lg:text-2xl font-bold text-blue-900">
                Your Monthly Salary & Age
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                We require this information to suggest the best credit cards for
                you.
              </p>

              <div className="mt-4 lg:mt-6">
                <label className="block text-gray-700 font-semibold text-sm mb-1 lg:mb-2">
                  Monthly Income
                </label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full p-2 lg:p-3 border rounded-lg text-base lg:text-lg font-semibold"
                  placeholder="Enter your monthly income"
                />
              </div>

              <div className="mt-3 lg:mt-4">
                <label className="block text-gray-700 font-semibold text-sm mb-1 lg:mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 lg:p-3 border rounded-lg text-base lg:text-lg font-semibold"
                  placeholder="Enter your age"
                />
              </div>

              <div className="mt-6 lg:mt-8">
                <button
                  onClick={nextStep}
                  className="w-full py-2 lg:py-3 bg-blue-700 text-white font-semibold rounded-lg text-lg hover:bg-blue-800 transition"
                  disabled={!formData.salary || !formData.age}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <button
                onClick={prevStep}
                className="text-gray-600 hover:text-blue-600 mb-3 lg:mb-4"
              >
                ← Back
              </button>

              <h2 className="text-xl lg:text-2xl font-bold text-blue-900">
                Your Current Residential PIN Code
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                We require this information to identify banks that can serve you
                the best.
              </p>

              <div className="mt-4 lg:mt-6">
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full p-2 lg:p-3 border rounded-lg text-base lg:text-lg font-semibold"
                  placeholder="Enter your PIN Code"
                />
              </div>

              <div className="mt-6 lg:mt-8">
                <button
                  onClick={handleSubmit}
                  className="w-full py-2 lg:py-3 bg-green-600 text-white font-semibold rounded-lg text-lg hover:bg-green-700 transition"
                  disabled={!formData.pincode}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
