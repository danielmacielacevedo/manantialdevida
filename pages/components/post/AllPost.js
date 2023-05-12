import PostComponent from '../post/PostComponent';

export default function AllPost() {
    return (
        <>
          <div className='AllPostContainer'>
            <div className='PostContainer'>
              <PostComponent autor="Manantial de Vida" mensaje="Ya está disponible el calendario con las actividades de cada sociedad." novedad="" link="/miembros/calendario-sociedades" titleLink="Ver actividades" picture="/assets/light_logo_manantial.png" dia="06" mes="05" año="2023" hora="09"/>

              <PostComponent autor="Manantial de Vida" mensaje="" novedad="Ya puedes filtrar los calendarios por clases." link="/miembros/calendario-maestros" titleLink="Ver calendarios" picture="/assets/light_logo_manantial.png" dia="05" mes="05" año="2023" hora="23"/>

              <PostComponent autor="Manantial de Vida" mensaje="Hola, ya está disponible el rol de maestros para el mes de mayo." link="/miembros/calendario-maestros/" titleLink="Ver calendarios" picture="/assets/light_logo_manantial.png" dia="03" mes="05" año="2023" hora="10"/>

              <PostComponent autor="Manantial de Vida" mensaje="Ya puedes descargar todos los logotipos de nuestra iglesia." link="/miembros/recursos/logotipo" titleLink="Descargar logotipos" picture="/assets/light_logo_manantial.png" dia="02" mes="05" año="2023" hora="10"/>
            </div>
          </div>
          <style jsx>{`
            .PostContainer
            {
              display: flex;
              width: 100%;
              max-width: 500px;
              height: fit-content;
              flex-direction: column;
              gap: 20px;
            }
          `}</style>

        </>
    )
}