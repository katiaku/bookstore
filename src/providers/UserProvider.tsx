import { createContext, ReactNode, useState } from "react"
import { User } from "../config/types";
import { useNavigate } from "react-router-dom";

type UserContextType = {
    user: User | null,
    login: (user: User) => void,
    logout: () => void
}

type UserProviderProps = {
    children: ReactNode
};

const UserContext = createContext<UserContextType | null>(null);

function UserProvider(props: UserProviderProps) {

    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(() => {
        const userLocalStorage = localStorage.getItem('user');
        return userLocalStorage ? JSON.parse(userLocalStorage) : null;
    });

    function login(user: User) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/profile');
        window.location.reload();
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload();
    }
    
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;

export { UserContext };
