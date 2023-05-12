import Link from "next/link";

export default function Page404() {
    return (
        <>
            <div className="Container404">
                <h1>Upps!</h1>
                <p>Esa sección puede que no exista, esté en proceso de construcción o que no tengas los permisos necesarios para acceder a ella.</p>
                <Link href="/">
                    <div className="ContentButton">
                        <p>Ir al Inicio</p>
                    </div>
                </Link>
            </div>
            <style jsx>{`
                .Container404
                {
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
                .Container404 p
                {
                    max-width: 600px;
                }
            `}</style>
        </>
    )
}