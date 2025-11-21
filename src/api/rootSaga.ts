import { all } from "redux-saga/effects";
import authSaga from "../components/features/auth/authSaga";
import dashboardSaga from "../components/features/dashboards/dashboardSaga";

export default function* rootSaga() {
  yield all([
    dashboardSaga(),
    authSaga(),
  ]);
}