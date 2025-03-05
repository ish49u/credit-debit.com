import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-12">
      <div className="container mx-auto px-6 sm:px-12 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4 text-center sm:text-left">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="lg:text-lg text-md font-bold text-[#f3972d]">
              CREDIT-DEBIT.COM
            </h2>
            <p className="mt-2 text-gray-300 lg:text-sm text-xs leading-relaxed">
              Your trusted partner for credit cards, loans & financial
              solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="lg:text-lg text-md font-semibold text-[#f3972d] lg:mb-4 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 lg:text-sm text-xs text-gray-300">
              <li>
                <a
                  href="/"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Loans
                </a>
              </li>
              <li>
                <a
                  href="/creditProducts/credit-card"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Credit Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="lg:text-lg text-md font-semibold text-[#f3972d] lg:mb-4 mb-2">
              Legal
            </h3>
            <ul className="space-y-3 lg:text-sm text-xs text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f3972d] transition duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="lg:text-lg text-md font-semibold text-[#f3972d] mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-4 lg:text-lg text-sm lg:justify-start">
              <a
                href="#"
                className="text-gray-300 hover:text-[#f3972d] transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#f3972d] transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#f3972d] transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#f3972d] transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 lg:mt-8 lg:pt-5 mt-4 pt-3 text-center lg:text-sm text-xs text-gray-400">
          © {new Date().getFullYear()} CREDIT-DEBIT.COM All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
