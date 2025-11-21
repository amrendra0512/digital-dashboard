// src/components/dashboard/SummaryCard.tsx
import React from "react";

interface Props {
  title: string;
  value: string | number;
  delta?: number; // + or - percent
}

const SummaryCard = ({ title, value, delta = 0 }: Props) => {
  const isPositive = delta >= 0;
  return (
    <div className="summary-card">
      <div className="summary-left">
        <div className="summary-title">{title}</div>
        <div className="summary-value">{value}</div>
      </div>
      <div className={`summary-delta ${isPositive ? "pos" : "neg"}`}>
        {isPositive ? "▲" : "▼"} {Math.abs(delta)}%
      </div>
    </div>
  );
};

export default SummaryCard;
