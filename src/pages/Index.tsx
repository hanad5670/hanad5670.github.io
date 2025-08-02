import About from "@/components/About";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
};

export default Index;
