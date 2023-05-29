import Login from "./Login";
import LoginSuccessfulMiembros from "./LoginSuccessfulMiembros";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";

export default function LoginProcessMiembros() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user === null && <Login />}
      {user && user.email && <LoginSuccessfulMiembros />}
    </>
  );
}
