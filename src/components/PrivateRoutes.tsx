import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {

    const user = null;

    // return (
    //     <>
    //         <Outlet />
    //     </>
    // )
    if(user) return <Outlet />
    return <Navigate to="/register" />
}
