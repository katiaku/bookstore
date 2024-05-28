import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {

    const user = {};

    if(user) return <Outlet />
    return <Navigate to="/register" />
}
