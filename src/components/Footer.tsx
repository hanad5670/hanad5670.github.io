import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/hanad5670", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hanad-hirsi-316a52228/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hanad5670@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border py-12 w-full">
      <div className="max-w-none container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Hanad Hirsi</h3>
            <p className="text-muted-foreground">
              Full-Stack Software Developer
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Building digital experiences that make a difference
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Hanad Hirsi. Made with</span>
          </div>

          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-foreground"
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
