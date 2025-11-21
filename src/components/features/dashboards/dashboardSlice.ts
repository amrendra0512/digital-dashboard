// src/features/dashboard/dashboardSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface Summary {
  users: number;
  usersChange: number;
  revenue: number;
  revenueChange: number;
  orders: number;
  ordersChange: number;
  conversion: number;
  conversionChange: number;
}

export interface DashboardState {
  loading: boolean;
  error?: string | null;
  summary: Summary;
  charts: {
    revenueSeries: { month: string; value: number }[];
    ordersByCategory: { category: string; count: number }[];
  };
  transactions: any[];
}

const initialState: DashboardState = {
  loading: false,
  error: null,
  summary: {
    users: 0,
    usersChange: 0,
    revenue: 0,
    revenueChange: 0,
    orders: 0,
    ordersChange: 0,
    conversion: 0,
    conversionChange: 0,
  },
  charts: {
    revenueSeries: [],
    ordersByCategory: [],
  },
  transactions: [],
};

const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchDashboardRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardSuccess(state, action: any) {
      state.loading = false;
      const payload = action.payload;
      if (payload.summary) state.summary = payload.summary as Summary;
      if (payload.charts) state.charts = payload.charts as any;
      if (payload.transactions) state.transactions = payload.transactions as any;
    },
    fetchDashboardFailure(state, action: any) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDashboardRequest,
  fetchDashboardSuccess,
  fetchDashboardFailure,
} = slice.actions;

export default slice.reducer;
