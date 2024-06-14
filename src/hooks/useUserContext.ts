import { useContext } from 'react'
import { UserContext } from '../providers/UserProvider';

export default function useUserContext() {
    const context = useContext(UserContext);
    if (!context) throw new Error ("Out of the UserProvider scope");
    return context;
}
