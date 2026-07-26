"use client";

import { useEffect, useRef, useState } from "react";
import { useMarket } from "./MarketProvider";

export default function MarketSelector() {
  const { market, setMarket } = useMarket();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markets = [
    {
      code: "US",
      flag: "🇺🇸",
      name: "United States",
    },
    {
      code: "GB",
      flag: "🇬🇧",
      name: "United Kingdom",
    },
    {
      code: "ES",
      flag: "🇪🇸",
      name: "España",
    },
    {
      code: "DE",
      flag: "🇩🇪",
      name: "Deutschland",
    },
  ] as const;

  return (
    <div className="marketSelector" ref={dropdownRef}>
      <button
        className="marketButton"
        onClick={() => setOpen(!open)}
      >
        <span>{market.flag}</span>

        <span className="marketName">
          {market.name}
        </span>

        <span className={`arrow ${open ? "open" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="marketDropdown">

          <div className="marketTitle">
            🌍 Select your market
          </div>

          {markets.map((item) => (
            <button
              key={item.code}
              className={`marketItem ${
                market.code === item.code
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setMarket(item.code);
                setOpen(false);
              }}
            >
              <span className="flag">
                {item.flag}
              </span>

              <span>
                {item.name}
              </span>

              {market.code === item.code && (
                <span className="check">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
