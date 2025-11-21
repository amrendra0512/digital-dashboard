// src/components/dashboard/TransactionsTable.tsx
import React from "react";

export interface Transaction {
  id: string;
  user: string;
  product: string;
  amount: number;
  status: "Paid" | "Pending" | "Cancelled";
  date: string;
}

interface Props {
  data: Transaction[];
  loading?: boolean;
}

const TransactionsTable = ({ data, loading }: Props)=> {
  if (loading) {
    return <div className="card">Loading transactions...</div>;
  }

  return (
    <div className="table-card">
      <table className="transactions-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="empty">No transactions</td>
            </tr>
          )}
          {data.map((t) => (
            <tr key={t.id}>
              <td>{t.user}</td>
              <td>{t.product}</td>
              <td>₹{t.amount}</td>
              <td><span className={`status-badge ${t.status.toLowerCase()}`}>{t.status}</span></td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
