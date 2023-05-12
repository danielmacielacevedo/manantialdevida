import HeaderMembers from "./HeaderMembers"
import HeaderGeneral from "./HeaderGeneral";
import { useContext } from 'react';
import { UserContext } from '../UserProvider';

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user && user.email && 
                <HeaderMembers />
            }
            {user === null && 
                <HeaderGeneral />
            }
        </>
    )
}