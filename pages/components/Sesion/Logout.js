import { logout } from "../../../firebase/client";
import { useRouter } from "next/router";

export default function Salir() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="LogoutContainer">
        <div className="LogoutContent">
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
      <style jsx>{`
        .LogoutContainer {
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .LogoutContent {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;
          justify-content: space-around;
          align-items: center;
          border-radius: 10px;
          background-color: var(--light-grey);
        }
        button {
          display: flex;
          width: 100%;
          height: 60px;
          padding: 0 20px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          gap: 20px;
          justify-content: center;
          align-items: center;
          background-color: var(--secondary-color);
          color: var(--primary-color);
          transition: 0.4s;
        }
        button:hover {
          background-color: var(--light-grey);
          color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}
