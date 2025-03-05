"use client";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp, IoMdLogIn } from "react-icons/io";
import { signIn, signOut, useSession } from "next-auth/react";
import { Dialog } from "@headlessui/react";
// Import Firebase client instance
import Link from "next/link";

export default function SignIn() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { data: session } = useSession();

  // Phone.Email Integration
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.phone.email/sign_in_button_v1.js";
    script.async = true;
    document.querySelector(".pe_signin_button")?.appendChild(script);

    (window as any).phoneEmailListener = async function (userObj: any) {
      const user_json_url = userObj.user_json_url;
      localStorage.setItem("user_json_url", user_json_url);

      try {
        // Fetch user details from the URL
        const response = await fetch(
          `/api/getPhoneDetails?url=${encodeURIComponent(user_json_url)}`
        );
        const userData = await response.json();

        console.log("User Verified:", userData);

        // Store the user data (you may use context, session, or state)
        localStorage.setItem("user_phone", userData.user_phone_number);
      } catch (error) {
        console.error("Error fetching phone details:", error);
      }
    };

    return () => {
      (window as any).phoneEmailListener = null;
    };
  }, []);

  // Navigation menu items
  const navItems = [
    {
      label: "All Products",
      content: (
        <div className="grid grid-cols-4 gap-2 p-6 w-[1600px] mx-0">
          <div>
            <h3 className="font-bold text-main-bg mb-3">LOANS</h3>
            <ul className="text-gray-700 space-y-2 text-[13px]">
              <li>Personal Loan</li>
              <li>Micro Loan (Under ₹50K)</li>
              <li>Business Loan</li>
            </ul>
          </div>
          <div className="pt-9">
            <ul className="text-gray-700 space-y-2 text-[13px]">
              <a
                href="/creditProducts/home-loan/main-page"
                className="text-gray-700 hover:underline"
              >
                Home Loan
              </a>
              <li>Loan Against Property</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-main-bg mb-3">OTHER PRODUCTS</h3>
            <ul className="text-gray-700 text-[13px]">
              <li>
                Credit Score{" "}
                <span className="text-green-500 font-bold">FREE</span>
              </li>
              <a
                href="/creditProducts/credit-card"
                className="text-gray-700 hover:underline"
              >
                Credit Card
              </a>
              <li>Step-Up Card</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-main-bg mb-3">LOAN TRANSFER</h3>
            <ul className="text-gray-700 text-[13px]">
              <li>Personal Loan Balance Transfer</li>
              <li>Home Loan Balance Transfer</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Learn & Resources",
      content: (
        <div className="grid grid-cols-4 gap-2 p-6 w-[1600px] mx-0">
          <div className="w-[90%]">
            <h3 className="font-bold text-main-bg mb-3">LEARN</h3>
            <ul className="text-gray-700 text-[13px]">
              <li>Aadhaar Card</li>
              <li>PAN Card</li>
              <li>PPF (Public Provident Fund)</li>
              <li>EPF (Employee Provident Fund)</li>
            </ul>
          </div>
          <div className="pt-9">
            <ul className="text-gray-700 text-[13px]">
              <li>Income Tax</li>
              <li>FAQs</li>
              <li>Banking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-main-bg mb-3">RESOURCES</h3>
            <ul className="text-gray-700 text-[13px]">
              <li>
                Credit Card Rewards Calculator{" "}
                <span className="text-red-500 font-bold">NEW</span>
              </li>
              <li>Personal Loan EMI Calculator</li>
              <li>Home Loan EMI Calculator</li>
              <li>Loan Against Property EMI Calculator</li>
              <li>FD Calculator</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-main-bg mb-3">INTEREST RATES</h3>
            <ul className="text-gray-700 text-[13px]">
              <li>Personal Loan Interest Rate</li>
              <li>Business Loan Interest Rate</li>
              <li>Home Loan Interest Rate</li>
              <li>Best Credit Cards</li>
              <li>Best Personal Loan</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Contact Us", // No dropdown here
      content: null,
    },
  ];

  function setIsOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      {/* Navbar Section */}
      <div className="flex items-center bg-white px-4 sm:px-8 lg:px-36 pt-4">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 sm:h-20 lg:h-24 w-auto cursor-pointer"
          />
        </Link>

        {/* Navigation Links (Near Logo) */}
        <div className="ml-16 flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === item.label ? null : item.label
                )
              }
            >
              <button
                className="flex items-center space-x-1 hover:text-main-bg"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.label ? null : item.label
                  )
                }
              >
                <span>{item.label}</span>
                {item.content &&
                  (activeDropdown === item.label ? (
                    <IoIosArrowUp className="w-4 h-4" />
                  ) : (
                    <IoIosArrowDown className="w-4 h-4" />
                  ))}
              </button>

              {/* Full-width Dropdown Content */}
              {activeDropdown === item.label && item.content && (
                <div className="fixed left-0 top-28 w-full bg-white border border-gray-300 shadow-md z-50">
                  <div className="w-full px-12 py-6">
                    {" "}
                    {/* 👈 Reduced padding */}
                    <div className="grid grid-cols-4 gap-4 max-w-[95%] mx-auto">
                      {" "}
                      {/* 👈 Reduced gap */}
                      {item.content}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ml-auto relative">
          {session ? (
            <div className="relative">
              {/* User Avatar and Dropdown Toggle */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-200 px-2 py-1 rounded-md text-[6px] font-medium hover:bg-gray-300 transition"
              >
                <img
                  src="/avatar.svg"
                  className="w-6 h-6 rounded-full object-cover"
                  alt="User"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200">
                  <p className="px-4 py-2 text-sm text-gray-700 border-b">
                    {session.user?.name}
                  </p>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setIsSignInOpen(true)}
              className="bg-gray-200 text-[#f3972d] px-4 py-2 rounded-md text-[14px] font-medium flex items-center hover:bg-gray-300 transition"
            >
              <IoMdLogIn className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      <div id="recaptcha-container"></div>
      <Dialog
        open={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <Dialog.Panel className="bg-white w-[90%] sm:w-[80%] lg:w-[70%] max-h-screen lg:max-h-[520px] rounded-lg shadow-xl relative flex flex-col lg:flex-row">
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Left Side - QR Code Section */}
            <div className="bg-[#ce8a3c] rounded-t-lg lg:rounded-l-lg flex items-center justify-center w-full lg:w-[40%] lg:p-3 p-1 text-white">
              {/* iPhone Frame */}
              <div className="relative bg-black w-40 sm:w-48 lg:w-60 h-[380px] sm:h-[420px] lg:h-[450px] rounded-[40px] border-[8px] border-black shadow-lg flex flex-col items-center py-3">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-md"></div>

                {/* White Screen */}
                <div className="bg-white w-full h-full rounded-[32px] flex flex-col items-center pb-6 pt-10 px-4">
                  {/* Login Text */}
                  <p className="text-[13px] sm:text-[15px] font-bold text-black">
                    Login with QR Code
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-gray-500 text-center leading-tight mt-1">
                    Open the credit-debit app, tap on the menu, and tap Scan.
                  </p>

                  <div className="relative mt-4 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-white flex items-center justify-center rounded-md shadow-lg overflow-hidden border border-gray-300">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com"
                      alt="Mock QR Code"
                      className="w-24 h-24"
                    />
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-green-500 animate-scan"></div>
                  </div>

                  {/* Scan Now Link */}
                  <p className="text-[11px] sm:text-[13px] font-medium mt-4 text-[#f3972d] cursor-pointer">
                    Scan Now
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full sm:w-1/2 lg:w-1/2 pl-6 sm:pl-10 lg:pl-32 pr-6 sm:pr-12 lg:pr-16 lg:py-10 py-4 relative text-center flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 lg:mb-6 mb-2">
                Login to your account
              </h2>

              {/* Google Sign-In Button */}
              <button
                onClick={() => signIn("google")}
                className="flex items-center justify-center w-full border border-black rounded-md px-5 py-3 hover:bg-gray-100 shadow-sm text-black"
              >
                <span className="w-5 h-5 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4285F4"
                      d="M24 9.5c3.38 0 6.44 1.16 8.89 3.07l6.67-6.48C34.62 2.23 29.65 0 24 0 14.98 0 7.29 5.41 3.42 13.26l7.92 6.14C13.1 12.58 18.06 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.9 24.5c0-1.41-.13-2.77-.37-4.08H24v8.68h13.15c-.59 3.08-2.26 5.69-4.79 7.44l7.7 5.98c4.51-4.16 7.07-10.3 7.07-17.02z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M11.07 28.72c-1.47-.43-2.81-1.14-3.98-2.07l-7.92 6.14c2.85 5.59 8.16 9.97 14.47 11.44l7.73-6.05c-4.45-1.34-8.13-4.46-10.3-8.46z"
                    />
                    <path
                      fill="#EA4335"
                      d="M24 48c5.97 0 11.38-1.97 15.7-5.32l-7.7-5.98c-2.3 1.55-5.2 2.48-8 2.48-6.41 0-11.83-4.15-13.79-9.89l-7.92 6.14C7.29 42.59 14.98 48 24 48z"
                    />
                  </svg>
                </span>
                Continue with Google
              </button>

              {/* Divider with Text */}
              <div className="relative lg:mt-8 lg:mb-8 mt-6 mb-4 flex items-center text-black w-full">
                <div className="w-full border-t border-gray-300"></div>
                <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-[13px] text-black">
                  or continue with mobile number
                </span>
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl px-6 sm:px-10 lg:px-12 py-4 bg-white flex flex-col items-center text-center mx-auto">
                <div
                  className="pe_signin_button"
                  data-client-id="15695407177920574360"
                ></div>
              </div>

              {/* Terms & Conditions */}
              <div className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                By logging in, you agree to the following
                <div>
                  <a href="#" className="text-[#f3972d] font-medium">
                    Credit Report Terms of Use
                  </a>
                  ,
                  <a href="#" className="text-[#f3972d] font-medium">
                    Terms of Use and Privacy Policy
                  </a>
                  .
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
