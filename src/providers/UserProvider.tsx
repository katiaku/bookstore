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
        console.log("logging in...")
        setUser(user);
        console.log("the user is set: ", user)
        localStorage.setItem('user', JSON.stringify(user));
    }

    function logout() {
        console.log("logging out...")
        setUser(null);
        console.log(user)
        localStorage.removeItem('user');
        navigate('/');
    }
    
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;

export { UserContext };
