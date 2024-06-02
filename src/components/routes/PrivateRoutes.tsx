import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";
// import { useContext } from "react";

export default function PrivateRoutes() {

    const user = {};
    // const user = null;

    // const { user } = useContext(UserContext);

    if(user) return <Outlet />
    return <Navigate to="/register" />
}
