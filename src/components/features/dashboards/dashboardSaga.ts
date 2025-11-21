import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDashboardRequest, fetchDashboardSuccess, fetchDashboardFailure } from "./dashboardSlice";
import { fetchDashboardMock } from "../../../mock/mockApi";

function* handleFetch(action: any): Generator<any, void, any> {
  try {
    const data = yield call(fetchDashboardMock);
    yield put(fetchDashboardSuccess(data));
  } catch (err: any) {
    yield put(fetchDashboardFailure(err?.message || "Failed to load dashboard"));
  }
}

export default function* dashboardSaga() {
  yield takeLatest(fetchDashboardRequest.type, handleFetch);
}
