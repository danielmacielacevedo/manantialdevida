export default function Cover({ children }) {
  return (
    <>
      <div className="CoverContainer">{children}</div>
      <style jsx>{`
        .CoverContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 450px;
          background-color: var(--primary-color);
          // background-color: red;
          justify-content: center;
          align-items: center;
          gap: 80px;
        }
        .CoverImage {
          width: 100%;
          max-width: 600px;
          height: auto;
          margin-bottom: 80px;
        }

        @media only screen and (max-width: 860px) {
          .CoverContainer {
            height: 450px;
          }
          .CoverImage {
            width: 300px;
          }
        }

        @media only screen and (max-width: 380px) {
          .CoverContainer {
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
