import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../styles/Login.css";
import { loginRequest } from "../../features/auth/authSlice";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success, token } = useSelector((s) => s.auth);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const onSubmit = (values: any) => {
    dispatch(loginRequest(values)); // Saga will handle it
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-card">
          <h2>Login</h2>

          {success ? (
            <div className="success-text">{success}</div>
          ) : error ? (
            <div className="error-text">{error}</div>
          ) : (
            <></>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input
                {...register("email")}
                placeholder="Email address"
                type="email"
              />
            </div>

            <div className="input-group">
              <input
                {...register("password")}
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="remember-row">
              <input type="checkbox" {...register("remember")} />
              <label>Remember me</label>
            </div>

            <button className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <GoogleSignIn />
          <div className="bottom-text">
            Don’t have an account?{" "}
            <span className="signup-now" onClick={() => navigate("/signup")}>
              Register now
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
