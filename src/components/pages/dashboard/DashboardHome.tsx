import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SummaryCard from "./charts/SummaryCard";
import LineChartCard from "./charts/LineChartCard";
import BarChartCard from "./charts/BarChartCard";
import TransactionsTable from "./charts/TransactionsTable";
import { fetchDashboardRequest } from "../../features/dashboards/dashboardSlice";
import "../../../styles/dashboard.css";
import UserMenu from "./UserMenu";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const { loading, summary, charts, transactions } = useSelector(
    (s) => s?.dashboard
  );

  useEffect(() => {
    dispatch(fetchDashboardRequest());
  }, [dispatch]);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <UserMenu />
      </div>

      <div className="summary-grid">
        <SummaryCard
          title="Total Users"
          value={summary.users}
          delta={summary.usersChange}
        />
        <SummaryCard
          title="Monthly Revenue"
          value={`₹${summary.revenue}`}
          delta={summary.revenueChange}
        />
        <SummaryCard
          title="New Orders"
          value={summary.orders}
          delta={summary.ordersChange}
        />
        <SummaryCard
          title="Conversion Rate"
          value={`${summary.conversion}%`}
          delta={summary.conversionChange}
        />
      </div>

      <div className="charts-row">
        <LineChartCard
          data={charts.revenueSeries}
          title="Revenue (Last 12 months)"
        />
        <BarChartCard
          data={charts.ordersByCategory}
          title="Orders by Category"
        />
      </div>

      <div className="transactions-section">
        <h2>Latest Transactions</h2>
        <TransactionsTable data={transactions} loading={loading} />
      </div>
    </div>
  );
};

export default DashboardHome;
