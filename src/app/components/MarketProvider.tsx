"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type MarketCode = "US" | "GB" | "ES" | "DE";

type Market = {
  code: MarketCode;
  name: string;
  flag: string;
  language: string;
  amazonUrl: string;
};

const MARKETS: Record<MarketCode, Market> = {
  US: {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    language: "en",
    amazonUrl: "https://www.amazon.com/YOUR-US-ASIN",
  },

  GB: {
    code: "GB",
    name: "United Kingdom",
    flag: "🇬🇧",
    language: "en",
    amazonUrl: "https://www.amazon.co.uk/YOUR-UK-ASIN",
  },

  ES: {
    code: "ES",
    name: "España",
    flag: "🇪🇸",
    language: "es",
    amazonUrl: "https://www.amazon.es/YOUR-ES-ASIN",
  },

  DE: {
    code: "DE",
    name: "Deutschland",
    flag: "🇩🇪",
    language: "de",
    amazonUrl: "https://www.amazon.de/YOUR-DE-ASIN",
  },
};

type MarketContextType = {
  market: Market;
  setMarket: (code: MarketCode) => void;
};

const MarketContext = createContext<MarketContextType | null>(null);

export function MarketProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [marketCode, setMarketCode] = useState<MarketCode>("GB");

  useEffect(() => {
    const saved = localStorage.getItem("fortematic-market") as
      | MarketCode
      | null;

    if (
      saved &&
      ["US", "GB", "ES", "DE"].includes(saved)
    ) {
      setMarketCode(saved);
    }
  }, []);

  const setMarket = (code: MarketCode) => {
    setMarketCode(code);
    localStorage.setItem("fortematic-market", code);
  };

  const value = useMemo(
    () => ({
      market: MARKETS[marketCode],
      setMarket,
    }),
    [marketCode]
  );

  return (
    <MarketContext.Provider value={value}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  const context = useContext(MarketContext);

  if (!context) {
    throw new Error(
      "useMarket must be used inside MarketProvider"
    );
  }

  return context;
}
