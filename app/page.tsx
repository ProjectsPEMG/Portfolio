import Hero from "@/components/Hero";
import Projets from "@/components/Projets";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact"; // <-- Nouvel import

export default function Home() {
  return (
    <main>
      <Hero />
      <Projets />
      <Competences />
      <Contact /> {/* <-- Ta nouvelle section */}
    </main>
  );
}