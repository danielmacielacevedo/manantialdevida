import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserProvider";
import Button from "./Button";
import Link from "next/link";
import { loginWithGoogle } from "../../firebase/client";

export default function Entrar() {
  const { user, setUser } = useContext(UserContext);

  const handleClickGoogle = () => {
    loginWithGoogle()
      .then((user) => {
        const { name, email, id, picture } = user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="EntrarContainer">
        <div className="EntrarContentContainer">
          {user === null && (
            <div className="EntrarContent">
              <img src="/assets/light_logo_manantial.png" />
              <h1>Entrar</h1>
              <div className="EntrarButtons">
                <Button onClick={handleClickGoogle}>
                  <img id="ButtonImg" src="/assets/icons/google.png" />
                  Entrar con Google
                </Button>
                <hr />
                <Link className="ButtonStyle" href="/">
                  Volver al Inicio
                </Link>
              </div>
            </div>
          )}
          {user && user.email && (
            <div className="EntrarContent">
              <div className="ImageContainer">
                <img referrerPolicy="no-referrer" src={user.picture} />
                <img src="/assets/light_logo_manantial.png" />
              </div>
              <h3>¡Ya estás dentro!</h3>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <Link className="ButtonStyle" href="/miembros">
                Continuar
              </Link>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .EntrarContainer
        {
          display: flex;
          width: 100%;
          height: 100vh;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
        }
        .EntrarContentContainer
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
        .EntrarContent
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 400px;
          height: 60vh;
          min-height: 400px;
          justify-content: center;
          align-items: center;
          gap: 20px;
          border-radius: 10px;
          padding: 20px;
          background-color: var(--light-grey);
        }
        .EntrarContent img
        {
          width: auto;
          height: 80px;
        }
        .EntrarButtons
        {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ImageContainer
        {
          position: relative;
          display: flex;
          width: 300px;
          height: 100px;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }
        .ImageContainer img:first-child
        {
          position: absolute;
          border-radius: 50%;
          right: 66px;
        }
        .ImageContainer img:last-child
        {
          position: absolute;
          left: 66px;
        }
      `}</style>  
    </>
  );
}




