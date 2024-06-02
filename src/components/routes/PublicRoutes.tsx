// import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";

export default function PublicRoutes() {

    const user = {};
    // const user = null;

    // const { user } = useContext(UserContext);

    if(!user) return <Outlet />
    return <Navigate to="/" />
}
