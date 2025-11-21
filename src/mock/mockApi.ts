// src/mock/mockApi.ts
export const fetchDashboardMock = async () => {
  // simulate network
  await new Promise((r) => setTimeout(r, 600));

  const summary = {
    users: 12450,
    usersChange: 6.2,
    revenue: 254000,
    revenueChange: 3.8,
    orders: 548,
    ordersChange: -1.4,
    conversion: 2.4,
    conversionChange: 0.2,
  };

  const revenueSeries = [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 15000 },
    { month: "Mar", value: 18000 },
    { month: "Apr", value: 22000 },
    { month: "May", value: 20000 },
    { month: "Jun", value: 24000 },
    { month: "Jul", value: 26000 },
    { month: "Aug", value: 30000 },
    { month: "Sep", value: 28000 },
    { month: "Oct", value: 32000 },
    { month: "Nov", value: 35000 },
    { month: "Dec", value: 38000 },
  ];

  const ordersByCategory = [
    { category: "Electronics", count: 220 },
    { category: "Clothing", count: 150 },
    { category: "Home", count: 90 },
    { category: "Other", count: 88 },
  ];

  const transactions = [
    { id: "t1", user: "Amit Kumar", product: "Wireless Mouse", amount: 999, status: "Paid", date: "2025-11-15" },
    { id: "t2", user: "Rita Singh", product: "Bluetooth Headset", amount: 1999, status: "Pending", date: "2025-11-14" },
    { id: "t3", user: "Karan Verma", product: "Laptop Sleeve", amount: 499, status: "Paid", date: "2025-11-13" },
    { id: "t4", user: "Sunita Rao", product: "Office Chair", amount: 6999, status: "Cancelled", date: "2025-11-12" },
  ];

  return {
    summary,
    charts: { revenueSeries, ordersByCategory },
    transactions,
  };
};
