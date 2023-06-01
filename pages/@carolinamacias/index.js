import PredicadorHead from "../components/Predicadores/PredicadorHead";
import BackHeader from "../components/BackHeader";
import Footer from "../components/Footer";
import BlogCard from "../components/Blog/BlogCard";
import EscritorCard from "../components/Blog/EscritorCardDetails";

export default function Predicador() {
  const predicador = "CarolinaMacias";

  return (
    <div className="theme">
      <PredicadorHead nombre={predicador} />
      <BackHeader />
      <div className="PageContainer">
        <EscritorCard nombre={predicador} />
        <div className="PageContent PageContentWrap">
          <BlogCard nombre={predicador} indice="10" />
          <BlogCard nombre={predicador} indice="9" />
          <BlogCard nombre={predicador} indice="8" />
          <BlogCard nombre={predicador} indice="7" />
          <BlogCard nombre={predicador} indice="6" />
          <BlogCard nombre={predicador} indice="5" />
          <BlogCard nombre={predicador} indice="4" />
          <BlogCard nombre={predicador} indice="3" />
          <BlogCard nombre={predicador} indice="2" />
          <BlogCard nombre={predicador} indice="1" />
          <BlogCard nombre={predicador} indice="0" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
