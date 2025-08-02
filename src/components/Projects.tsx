import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github } from "lucide-react";
import omniwatchImg from "@/assets/omniwatch.png";
import pikachuImg from "@/assets/pikachu.png";
import portfolioImg from "@/assets/portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "OmniWatch",
      description:
        "Python CLI-based application that simulatest navigation through a building layout, incoroprating role-based access control for different users while displaying building movement updates through React frontend",
      image: omniwatchImg,
      technologies: [
        "Python",
        "React",
        "MongoDB",
        "Solace PubSub+ Event Broker",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/hanad5670/OmniWatch-Building-CLI",
      featured: true,
    },
    {
      title: "PokeGuessr",
      description:
        "A wordle-like game in which a user has 8 guesses to figure out which of the 1000+ pokemon is today's answer, also allows for playing games from previous days",
      image: pikachuImg,
      technologies: ["Node.js", "React", "SQL", "Python"],
      liveUrl: "",
      githubUrl: "https://github.com/hanad5670/Poke_Guessr",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with modern design, smooth animations, and contact form integration. Built with performance and SEO optimization in mind.",
      image: portfolioImg,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://hanad5670.github.io/",
      githubUrl: "https://github.com/hanad5670/hanad5670.github.io",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise across various
            domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <a
                  href={project.liveUrl !== "" ? project.liveUrl : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.title}
                  aria-disabled={project.liveUrl !== ""}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={project.liveUrl === ""}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.title}
                >
                  <Button
                    variant="outline"
                    disabled={project.githubUrl === ""}
                    size="sm"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h4 className="font-semibold">{project.title}</h4>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.title}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={project.liveUrl === ""}
                      className="flex-1"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.title}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={project.githubUrl === ""}
                      className="flex-1"
                    >
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
