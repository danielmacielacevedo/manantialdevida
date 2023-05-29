import Link from "next/link";

export default function Page404() {
  return (
    <>
      <div className="Container404">
        <h1>No autorizado</h1>
        <p>
          No tienes los permisos necesarios para acceder a estos datos, puedes
          solicitar tu acceso con el desarrollador.
        </p>
        <Link href="/">
          <div className="ContentButton">
            <p>Ir al Inicio</p>
          </div>
        </Link>
      </div>
      <style jsx>{`
        .Container404 {
          display: flex;
          width: 100%;
          height: 100vh;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          gap: 20px;
        }
        .Container404 h1 {
          font-size: 100px;
        }
        .Container404 p {
          max-width: 600px;
        }
      `}</style>
    </>
  );
}
