import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  const sidebarItems = [
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
      subItems: {},
    },
    {
      title: "Market",
      subItems: {},
    },
    {
      title: "Pricing",
      subItems: {},
    },
    {
      title: "Disclosure",
      subItems: {},
    },
  ];
  return (
    <>
      <Sidebar menuItems={sidebarItems} />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
