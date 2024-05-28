import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes({ user }) {
    // return (
    //     <>
    //         <Outlet />
    //     </>
    // )
    if(!user) {
        return <Navigate to="/register" />
    }
    return <Outlet />
}
