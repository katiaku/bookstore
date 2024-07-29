import { Navigate, Outlet } from 'react-router-dom'
import useUserContext from '../../hooks/useUserContext'

export default function PublicRoutes() {
    const { user } = useUserContext()
    if (!user) return <Outlet />
    return <Navigate to="/profile" />
}
