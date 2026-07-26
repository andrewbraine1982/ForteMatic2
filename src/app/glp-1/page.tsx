import Header from "../components/Header";
import GLPHero from "../components/GLPHero";
import PathwayDiagram from "../components/PathwayDiagram";

export default function GLP1Page() {
  return (
    <>
      <Header />

      <main>
        <GLPHero />
        <PathwayDiagram />
      </main>
    </>
  );
}
