import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../../../styles/Login.css";
import GoogleSignIn from "./GoogleSignIn";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const { loading, error, success, message } = useSelector((s) => s?.auth);
  const { register, handleSubmit } = useForm();

useEffect(() => {
  if (success) {
    setShowSuccess(true);

    const timer = setTimeout(() => {
      setShowSuccess(false);  
      navigate("/login");
      }, 1500); // 1.5 sec delay

    return () => clearTimeout(timer);
  }
}, [success, navigate]);

  const onSubmit = (values: any) => {
    dispatch(signupRequest(values));
  };

  return (
    <div className="login-wrapper">
      {/* 🔹 TOP-RIGHT SIGN-IN BUTTON */}

      <div className="login-card">
        <h2>Register</h2>
        {error ? (
          <div className="error-text">{error}</div>
        ) : showSuccess ? (
          <div className="success-text">{message}</div>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <input
              {...register("name")}
              placeholder="Full Name"
              type="text"
              required
            />
          </div>

          <div className="input-group">
            <input
              {...register("email")}
              placeholder="Email address"
              type="email"
              required
            />
          </div>

          <div className="input-group">
            <input
              {...register("password")}
              placeholder="Password"
              type="password"
              required
            />
          </div>

          <div className="input-group">
            <input
              {...register("mobile")}
              placeholder="Mobile number"
              type="text"
              required
            />
          </div>

          <button className="login-btn" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Create Account"}
          </button>
        </form>
        <GoogleSignIn />
        <div className="bottom-text">
          Already have an account?{" "}
          <span className="signup-now" onClick={() => navigate("/login")}>
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
