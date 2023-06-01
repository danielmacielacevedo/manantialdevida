import DynamicBlogHead from "./DynamicBlogHead";
import BackHeader from "./BackHeader";
import Footer from "./Footer";
import CoverBlog from "./CoverBlogSmall";
import CoverSmall from "./CoverSmall";

export default function Blog(props) {
  return (
    <div id="Top" className="Site theme">
      <DynamicBlogHead nombre={props.nombre} indice={props.indice} />
      <BackHeader />
      <div className="MainContainer">
        <CoverSmall>
          <CoverBlog nombre={props.nombre} blog={props.indice} />
        </CoverSmall>
      </div>
      <Footer />
      <style jsx>{`
        .Site
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          align-items: center;
          background-color: var(--primary-color);
          {/* padding-top: 20px; */}
        }
        .MainContainer
        {
          display: flex;
          width: 100%;
          height: auto;
          gap: 20px;
          padding: 0 20px;
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
            padding: 0 20px;
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
            padding: 0 20px;
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
