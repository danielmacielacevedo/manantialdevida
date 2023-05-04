import { useEffect, useState } from "react";

export default function MaestroDetails(props) {

    const [maestro, setMaestro] = useState(null);
    const [isOpen, setOpen] = useState(false); // nuevo estado local para seguir el estado del boton

    useEffect(() => {
        async function fetchMaestro() {
          if (props.mes) {
            const res = await fetch(`/api/maestros/${props.mes}`);
            const data = await res.json();
            setMaestro(data[props.nombre]);
          }
        }
        fetchMaestro();
      }, [props.mes, props.nombre]);

    function handleClick() {
        setOpen(!isOpen); // cambia el estado local al contrario de su estado actual
    }

    return (
        <>
            { maestro && (
                <button onClick={handleClick} className="MaestroContainer">
                    <h2>{maestro.name}</h2>
                    <div className={isOpen ? "TableContainerInfo open" : "TableContainerInfo"}> 
                        {/* añade la clase 'open' si el estado local es true */}
                        <div className="NameContainer TitleTableCalendar">
                            <span>Día</span>
                            <span>Clase</span>
                        </div>
                        {maestro.dia1 && maestro.clase1 ? (
                            <div className="NameContainer">
                                <span>{maestro.dia1}</span>
                                <span>{maestro.clase1}</span>
                            </div>
                        ) : null}
                        {maestro.dia2 && maestro.clase2 ? (
                            <div className="NameContainer">
                                <span>{maestro.dia2}</span>
                                <span>{maestro.clase2}</span>
                            </div>
                        ) : null}
                        {maestro.dia3 && maestro.clase3 ? (
                            <div className="NameContainer">
                                <span>{maestro.dia3}</span>
                                <span>{maestro.clase3}</span>
                            </div>
                        ) : null}
                        {maestro.dia4 && maestro.clase4 ? (
                            <div className="NameContainer">
                                <span>{maestro.dia4}</span>
                                <span>{maestro.clase4}</span>
                            </div>
                        ) : null}
                        {maestro.dia5 && maestro.clase5 ? (
                            <div className="NameContainer">
                                <span>{maestro.dia5}</span>
                                <span>{maestro.clase5}</span>
                            </div>
                        ) : null}
                    </div>
                </button>
            )}
            <style jsx>{`
                .MaestroContainer
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 20px;
                    cursor: pointer;
                    border: none;
                    border-radius: 10px;
                    background: var(--light-grey);
                    color: var(--secondary-color);
                    text-align: left;
                }
                .MaestroContainer h2
                {
                    color: var(--secondary-color);
                }
                .TableContainerInfo
                {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 20px 0 0 0;
                    gap: 20px;
                }
                .NameContainer
                {
                    display: flex;
                    font-size: 16px;
                    font-weight: 700;
                }
                .TitleTableCalendar
                {
                    font-size: 14px;
                    font-weight: 100;
                }
                .NameContainer span:nth-child(1)
                {
                    width: 50%;
                }
                .NameContainer span:nth-child(2)
                {
                    display: flex;
                    width: 50%;
                }
                .TableContainerInfo
                {
                    display: none;
                }
                .TableContainerInfo.open
                {
                    display: flex;
                }
            `}</style>
        </>
    )
};
