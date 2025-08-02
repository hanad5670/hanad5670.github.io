import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, Code, Lightbulb, Users, Target } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Docker",
    "Git & CI/CD",
    "REST APIs & GraphQL",
  ];

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, efficient, and scalable code is my priority.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believe in the power of teamwork and open communication.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable impact and user value.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for
            software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Computer Science graduate from Carleton University
                located in the city of Ottawa. As a younger dev trying to
                navigate the ever-chaging landscape of the tech industry, I am
                always interested in new opportunities
              </p>
              <p>
                I specialize in full-stack development with a focus on modern
                web technologies. From architecting scalable backend systems to
                crafting intuitive user interfaces, I enjoy every aspect of the
                development process.
              </p>
              <p>
                When I'm not coding, you'll find me on the basket-ball court or
                finishing my 20th Elden Ring run. If you're intrested in
                connecting I'm always available for a chat, you can contact me
                with an email down below :).
              </p>
            </div>

            <Button className="mt-6">
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-background p-3 rounded-lg border border-border text-center text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            What I Value
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
