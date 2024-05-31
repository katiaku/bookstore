import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes() {

    const user = {};
    // const user = null;

    if(!user) return <Outlet />
    return <Navigate to="/" />
}
