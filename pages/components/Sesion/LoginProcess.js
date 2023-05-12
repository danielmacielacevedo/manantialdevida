import Login from "./Login";
import LoginSuccessful from "./LoginSuccessful";
import { useContext } from 'react'
import { UserContext } from '../../UserProvider'

export default function LoginProcess() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user === null &&
                <Login />
            }
            {user && user.email &&
                <LoginSuccessful />
            }
        </>
    )
}
