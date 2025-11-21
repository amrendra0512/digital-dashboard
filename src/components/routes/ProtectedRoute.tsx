import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute =({ children }: { children: JSX.Element })=> {
  const token = useSelector((s) => s.auth?.token);
  
  if (!token) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;