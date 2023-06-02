export default function Cover({ children }) {
  return (
    <>
      <div className="CoverContainer">{children}</div>
      <style jsx>{`
        .CoverContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          background-color: var(--primary-color);
          justify-content: center;
          align-items: center;
          gap: 80px;
          border-radius: 10px;
        }
        .CoverImage {
          width: 100%;
          max-width: 600px;
          height: auto;
          margin-bottom: 80px;
        }

        @media only screen and (max-width: 860px) {
          .CoverImage {
            width: auto;
          }
        }
      `}</style>
    </>
  );
}
