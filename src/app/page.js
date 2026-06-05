import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
