// import React, { useContext } from "react";
// import { UserContext } from "../../UserProvider";
import Button from "../Button";
import Link from "next/link";
import { loginWithGoogle } from "../../../firebase/client";

export default function Entrar() {
  // const { user, setUser } = useContext(UserContext);

  const handleClickGoogle = () => {
    loginWithGoogle()
      // .then((user) => {
      //   const { name, email, id, picture } = user;
      //   setUser(user);
      //   window.location.reload(); 
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="EntrarContainer">
        {/* <div className="EntrarContentContainer"> */}
        <div className="EntrarContent">
          <img src="/assets/light_logo_manantial.png" />
          <h1>Entrar</h1>
          <Button onClick={handleClickGoogle}>
            <img id="ButtonImg" src="/assets/icons/google.png" />
            Entrar con Google
          </Button>
          <Link className="ButtonStyle" href="/">
            Volver al Inicio
          </Link>
          <span>
            Al hacer clic en Entrar con Google, aceptas nuestra
            <i>
              <Link href="/legal/privacidad">
                política de privacidad y política de cookies.
              </Link>
            </i>{" "}
          </span>
        </div>
        {/* </div> */}
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
          align-items: center;
        }
        .EntrarContent {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 400px;
          height: fit-content;
          min-height: 400px;
          justify-content: space-around;
          align-items: center;
          border-radius: 10px;
          padding: 20px;
          background-color: var(--light-grey);
        }
        .EntrarContent img {
          width: auto;
          height: 80px;
        }
        .EntrarContent span {
          font-size: 12px;
          line-height: 20px;
          color: var(--mid-grey);
        }
        .EntrarContent i {
          color: var(--dark-grey);
          font-style: normal;
          padding-left: 4px;
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
