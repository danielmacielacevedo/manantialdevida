import PostComponent from "./PostComponent";

export default function AllPost() {
  return (
    <>
      <div className="AllPostContainer">
        <div className="PostContainer">
          <PostComponent
            autor="Manantial de Vida"
            mensaje="Ya está disponible el primer devocional."
            blog="Alumbra mi camino por Carolina Macias"
            link="/@carolinamacias/alumbra-mi-camino"
            titleLink="Leer"
            picture="/assets/light_logo_manantial.png"
            dia="02"
            mes="06"
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
