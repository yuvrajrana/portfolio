import Dashboard from "./FinanceDashboard";

export const metadata = {
  title: "Finance Dashboard | Stock Prices & Charts",
  description: "Interactive finance dashboard showing stock prices, charts, and market trends for IBM, AAPL, MSFT, and GOOGL using React, Next.js, and TypeScript.",
  keywords: ["Finance Dashboard", "Stocks", "React", "Next.js", "TypeScript", "Stock Charts", "IBM", "AAPL", "MSFT", "GOOGL"],
  authors: [{ name: "Yuvraj Singh" }],
}

export default function Page() {
  return (
    <div id="dashboard">
      <Dashboard />
    </div>
  );
}
