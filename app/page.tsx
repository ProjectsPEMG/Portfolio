import Hero from "@/components/Hero";
import Projets from "@/components/Projets";
import Competences from "@/components/Competences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // <-- Le nouvel import

export default function Home() {
  return (
    <main>
      <Hero />
      <Projets />
      <Competences />
      <Contact />
      <Footer /> {/* <-- La nouvelle section */}
    </main>
  );
}
