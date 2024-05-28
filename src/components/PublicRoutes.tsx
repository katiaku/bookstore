import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes({ user }) {
    // return (
    //     <>
    //         <Outlet />
    //     </>
    // )
    if(user) {
        return <Navigate to="/" />
    }
    return <Outlet />
}
