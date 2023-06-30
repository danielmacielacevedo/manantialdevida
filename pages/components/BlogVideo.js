import CoverBlogVideo from "./CoverBlogVideo";
import CoverSmall from "./CoverSmall";

export default function Blog(props) {
  return (
    <div id="Top" className="Site theme">
      <div className="MainContainer">
        <CoverSmall>
          <CoverBlogVideo nombre={props.nombre} blog={props.indice} />
        </CoverSmall>
      </div>
      <style jsx>{`
        .Site
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
        }
        .MainContainer
        {
          display: flex;
          width: 100%;
          gap: 20px;
        }
        .PrimarySection
        {
          display: flex;
          flex: 2;
          width: 100%,
          height: auto;
        }
        .SecondarySection
        {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: auto;
          gap: 20px;
        }
        @media only screen and (max-width: 1024px)
        {
          .MainContainer
          {
            flex-direction: column;
            gap: 20px
          }
        }
        @media only screen and (max-width: 860px)
        {
          .Site
          {
            padding: 0;
          }
          .MainContainer
          {
            flex-direction: column;
            gap: 20px
          }
          .MainContainer.scroll-down
          {
            max-width: none;
            padding: 0;
          }
          .SecondarySection
          {
            padding: 0 20px
          }
        }
      `}</style>
    </div>
  );
}
