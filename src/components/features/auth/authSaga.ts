import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi, signupApi } from "../../../api/authService";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure
} from "./authSlice";


function* handleSignup(action: any): Generator<any, void, any> {
  try {
    const res = yield call(signupApi, action.payload);
    yield put(signupSuccess(res));
  } catch (error: any) {
    yield put(
      signupFailure(error?.response?.data?.message || "Signup failed")
    );
  }
}

function* handleLogin(action: any): Generator<any, void, any> {
  try {
    const res = yield call(loginApi, action.payload);
    if (action.payload.remember) {
      localStorage.setItem("token", res.token);
    }
    yield put(loginSuccess(res));
  } catch (error: any) {
    yield put(
      loginFailure(error?.response?.data?.message || "Login failed")
    );
  }
}

export default function* authSaga() {
  yield takeLatest(signupRequest.type, handleSignup);
  yield takeLatest(loginRequest.type, handleLogin);
}
