import PredicadorHead from "../components/Predicadores/PredicadorHead";
import BackHeader from "../components/BackHeader";
import Footer from "../components/Footer";
import PredicaCard from "../components/Reproductor/PredicaCard";
import PredicadorCard from "../components/Predicadores/PredicadorCard";

export default function Predicador() {
  const predicador = "YolandaPerez";

  return (
    <div className="theme">
      <PredicadorHead nombre={predicador} />
      <BackHeader />
      <div className="PageContainer">
        <PredicadorCard nombre={predicador} />
        <div className="PageContent PageContentWrap">
          <PredicaCard nombre={predicador} indice="10" />
          <PredicaCard nombre={predicador} indice="9" />
          <PredicaCard nombre={predicador} indice="8" />
          <PredicaCard nombre={predicador} indice="7" />
          <PredicaCard nombre={predicador} indice="6" />
          <PredicaCard nombre={predicador} indice="5" />
          <PredicaCard nombre={predicador} indice="4" />
          <PredicaCard nombre={predicador} indice="3" />
          <PredicaCard nombre={predicador} indice="2" />
          <PredicaCard nombre={predicador} indice="1" />
          <PredicaCard nombre={predicador} indice="0" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
