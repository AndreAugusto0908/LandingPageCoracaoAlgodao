import { useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Prototipo from "../components/Prototipo/Prototipo";
import PublicoAlvo from "../components/PublicoAlvo/PublicoAlvo";
import Recursos from "../components/Recursos/Recursos";
import SobreNos from "../components/SobreNos/SobreNos";
import Feedback from "../components/Feedback/Feedback";
import SubNav from "../components/SubNav/SubNav";
import Footer from "../components/Footer/Footer";

export default function Index() {
  // Criar referências para as seções
  const sobreNosRef = useRef(null);
  const recursosRef = useRef(null);
  const publicoAlvoRef = useRef(null);
  const prototipoRef = useRef(null);
  const feedbackRef = useRef(null);

  // Função para rolar até uma referência
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ sobreNosRef, recursosRef, publicoAlvoRef, prototipoRef, feedbackRef }} />
      <SubNav />
      <section ref={sobreNosRef}>
        <SobreNos />
      </section>
      <section ref={recursosRef}>
        <Recursos />
      </section>
      <section ref={publicoAlvoRef}>
        <PublicoAlvo />
      </section>
      <section ref={prototipoRef}>
        <Prototipo />
      </section>
      <section ref={feedbackRef}>
        <Feedback />
      </section>
      <Footer />
    </>
  );
}
