import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";

export default function LoginSuccessful() {
  const { user } = useContext(UserContext);

  // Verificar si user está definido
  if (!user || !user.picture) {
    return null; // O muestra algún mensaje de error o redirige a otra página
  }

  return (
    <>
      <div className="EntrarContainer">
        <div className="EntrarContentContainer">
          <div className="EntrarContent">
            <div className="ImageContainer">
              <img referrerPolicy="no-referrer" src={user.picture} />
              <img src="/assets/light_logo_manantial.png" />
            </div>
            <h3>¡Ya estás dentro!</h3>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link className="ButtonStyle" href={encodeURI("/")}>
              Continuar
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .EntrarContainer {
          display: flex;
          width: 100%;
          height: 100vh;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
        }
        .EntrarContentContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: fit-content;
          align-items: center;
        }
        .EntrarContent {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 400px;
          height: fit-content;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          gap: 20px;
          padding: 20px;
          background-color: var(--light-grey);
        }
        .EntrarContent h1 {
          padding: 0 20px;
        }
        .EntrarContent img {
          width: auto;
          height: 80px;
        }
        .EntrarButtons {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ImageContainer {
          position: relative;
          display: flex;
          width: 300px;
          height: 100px;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }
        .ImageContainer img:first-child {
          position: absolute;
          border-radius: 50%;
          right: 66px;
        }
        .ImageContainer img:last-child {
          position: absolute;
          left: 66px;
        }
      `}</style>
    </>
  );
}
