import EventCountdown from './EventCountdown';
import { useEffect } from 'react';

export default function MonthEvents() {

  function actualizarFechas() {
    const fechaDomingoInicial = new Date('2023-05-14T11:30:00-06:00').getTime();
    const fechaMiercolesInicial = new Date('2023-05-10T19:00:00-06:00').getTime();
    const fechaViernesInicial = new Date('2023-05-12T20:00:00-06:00').getTime();

    let fechaDomingo = fechaDomingoInicial;
    let fechaMiercoles = fechaMiercolesInicial;
    let fechaViernes = fechaViernesInicial;

    const fechaActual = new Date().getTime();
    const unaSemanaEnMillisegundos = 7 * 24 * 60 * 60 * 1000;

    while (fechaDomingo < fechaActual) {
      fechaDomingo += unaSemanaEnMillisegundos;
    }

    while (fechaMiercoles < fechaActual) {
      fechaMiercoles += unaSemanaEnMillisegundos;
    }

    while (fechaViernes < fechaActual) {
      fechaViernes += unaSemanaEnMillisegundos;
    }
    
    return { fechaDomingo, fechaMiercoles, fechaViernes };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { fechaDomingo, fechaMiercoles, fechaViernes } = actualizarFechas();
      console.log('actualizado');
    }, 7 * 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { fechaDomingo, fechaMiercoles, fechaViernes } = actualizarFechas();

  return (
    <div className='MonthEventsContainer'>
        <h2>NUESTROS SERVICIOS</h2>
        <div className='MonthEventsContent'>
            <div className='ArticlesContainer'>
                <article className='ArticleContainer'>
                    <h3>Servicio Manantial</h3>
                    <img src='/assets/predicadores/pastora-dina/en-mi-angustia.jpg'/>
                    <div>
                        <p>Todos los domingos</p>
                        <h2>11:30 AM</h2>
                        <EventCountdown eventDate={fechaDomingo} />
                    </div>
                </article>
            </div>
            <div className='ArticlesContainer'>
                <article className='ArticleContainer'>
                    <h3>Servicio de Enseñanza</h3>
                    <img src='/assets/predicadores/pastor-isaac/de-donde-vienes.jpg' />
                    <div>
                        <p>Todos los miércoles</p>
                        <h2>7:00 PM</h2>
                        <EventCountdown eventDate={fechaMiercoles} />
                    </div>
                </article>
            </div>
            <div className='ArticlesContainer'>
                <article className='ArticleContainer'>
                    <h3>Noche de Oración</h3>
                    <img src='/assets/predicadores/flor-fernandez/metamorfosis-del-alma.jpg' />
                    <div>
                        <p id='info'>Todos los viernes</p>
                        <h2>8:00 PM</h2>
                        <EventCountdown eventDate={fechaViernes} />
                    </div>
                </article>
            </div>
        </div>
    <style jsx>{`
        .MonthEventsContainer
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            justify-content: center;
            align-items: center;
            padding: 20px 20px 0 20px;
            gap: 20px;
            background-color: var(--primary-color)
        }
        .MonthEventsContent
        {
            display: flex;
            width: 100%;
            height: auto;
            gap: 20px;
        }
        .ArticlesContainer
        {
            display: flex;
            width: 100%;
            height: auto;
            gap: 20px;
        }
        .ArticleContainer
        {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
            height: auto;
            gap: 10px;
            align-items: center;
            padding: 20px;
            border-radius: 10px;
            background-color: var(--light-grey);
        }
        .ArticleContainer img
        {
            width: 100%;
            height: auto;
            max-height: 180px;
            object-fit: cover;
            border-radius: 10px;
        }
        .ArticleContainer p
        {
            font-size: 16px;
            font-weight: 100;
            text-align: center
        }
        .ArticleContainer div
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            gap: 10px; 
        }
        @media only screen and (max-width: 860px)
        {
            .MonthEventsContent
            {
                flex-direction: column;
            }
        }
    `}</style>
    </div>
    )
}




