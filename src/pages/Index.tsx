import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
