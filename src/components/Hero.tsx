import { Button } from "@/components/ui/Button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import professionalPhoto from "@/assets/professional-photo.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/hanad5670", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hanad-hirsi-316a52228/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hanad5670@gmail.com", label: "Email" },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "var(--hero-gradient)",
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hanad Hirsi
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating elegant solutions to complex problems. I
              specialize in building scalable web applications with modern
              technologies and delivering exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={scrollToAbout}>
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <a href="/resume.pdf" download="Resume.pdf">
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social, index) => {
                return (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Button variant="outline" key={index} size="icon">
                      <social.icon className="h-4 w-4" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 scale-110" />
              <img
                src={professionalPhoto}
                alt="Hanad Hirsi - Professional Photo"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
