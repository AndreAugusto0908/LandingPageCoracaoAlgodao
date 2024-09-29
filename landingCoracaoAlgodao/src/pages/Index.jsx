import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Prototipo from "../components/Prototipo/Prototipo";
import PublicoAlvo from "../components/PublicoAlvo/PublicoAlvo";
import Recursos from "../components/Recursos/Recursos";
import SobreNos from "../components/SobreNos/SobreNos";
import SubNav from "../components/SubNav/SubNav";

export default function Index() {
  return (
    <>
      <Navbar />
      <SubNav />
      <SobreNos />
      <Recursos />
      <PublicoAlvo />
      <Prototipo />
      <Feedback />
    </>
  )
}