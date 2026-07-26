import "./globals.css";
import { MarketProvider } from "./components/MarketProvider";

export const metadata = {
  title: "ForteMatic",
  description: "Premium supplements designed to support everyday health.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MarketProvider>
          {children}
        </MarketProvider>
      </body>
    </html>
  );
}
