export default function CoverCenterImage() {
  return (
    <>
      <div className="CoverContainer">
        <img
          className="CoverImage"
          src="/assets/logotipos/descargar/light_logo_manantial.png"
          alt="Manantial"
        />
        {/* <Link className='PrimaryButton' href='/aniversario'>VER AHORA</Link> */}
      </div>
      <style jsx>{`
        .CoverContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 650px;
          padding: 20px;
          background-color: var(--primary-color);
          // background-color: red;
          justify-content: center;
          align-items: center;
          gap: 80px;
        }
        .CoverImage {
          width: 100%;
          max-width: 300px;
          height: auto;
          margin-bottom: 80px;
        }

        @media only screen and (max-width: 860px) {
          .CoverContainer {
            height: 450px;
          }
          .CoverImage {
            width: 200px;
          }
        }
      `}</style>
    </>
  );
}
