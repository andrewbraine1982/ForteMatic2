import Header from "../components/Header";
import GLPHero from "../components/GLPHero";
import PathwayDiagram from "../components/PathwayDiagram";
import GLPProductReveal from "../components/GLPProductReveal";

export default function GLP1Page() {
  return (
    <>
      <Header />

      <main>
        <GLPHero />
        <PathwayDiagram />
        <GLPProductReveal />
      </main>
    </>
  );
}
