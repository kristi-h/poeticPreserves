import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function PrivateRoutes() {
    const { user } = useUser()
    return user ? <Outlet /> : <Navigate to='/'/>
}