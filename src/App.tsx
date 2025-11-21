import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/login/Signup";
import DashboardHome from "./components/pages/dashboard/DashboardHome";
import ProtectedRoute from "./components/routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
