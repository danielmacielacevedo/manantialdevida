import PostComponent from "./PostComponent";

export default function AllPost() {
  return (
    <>
      <div className="AllPostContainer">
        <div className="PostContainer">
          <PostComponent
            autor="Manantial de Vida"
            mensaje="Hola, ya está disponible el rol de maestros para el mes de junio."
            link="/miembros/calendario-maestros/"
            titleLink="Ver calendarios"
            picture="/assets/light_logo_manantial.png"
            dia="29"
            mes="05"
            año="2023"
            hora="10"
          />

          <PostComponent
            autor="Manantial de Vida"
            mensaje=""
            novedad=""
            alerta="Si aún no lo haces, crea una cuenta para no perder tu acceso como miembro autorizado."
            registro="true"
            link="/miembros/calendario-maestros/mayo"
            titleLink=""
            picture="/assets/light_logo_manantial.png"
            dia="16"
            mes="05"
            año="2023"
            hora="09"
          />

          <PostComponent
            autor="Manantial de Vida"
            mensaje="📆 👈"
            novedad="Ya puedes filtrar el calendario por día."
            link="/miembros/calendario-maestros/mayo"
            titleLink="Ver calendario"
            picture="/assets/light_logo_manantial.png"
            dia="14"
            mes="05"
            año="2023"
            hora="23"
          />

          <PostComponent
            autor="Manantial de Vida"
            mensaje="Ya está disponible el calendario con las actividades de cada sociedad."
            novedad=""
            link="/miembros/calendario-sociedades"
            titleLink="Ver actividades"
            picture="/assets/light_logo_manantial.png"
            dia="06"
            mes="05"
            año="2023"
            hora="09"
          />

          <PostComponent
            autor="Manantial de Vida"
            mensaje=""
            novedad="Ya puedes filtrar los calendarios por clases."
            link="/miembros/calendario-maestros"
            titleLink="Ver calendarios"
            picture="/assets/light_logo_manantial.png"
            dia="05"
            mes="05"
            año="2023"
            hora="23"
          />

          <PostComponent
            autor="Manantial de Vida"
            mensaje="Hola, ya está disponible el rol de maestros para el mes de mayo."
            link="/miembros/calendario-maestros/"
            titleLink="Ver calendarios"
            picture="/assets/light_logo_manantial.png"
            dia="03"
            mes="05"
            año="2023"
            hora="10"
          />

          <PostComponent
            autor="Manantial de Vida"
            mensaje="Ya puedes descargar todos los logotipos de nuestra iglesia."
            link="/miembros/recursos/logotipo"
            titleLink="Descargar logotipos"
            picture="/assets/light_logo_manantial.png"
            dia="02"
            mes="05"
            año="2023"
            hora="10"
          />
        </div>
      </div>
      <style jsx>{`
        .AllPostContainer {
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }
        .PostContainer {
          display: flex;
          width: 100%;
          max-width: 500px;
          height: fit-content;
          flex-direction: column;
          gap: 20px;
        }
      `}</style>
    </>
  );
}
