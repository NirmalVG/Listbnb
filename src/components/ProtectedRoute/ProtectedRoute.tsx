import { Navigate } from "react-router";
import { isAuthenticated } from "@/utils/auth";

const ProtectedRoute = ({ children }: any) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
