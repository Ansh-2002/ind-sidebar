// @ts-nocheck
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export async function Layout({ children }: { children: React.ReactNode }) {
  const sidebarItems = await fetchSidebarItems(); // Fetch sidebar items on the server

  return (
    <>
      <Sidebar menuItems={sidebarItems} />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}

// Function to fetch sidebar items
async function fetchSidebarItems() {
  return [
    {
      title: "Invest",
      subItems: {
        INDstocks: {
          Stocks: "https://www.indmoney.com/stocks ",
          "Futures & Options": "https://www.indmoney.com/futures-and-options",
          "SIP in Stocks":
            "https://www.indmoney.com/stocks/category/sip-in-stocks",
          Indices: "https://www.indmoney.com/indices",
          IPO: "https://www.indmoney.com/ipo",
        },
        "US Stocks": { "us Stocks": "https://www.indmoney.com/us-stocks" },
        "Mutual Funds": {
          "All Mutual Funds": "https://www.indmoney.com/mutual-funds",
          "Equity Funds": "https://www.indmoney.com/mutual-funds/equity-funds",
          "Index Funds":
            "https://www.indmoney.com/mutual-funds/best-index-funds",
          "Debt Funds": "https://www.indmoney.com/mutual-funds/debt-funds",
          "Hybrid Funds": "https://www.indmoney.com/mutual-funds/hybrid-funds",
        },
        NPS: {
          "Invest in NPS":
            "https://www.indmoney.com/features/nps-national-pension-scheme",
          "NPS Calculator":
            "https://www.indmoney.com/calculators/nps-calculator",
        },
        ETFs: {
          "Global ETFs":
            "https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories",
          "Gold ETFs": "https://www.indmoney.com/stocks/category/gold-etfs",
          "All ETFs": "https://www.indmoney.com/stocks/etf",
        },
        "Other Instruments": {
          "Fixed Deposits": "https://www.indmoney.com/fixed-deposit",
          Insurance: "https://www.indmoney.com/insurance",
        },
      },
    },
    {
      title: "Features",
      subItems: {
        calculator: {
          "SIP Calculator":
            "https://www.indmoney.com/calculators/sip-calculator",
          "NPS Calculator":
            "https://www.indmoney.com/calculators/nps-calculator",
          "Brokerage Calculator":
            "https://www.indmoney.com/calculators/brokerage-calculator",
          "Post Office RD Calculator":
            "https://www.indmoney.com/calculators/post-office-rd-calculator",
          "SWP Calculator":
            "https://www.indmoney.com/calculators/swp-calculator",
          "Salary Calculator":
            "https://www.indmoney.com/calculators/salary-calculator",
          "Regular vs Direct MF Calculator":
            "https://www.indmoney.com/calculators/direct-regular-mutual-funds",
          "Gratuity Calculator":
            "https://www.indmoney.com/calculators/gratuity-calculator",
          "Lumpsum Calculator":
            "https://www.indmoney.com/calculators/lumpsum-calculator",
          "Mutual Fund Returns Calculator":
            "https://www.indmoney.com/calculators/mutual-funds-returns-calculator",
          "GST Calculator":
            "https://www.indmoney.com/calculators/gst-calculator",
          "View all Calculators": "https://www.indmoney.com/calculators",
        },
        features: {
          "Trading App": "https://www.indmoney.com/features/best-trading-app",
          "Goals Tracker": "https://www.indmoney.com/features/goals-tracker",
          "Track Your Finances":
            "https://www.indmoney.com/features/track-all-investments",
          "Track Credit Card Bills":
            "https://www.indmoney.com/features/track-credit-card-bills",
          "Credit Score": "https://www.indmoney.com/check-free-credit-score",
          Blogs: "https://www.indmoney.com/articles",
          "View all Features": "https://www.indmoney.com/features",
        },
      },
    },
    {
      title: "Market",
      subItems: {
        "Market Movers": {
          "Stock Market Today": "https://www.indmoney.com/market",
          "52 Week High":
            "https://www.indmoney.com/stocks/category/52-week-high",
          "52 Week Low": "https://www.indmoney.com/stocks/category/52-week-low",
          "Top Gainers": "https://www.indmoney.com/stocks/category/top-gainers",
          "Top Losers": "https://www.indmoney.com/stocks/category/top-losers",
          "Only Buyers": "https://www.indmoney.com/stocks/category/only-buyers",
          "Only Sellers":
            "https://www.indmoney.com/stocks/category/only-sellers",
        },
        "Stock Categorys": {
          "Stocks to buy today":
            "https://www.indmoney.com/stocks/category/buy-stocks",
          "Penny Stocks":
            "https://www.indmoney.com/stocks/category/penny-stocks",
          "Multi-bagger Stocks":
            "https://www.indmoney.com/stocks/category/multibagger-stocks",
          "Nifty 50 Stocks":
            "https://www.indmoney.com/stocks/category/nifty-50-stocks",
          "Large Cap Stocks":
            "https://www.indmoney.com/stocks/category/large-cap-stocks",
          "Mid Cap Stocks":
            "https://www.indmoney.com/stocks/category/mid-cap-stocks",
          "Small Cap Stocks":
            "https://www.indmoney.com/stocks/category/small-cap-stocks",
        },
        Indices: {
          "BSE Sensex": "https://www.indmoney.com/indices/sensex",
          "Nifty 50": "https://www.indmoney.com/indices/nifty-50",
          "Nifty Midcap 100":
            "https://www.indmoney.com/indices/nifty-midcap-100",
          "Bank Nifty": "https://www.indmoney.com/indices/bank-nifty",
          FINNIFTY: "https://www.indmoney.com/indices/nifty-financial",
          "Nifty 500": "https://www.indmoney.com/indices/nifty-500",
          "Nifty IT": "https://www.indmoney.com/indices/nifty-it",
        },
        "Global Indices": {
          "Gift Nifty": "https://www.indmoney.com/indices/gift-nifty",
          "Dow Jones Industrial Average":
            "https://www.indmoney.com/indices/dow-jones-industrial-average",
          "S&P 500": "https://www.indmoney.com/indices/s-p-500",
          "Nasdaq 100": "https://www.indmoney.com/indices/nasdaq-100",
          "Russell 2000 Index":
            "https://www.indmoney.com/indices/russell-2000-index",
          "Dow Jones Market":
            "https://www.indmoney.com/indices/dow-jones-market",
          "View all Indices": "https://www.indmoney.com/indices",
        },
      },
    },
    {
      title: "Pricing",
      subItems: {},
      url: "https://www.indmoney.com/pricing?type=indian-stocks",
    },
    {
      title: "Disclosure",
      subItems: {
        "Complaint Status": "https://www.indmoney.com/complaints-status",
        More: "https://www.indmoney.com/page/policy-center",
      },
    },
  ];
}
