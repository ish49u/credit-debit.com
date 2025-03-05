export interface HomeLoan {
  bank: string;
  image: string;
  interestRate: string;
  processingFee: string;
  loanAmount: string;
  tenure: string;
  affiliateLink: string;
}

export const homeLoans: HomeLoan[] = [
  {
    bank: "SBI Home Loan",
    image: "/home-loan/home-loan.png",
    interestRate: "8.25% p.a. – 9.20% p.a. (Floating Rate)",
    processingFee:
      "0.35% onwards (min. Rs.2,000; max. Rs.10,000), currently NIL during campaign",
    loanAmount: "At the discretion of the bank",
    tenure: "1-30 Years",
    affiliateLink: "https://raas.sbi/sbi-loans",
  },
  {
    bank: "HDFC Home Loans",
    image: "/home-loan/home-loan1.png",
    interestRate: "Special: 8.75% - 9.65%* p.a., Standard: 9.40% - 9.95%* p.a.",
    processingFee: "0.5% or Rs.3,000, whichever is higher",
    loanAmount: "Contact the bank for details",
    tenure: "1-30 Years",
    affiliateLink: "https://www.hdfc.com/housing-loans/home-loans",
  },
  {
    bank: "Union Bank Home Loan",
    image: "/home-loan/home-loan2.png",
    interestRate:
      "8.10% - 10.50% (Floating) for salaried & non-salaried, 8.35%",
    processingFee: "0.50% or ₹15,000 Max",
    loanAmount: "Contact the bank for details",
    tenure: "1-30 Years",
    affiliateLink: "https://www.unionbankofindia.co.in/en/Details/home-loan",
  },
  {
    bank: "PNB Housing Home Loan",
    image: "/home-loan/home-loan3.png",
    interestRate: "8.50% p.a. onwards (Floating Rate) for up to Rs.35 lakh",
    processingFee: "Up to 0.5% of the loan amount (min ₹10,000)",
    loanAmount: "Up to 90% of the property cost",
    tenure: "1-30 Years",
    affiliateLink: "https://www.pnbindia.in/housingloanforpublic.html",
  },
  {
    bank: "LIC HFL Home Loan",
    image: "/home-loan/home-loan4.png",
    interestRate:
      "8.50% p.a. (salaried, up to Rs.5 crore), 8.75% p.a. (non-salaried)",
    processingFee: "₹50,000 - ₹60,000 + GST (Based on CIBIL score)",
    loanAmount: "₹10L - ₹3Crs",
    tenure: "5-30 Years",
    affiliateLink:
      "https://leads.lichousing.com/?utm_source=googleads&utm_medium=searchcampaign&utm_campaign=Brand_2024&gad_source=1&gbraid=0AAAAADpm5J19iPZzdEQDDOI7xGrkKxyc9&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CZ4ULjnTRoHQDYZNtCFTUiX-5cxKqHLn1A0GmQBoOLv_Qh4BhQ8BKRoCkb4QAvD_BwE",
  },
  {
    bank: "Axis Bank Home Loan",
    image: "/home-loan/home-loan5.png",
    interestRate: "8.75% p.a. (salaried), 9.10% p.a. (self-employed)",
    processingFee: "Up to 1%",
    loanAmount: "₹10L - ₹5Crs",
    tenure: "1-30 Years",
    affiliateLink:
      "https://www.axisbank.com/retail/loans/home-loan?cta=product-life-goal-card2",
  },
  {
    bank: "Aditya Birla Capital Home Loan",
    image: "/home-loan/home-loan6.png",
    interestRate: "8.60% p.a. onwards",
    processingFee: "Up to 1.00% of the loan amount + applicable tax",
    loanAmount: "Contact the bank for details",
    tenure: "1-30 Years",
    affiliateLink: "https://homefinance.adityabirlacapital.com/home-loan",
  },
  {
    bank: "Karnataka Bank Home Loan",
    image: "/home-loan/home-loan7.png",
    interestRate: "8.89% - 10.91% p.a. (Floating Rate)",
    processingFee: "Contact the bank for details",
    loanAmount: "Up to ₹5Crs",
    tenure: "1-30 Years",
    affiliateLink: "https://karnatakabank.com/personal/loans/home-loans",
  },
  {
    bank: "IDFC Home Loan",
    image: "/home-loan/home-loan8.png",
    interestRate: "8.85% p.a. onwards",
    processingFee: "Up to 3%",
    loanAmount: "₹1L - ₹5Crs",
    tenure: "5-30 Years",
    affiliateLink:
      "https://www.idfcfirstbank.com/personal-banking/loans/home-loan/home-loan-interest-rates",
  },
  {
    bank: "Bank Of Baroda Home Loan",
    image: "/home-loan/home-loan9.png",
    interestRate: "8.15% - 10.35% p.a. (Floating Rate)",
    processingFee: "Contact the bank for information",
    loanAmount: "₹1L - Up to 10 Crore",
    tenure: "Up to 30 Years",
    affiliateLink:
      "https://www.bankofbaroda.in/personal-banking/loans/home-loan/baroda-home-loan-takeover-scheme",
  },
  {
    bank: "Canara Bank Home Loan",
    image: "/home-loan/home-loan10.png",
    interestRate: "8.15% - 11.00% p.a.",
    processingFee: "0.50% (min. Rs.1,500; max. Rs.10,000)",
    loanAmount: "₹1L - ₹3Crs",
    tenure: "Up to 30 Years",
    affiliateLink: "https://canarabank.com/housing-loan",
  },
  {
    bank: "Kotak Mahindra Bank Home Loan",
    image: "/home-loan/home-loan11.png",
    interestRate: "8.75% p.a. onwards",
    processingFee: "0.5% of the loan amount",
    loanAmount: "₹10L - ₹10Crs",
    tenure: "1-20 Years",
    affiliateLink:
      "https://homeloans.kotak.com/?cid=HL001&cName=HLProductPage_MainBanner&c_source=Organic&c_medium=Website_ProductPage&c_campaign=Apply_Now_Main_Banner&c_content=Display&c_term=HL001",
  },
  {
    bank: "DBS Home Loan",
    image: "/home-loan/home-loan12.png",
    interestRate: "Contact the Bank",
    processingFee: "₹10,000 + taxes",
    loanAmount: "Up to ₹5Crs",
    tenure: "1-25 Years",
    affiliateLink: "https://www.dbs.com/digibank/in/loans/home-loan/home-loan",
  },
  {
    bank: "Sundaram Home Finance Limited Home Loan",
    image: "/home-loan/home-loan13.png",
    interestRate: "Contact the Bank",
    processingFee: "Contact the bank for details",
    loanAmount: "₹1L - ₹4Crs",
    tenure: "1-25 Years",
    affiliateLink: "https://www.sundaramhome.in/loans/home-loans",
  },
  {
    bank: "Bank of Maharashtra Home Loan",
    image: "/home-loan/home-loan14.png",
    interestRate: "8.10% p.a. onwards",
    processingFee: "0.25% (One time fee)",
    loanAmount: "Contact the bank for details",
    tenure: "1-30 Years",
    affiliateLink: "https://bankofmaharashtra.in/homeloan-emi-calculator",
  },
];
