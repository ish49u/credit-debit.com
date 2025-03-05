export interface CreditCard {
  name: string;
  bank: string;
  affiliateLink: string;
  benefits?: string[];
  features?: string[];
  imageUrl?: string;
  description?: string;
  eligibility: {
    employmentStatus: "Salaried, Self-Employed",
    newToCredit?: boolean; // ✅ Made optional
    cibilScore?: number; // ✅ Made optional
    income?: {
      salaried?: number;
      selfEmployed?: number;
    };
    age?: { min: number; max: number };
  };
  fees: {
    joining: number | string;
    annual: number | string;
    annualWaiver?: { spend: number };
  };
  charges?: {
    interestRate?: number | string;
    cashWithdrawal?: string;
  };
  conditions?: string[];
  terms?: string[];
  documents?: string[];
  customizationOptions?: { price: number; benefits: string[] }[];
}


export const creditCardsList = [
  {
    bank: "Axis",
    affiliateLink: "https://bitli.in/wxLDjKK",
    name: "Axis Flipkart Credit Card",
    imageUrl: "/credit-cards/credit-card.jpg", // 👈 Add the image URL
    description:
      "Enjoy accelerated cashback across all your favourite categories!",
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      newToCredit: false,
      cibilScore: 730,
      income: {
        salaried: 15000,
        selfEmployed: 30000,
      },
      age: { min: 21, max: 70 },
    },
    fees: {
      joining: "Nil",
      annual: "Nil",
    },
    terms: [
      "Please use your Aadhar linked Mobile number to complete the application",
      "If you are an existing Axis Bank customer Please use the already registered mobile number to complete your application",
      "Your full name is mandatory to apply for Axis Credit card, applications with a single name will not be accepted",
      "If you were/are using any AXIS Credit card, you are not eligible for Profit",
      "Tracking Time: 72 Hours after Application ID Generation",
      "Confirmation Timeline: Within 75 Days of Card Activation",
      "A Minimum transaction of Rs 100 is required within 30 days to activate the card",
      "If you apply for a different card upon redirecting, you will be eligible for the profit applicable on the card applied",
      "Profits on Axis Bank App applications: Not Applicable",
      "Profit on Referral Earnings: Not Applicable",
    ],
  },
  {
    bank: "Axis",
    affiliateLink: "https://bitli.in/0s7M38B",
    name: "Axis MyZone Credit Card",
    imageUrl: "/credit-cards/credit-card1.png",
    description:
      "Entry level card offering benefits across Shopping, Dining and Entertainment!",
    features: [
      "Upto Rs 1000 Off on AJIO on minimum spends of Rs 2999 on select styles",
      "4 Complimentary Lounge access on select domestic airports (1 per quarter)",
      "4 EDGE REWARDS points per Rs 200 spent (Not Applicable on fuel, movie, Insurance, Wallet, Rent, Utilities, Education, Government Institutions and EMI transactions)",
      "Dining delights offering Upto 15% Off at partner restaurants in India (Max Discount Rs 500)",
      "1% Fuel Surcharge waiver at all petrol pumps across the country for spends between Rs 400 to Rs 4000",
    ],
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 15000,
        selfEmployed: 30000,
      },
      newToCredit: false,
      cibilScore: 730,
      age: { min: 21, max: 65 },
    },
    documents: [
      "PAN Card/Form 60",
      "Colour photograph",
      "Address proof",
      "ID Proof",
      "Income proof",
    ],
    terms: [
      "Please use your Aadhar linked Mobile number to complete the application",
      "If you are an existing Axis Bank customer Please use the already registered mobile number to complete your application",
      "Your full name is mandatory to apply for Axis Credit card, applications with a single name will not be accepted",
      "If you were/are using any AXIS Credit card, you are not eligible for Profit",
      "Tracking Time: 72 Hours after Application ID Generation",
      "Confirmation Timeline: Within 75 Days of Card Activation",
      "A Minimum transaction of Rs 100 is required within 30 days to activate the card",
      "If you apply for a different card upon redirecting, you will be eligible for the profit applicable on the card applied",
      "Profits on Axis Bank App applications: Not Applicable",
      "Profit on Referral Earnings: Not Applicable",
    ],
  },
  {
    bank: "Axis",
    affiliateLink: "https://bitli.in/s0wVW1G",
    name: "Axis Indian Oil Credit Card",
    imageUrl: "/credit-cards/credit-card2.jpg",
    description: "Designed to benefit you on every fuel transaction!",
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 15000,
        selfEmployed: 30000,
      },
      newToCredit: false,
      age: { min: 21, max: 60 },
    },
    terms: [
      "Please use your Aadhar linked Mobile number to complete the application",
      "If you are an existing Axis Bank customer Please use the already registered mobile number to complete your application",
      "Your full name is mandatory to apply for Axis Credit card, applications with a single name will not be accepted",
      "If you were/are using any AXIS Credit card, you are not eligible for Profit",
      "Tracking Time: 72 Hours after Application ID Generation",
      "Confirmation Timeline: Within 75 Days of Card Activation",
      "A Minimum transaction of Rs 100 is required within 30 days to activate the card",
      "If you apply for a different card upon redirecting, you will be eligible for the profit applicable on the card applied",
      "Profits on Axis Bank App applications: Not Applicable",
      "Profit on Referral Earnings: Not Applicable",
    ],
  },
  {
    bank: "Axis",
    affiliateLink: "https://bitli.in/v5fAf3D",
    name: "Axis Magnus Credit Card",
    imageUrl: "/credit-cards/credit-card3.png",
    description:
      "India's most rewarding credit card for travel, food and online shopping!",
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 15000,
        selfEmployed: 30000,
      },
      newToCredit: false,
      age: { min: 21, max: 60 },
    },
    fees: {
      joining: "Rs 12,500",
      annual: "Rs 12,500 + Taxes",
      interestRate: "2.5% per month",
    },
    terms: [
      "PAN Card",
      "Address proof (Utility Bills, Aadhar Card, Driving License, Ration card etc)",
      "ID Proof (Aadhar card, Voter ID card, Driving License, Passport etc)",
      "Income Proof (Salary Slip, Bank Statement, Form 16 etc)",
    ],
  },
  {
    name: "Axis Indian Oil Rupay Credit Card",
    bank: "Axis Bank",
    affiliateLink: "https://bitli.in/Un3eXSx",
    imageUrl: "/credit-cards/credit-card4.jpg",
    benefits: [
      "Accelerated rewards on fuel and other expenses",
      "100% Cashback upto Rs 250 on all fuel spends within first 30 days",
      "10% instant discount on movie tickets via BookMyShow",
      "Upto 15% Discount on partner Restaurants",
    ],
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      newToCredit: false,
      cibilScore: 730,
      income: { salaried: 15000, selfEmployed: 30000 },
      age: { min: 21, max: 65 },
    },
    fees: {
      joining: 500,
      annual: 500,
      annualWaiver: { spend: 50000 },
    },
    charges: {
      interestRate: 3.6,
      cashWithdrawal: "2.5% (Min Rs 500)",
    },
    terms: [
      "Use Aadhaar linked Mobile number to apply",
      "Existing Axis Bank customers must use registered mobile number",
      "Full name is mandatory",
      "Not eligible for Profit if using an existing Axis Credit card",
      "Tracking Time: 72 Hours after Application ID Generation",
      "Confirmation Timeline: 75 Days of Card Activation",
      "Minimum transaction of Rs 100 required within 30 days",
    ],
  },
  {
    name: "Axis Airtel Credit Card",
    bank: "Axis Bank",
    affiliateLink: "https://bitli.in/UmC7puY",
    imageUrl: "/credit-cards/credit-card5.jpg",
    benefits: [
      "Get Rs 500 Amazon eVoucher on first transaction",
      "25% Cashback on Airtel bill payments via Airtel Thanks app",
      "10% Cashback on Swiggy, Zomato & BigBasket",
      "4 Complimentary lounge visits per year (based on spends)",
      "1% fuel surcharge waiver at all fuel stations",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      newToCredit: false,
      cibilScore: 730,
      income: { salaried: 15000, selfEmployed: 30000 },
      age: { min: 21, max: 70 },
    },
    fees: {
      joining: 500,
      annual: 500,
      annualWaiver: { spend: 200000 },
    },
    charges: {
      interestRate: 3.6,
      cashWithdrawal: "2.5% (Min Rs 500)",
    },
    terms: [
      "Use Aadhaar linked Mobile number to apply",
      "Existing Axis Bank customers must use registered mobile number",
      "Full name is mandatory",
      "Not eligible for Profit if using an existing Axis Credit card",
      "Tracking Time: 72 Hours after Application ID Generation",
      "Confirmation Timeline: 75 Days of Card Activation",
      "Minimum transaction of Rs 100 required within 30 days",
    ],
  },
  {
    bank: "AU",
    name: "LIT Credit Card",
    affiliateLink: "https://bitli.in/7oSM1dG",
    imageUrl: "/credit-cards/credit-card6.png",
    benefits: [
      "10% Instant Discount (Upto Rs 1,000) on Flipkart Orders Above Rs 10,000",
      "Additional 10% Off (Upto Rs 1000) on Myntra on orders above Rs 3999",
      "15% instant discount (Upto Rs 300 per month) on Tata CLiQ Orders Above Rs 500",
      "10% off on Groceries (Upto Rs 100) on Blinkit app orders above Rs 499",
    ],
    customizationOptions: [
      {
        price: 49,
        benefits: ["1% fuel surcharge waiver on fuel transactions"],
      },
      { price: 99, benefits: ["Complimentary 3 month Zee5 membership"] },
      {
        price: 199,
        benefits: [
          "1 complimentary Domestic Airport lounge visit per quarter",
          "2% additional cashback on achieving milestone spends",
          "Complimentary 3 month Amazon Prime membership",
          "5X Reward Points for online spends",
        ],
      },
      {
        price: 299,
        benefits: [
          "2 complimentary Domestic airport lounge visits",
          "5% additional cashback on milestone spending",
          "10X Reward Points for Offline",
          "5% cashback on Dining, Grocery, and Travel",
        ],
      },
      { price: 499, benefits: ["Complimentary 3 month Cult.fit membership"] },
    ],
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 25000,
        selfEmployed: 30000,
      },
      age: { min: 21, max: 60 },
      existingCard: true,
      creditScore: "700+",
    },
    fees: { joining: "Nil", annual: "Nil" },
  },
  {
    bank: "AU",
    name: "Altura Credit Card",
    affiliateLink: "https://bitli.in/VpErP9l",
    imageUrl: "/credit-cards/credit-card7.jpg",
    benefits: [
      "2% Cashback on grocery, departmental stores, and utility bills (Max Rs 50 per cycle)",
      "1% Cashback on all other retail spends (Max Rs 50 per cycle)",
      "2 complimentary railway lounge access per quarter",
      "1% Fuel Surcharge Waiver for transactions Rs 400 - Rs 5000",
    ],
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 25000,
        selfEmployed: 25000,
      },
      age: { min: 21, max: 60 },
      existingCard: true,
      creditScore: "700+",
    },
    fees: { joining: "Rs 199", annual: "Rs 199" },
  },
  {
    bank: "AU",
    name: "Altura Plus Credit Card",
    affiliateLink: "https://bitli.in/54v0A13",
    imageUrl: "/credit-cards/credit-card8.jpg",
    benefits: [
      "Get vouchers worth Rs 500 on minimum Rs 10,000 retail spends (within 60 days of card setup)",
      "500 Bonus Reward Points on retail spends of Rs 20,000 or more in a calendar month",
      "1.5% Cashback on all POS retail spends (Max Rs 100 per cycle)",
      "2 complimentary railway lounge access per quarter",
    ],
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 25000,
        selfEmployed: 25000,
      },
      age: { min: 21, max: 60 },
      existingCard: true,
      creditScore: "700+",
    },
    fees: { joining: "Rs 499", annual: "Rs 499" },
  },
  {
    bank: "SBI",
    name: "Simply Click Credit Card",
    affiliateLink: "https://bitli.in/97Xq0Pp",
    imageUrl: "/credit-cards/credit-card9.png",
    benefits: [
      "Amazon Gift Card worth Rs 500 on payment of Annual Fee",
      "10X Reward Points on online spends with select partners",
      "5X Reward Points on all other online spends",
      "1% fuel surcharge waiver for transactions Rs 500 - Rs 3000",
    ],
    eligibility: {
      employmentStatus: "Salaried or Self-Employed",
      income: {
        salaried: 30000,
        selfEmployed: 30000,
      },
      age: { min: 21, max: 60 },
      creditScore: "650+",
    },
    fees: { joining: "Rs 499", annual: "Rs 499" },
  },
  {
    bank: "SBI",
    name: "SBI Cashback Credit Card",
    affiliateLink: "https://bitli.in/ffxzmZF",
    imageUrl: "/credit-cards/credit-card10.jpg",
    benefits: [
      "5% Cashback on Online spends (capped at Rs 5000 per month)",
      "1% Cashback on Offline Spends",
      "1% Fuel Surcharge waiver up to Rs.100 per statement cycle",
      "Apply for up to 3 Add-on cards at no additional cost",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      income: {
        salaried: 30000,
        selfEmployed: 30000,
      },
      age: { min: 21, max: 65 },
      creditScore: 650,
      newToCredit: "Only for Salaried",
      noDelayedPayments: 12,
    },
    fees: {
      joining: "Rs 999 + GST",
      annual: "Rs 999 + GST (waived on annual spends of Rs 2 Lacs)",
    },
    tracking: {
      trackingTime: "72 Hours",
      confirmationTimeline: "75 Days after Activation",
      missingProfitTickets: "Accepted within 10 Days of Order Date",
    },
  },
  {
    bank: "SBI",
    name: "SBI BPCL Credit Card",
    affiliateLink: "https://bitli.in/4vuEved",
    imageUrl: "/credit-cards/credit-card11.jpg",
    benefits: [
      "2,000 Activation Bonus Reward Points worth Rs 500",
      "4.25% Valueback - 13X Reward Points on fuel purchases at BPCL petrol pumps",
      "3.25% + 1% Fuel surcharge waiver on BPCL transactions up to Rs 400",
      "5X Reward Points on Groceries, Departmental Stores, Movies & Dining",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      income: {
        salaried: 30000,
        selfEmployed: 30000,
      },
      age: { min: 21, max: 60 },
      creditScore: 650,
      newToCredit: "Only for Salaried",
      noDelayedPayments: 12,
    },
    fees: {
      joining: "Rs 499 + GST",
      annual: "Rs 499 + GST from second year onwards",
    },
    tracking: {
      trackingTime: "72 Hours",
      confirmationTimeline: "75 Days after Activation",
      missingProfitTickets: "Accepted within 10 Days of Order Date",
    },
  },
  {
    bank: "SBI",
    name: "SBI Miles Credit Card",
    affiliateLink: "https://bitli.in/kFDAHtu",
    imageUrl: "/credit-cards/credit-card12.jpg",
    benefits: [
      "1,500 Travel Credits as Welcome Gift on Rs 30,000 spends within 60 days",
      "Earn 2 Travel Credits per Rs 200 spent on travel",
      "Complimentary Priority Pass Program for the first 2 years",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      income: {
        salaried: 60000,
        selfEmployed: 72000,
      },
      age: { min: 21, max: 65 },
      creditScore: 750,
      newToCredit: false,
      noDelayedPayments: 12,
    },
    fees: {
      joining: "Rs 1499 + GST",
      annual: "Rs 1499 + GST (waived if spends >= Rs 6 Lakh per year)",
    },
    tracking: {
      trackingTime: "72 Hours",
      confirmationTimeline: "75 Days after Activation",
      missingProfitTickets: "Accepted",
    },
  },
  {
    bank: "IndusInd",
    name: "IndusInd Legend Credit Card",
    affiliateLink: "https://bitli.in/wwchli7",
    imageUrl: "/credit-cards/credit-card13.png",
    benefits: [
      "LIFETIME FREE Card - No Joining & Annual Fees",
      "Buy 1 Get 1 Free on BookMyShow - 3 Free tickets every month",
      "Instant Discount on Swiggy, EazyDinner & more",
      "Lowest Forex Markup Charge of 1.8%",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      income: { salaried: 80000, selfEmployed: 100000 },
      age: { min: 21, max: 65 },
      creditScore: 650,
      noDelayedPayments: 12,
      existingLoanOrCreditCard: true,
    },
    fees: {
      joining: "Nil",
      annual: "Nil",
    },
    tracking: {
      trackingTime: "72 Hours",
      confirmationTimeline: "75 Days after Activation",
      missingProfitTickets: "Accepted",
    },
  },
  {
    name: "IndusInd Platinum Credit Card",
    bank: "IndusInd",
    affiliateLink: "https://bitli.in/BvjZr5s",
    imageUrl: "/credit-cards/credit-card14.jpg",
    description:
      "Lifetime Free Credit Card with travel, lifestyle, and golf benefits.",
    benefits: [
      "Earn 1.5 Reward Points on every Rs 150 spent",
      "1% fuel waiver charge across India",
      "Complimentary ICICI Lombard Travel insurance",
      "Personal air accident cover of up to Rs 25 lakhs",
      "Upto Rs 1000 Off on EaseMyTrip",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      income: "Rs 20,000 (Salaried) / Rs 30,000 (Self-Employed)",
      age: { min: 21, max: 65 },
      creditScore: "650+",
      otherCriteria: [
        "No delayed payments in the last 12 months",
        "Existing Home or Auto Loan",
        "Existing credit card with limit > Rs 50,000",
      ],
    },
    fees: {
      joining: "Nil",
      annual: "Nil",
    },
    tracking: {
      cookieDuration: "30 Days",
      trackingTime: "Within 72 Hours after Application ID Generation",
      confirmationTime: "Within 75 Days of Card Activation",
      minTransaction: "Rs 100 within 30 days",
    },
  },
  {
    name: "IndusInd Tiger Credit Card",
    bank: "IndusInd",
    affiliateLink: "https://bitli.in/zN3I3TX",
    imageUrl: "/credit-cards/credit-card15.jpg",
    description: "Lifetime Free | No Joining or Annual Fees",
    benefits: [
      "Earn Upto 6 Reward points per Rs 100 spent",
      "8 Complimentary Domestic & 2 International lounge access a year",
      "One free movie ticket (Rs 500) every 6 months on BookMyShow",
    ],
    eligibility: {
      employmentStatus: ["Salaried", "Self-Employed"],
      income: {
        salaried: 20000,
        selfEmployed: 30000,
      },
      age: { min: 21, max: 65 },
      creditScore: "700+",
      otherCriteria: [
        "No delayed payments in the last 12 months",
        "Use Aadhaar linked mobile number for application",
      ],
    },
    fees: {
      joining: "Nil",
      annual: "Nil",
    },
    tracking: {
      cookieDuration: "N/A",
      trackingTime: "72 Hours after Application ID Generation",
      confirmationTime: "Within 75 Days of Card Activation",
      minTransaction: "Rs 100 within 30 days",
    },
  },
  {
    name: "HSBC Live Plus Credit Card",
    bank: "HSBC",
    affiliateLink: "https://bitli.in/HR6ks4B",
    imageUrl: "/credit-cards/credit-card16.jpg",
    description: "One of the best cashback credit cards in India!",
    benefits: [
      "10% accelerated cashback on dining, food delivery, and grocery spends",
      "4 complimentary domestic lounge visits per year",
      "1.5% unlimited cashback on all other spends",
    ],
    eligibility: {
      employmentStatus: ["Salaried"],
      income: {
        salaried: 55000,
      },
      age: { min: 21, max: 65 },
      creditScore: "750+",
      otherCriteria: [
        "Only for salaried individuals",
        "Must reside in specific cities (Delhi, Mumbai, Bangalore, etc.)",
      ],
    },
    fees: {
      joining: "Rs 999 + GST",
      annual: "Rs 999 + GST (waived on Rs 2L annual spend)",
    },
    tracking: {
      cookieDuration: "N/A",
      trackingTime: "72 Hours after Application ID Generation",
      confirmationTime: "Within 75 Days of Card Activation",
      minTransaction: "Rs 100 within 30 days",
    },
  },
  {
    name: "HSBC Platinum Credit Card",
    bank: "HSBC",
    affiliateLink: "https://bitli.in/BDd5490",
    imageUrl: "/credit-cards/credit-card17.jpg",
    description: "Lifetime FREE Credit Card - No Joining/Annual Fee",
    benefits: [
      "Earn 2 Reward points for every Rs 150 spent",
      "5X Reward points on annual spends exceeding Rs 4L",
      "Complimentary Amazon voucher worth Rs 500 on Rs 5000 spend in 30 days",
    ],
    eligibility: {
      income: "Rs 55,000 (Salaried)",
      age: { min: 21, max: 65 },
      creditScore: "750+",
      otherCriteria: [
        "Only for salaried individuals",
        "Must reside in specific cities (Delhi, Mumbai, Bangalore, etc.)",
      ],
    },
    fees: {
      joining: "Nil",
      annual: "Nil",
    },
    tracking: {
      cookieDuration: "N/A",
      trackingTime: "72 Hours after Application ID Generation",
      confirmationTime: "Within 75 Days of Card Activation",
      minTransaction: "Rs 100 within 30 days",
    },
  },
  {
    bank: "RBL",
    name: "RBL Bank Shoprite Credit Card",
    affiliateLink: "https://bitli.in/svy1C6P",
    imageUrl: "/credit-cards/credit-card18.png",
    description:
      "Save on Everyday Grocery Spends with RBL Bank Shoprite Credit Card.",
    features: [
      "Zero Joining Fee, spend based fee waiver from next year onwards",
      "Earn 20 reward points for every Rs 100 spent on Grocery shopping",
      "Discounts on Tata Cliq, Zomato, Swiggy, Zepto and more",
    ],
    eligibility: {
      age: { min: 21, max: 65 },
      employment: "Salaried and Self-Employed",
      income: "Rs 15,000/month (Salaried), Rs 2L/yr (Self-Employed)",
      creditScore: "720+",
      newToCredit: "Not Allowed",
    },
    fees: {
      joiningFee: "Nil",
      annualFee: "Nil (spend based waiver from next year)",
      waiver: "100% waiver on spends over Rs 40,000",
    },
    documentsRequired: [
      "PAN Card/Form 60",
      "Address proof",
      "ID Proof",
      "Income proof",
      "Bank Statement",
    ],
  },
  {
    bank: "Amex",
    name: "American Express SmartEarn Credit Card",
    affiliateLink: "https://bitli.in/LZgjFia",
    imageUrl: "/credit-cards/credit-card19.jpg",
    description:
      "Earn Membership Rewards and amazing discounts with American Express SmartEarn Credit Card.",
    features: [
      "Earn 10X Membership Rewards on Flipkart, Amazon, Uber",
      "5X Rewards on Paytm Wallet, Swiggy, BookMyShow",
      "Welcome Gift of 4,000 Bonus Membership Rewards Points",
    ],
    eligibility: {
      age: { min: 21, max: 60 },
      employment: "Salaried or Self-Employed",
      income: "Rs 6L/yr (Salaried & Self-Employed)",
      creditScore: "Good Standing Required",
      newToCredit: "Allowed",
    },
    fees: {
      joiningFee: "Rs 495 + GST",
      annualFee: "Rs 495 + GST (waived on Rs 1.5L spend)",
      waiver: "100% on Rs 1.5L spend, 50% on Rs 90,000 spend",
    },
    documentsRequired: [
      "PAN Card/Form 60",
      "Address Proof",
      "ID Proof",
      "Income Proof",
      "Bank Statement",
    ],
  },
  {
    bank: "Amex",
    name: "American Express Membership Rewards Credit Card",
    affiliateLink: "https://bitli.in/fYRzNZE",
    imageUrl: "/credit-cards/credit-card20.jpg",
    description:
      "Earn and redeem Membership Rewards with American Express Membership Rewards Credit Card.",
    features: [
      "Earn 1 Membership Reward Point for every Rs 50 spent",
      "Fuel convenience fee waiver",
      "Additional 1,000 Membership Rewards points on Rs 20,000 spend/month",
    ],
    eligibility: {
      age: { min: 21, max: 60 },
      employment: "Salaried or Self-Employed",
      income: "Rs 6L/yr (Salaried & Self-Employed)",
      creditScore: "Good Standing Required",
      newToCredit: "Allowed",
    },
    fees: {
      joiningFee: "Rs 1,000 + GST",
      annualFee: "Rs 4,500 + GST (waiver on Rs 1.5L spend)",
      waiver: "100% on Rs 1.5L spend, 50% on Rs 90,000 spend",
    },
    documentsRequired: [
      "PAN Card/Form 60",
      "Address Proof",
      "ID Proof",
      "Income Proof",
      "Bank Statement",
    ],
  },
];
