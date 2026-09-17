
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated ,isLoading} = useAuth(); 
    if(isLoading) return <Loader/>
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children; 
}