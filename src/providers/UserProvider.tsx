import { createContext, ReactNode, useState } from "react"
import { User } from "../config/types";

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

    const [user, setUser] = useState<User | null>(() => {
        const userLocalStorage = localStorage.getItem('user');
        return userLocalStorage ? JSON.parse(userLocalStorage) : null;
    });

    function login(user: User) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    }
    
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;

export { UserContext };
