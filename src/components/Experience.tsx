import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Building, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Developer",
      company: "Kongsberg Geospatial",
      location: "Kanata, ON",
      period: "Sep 2024, Dec 2024",
      description:
        "Worked within a team employing React and Node.js to provide real-time geospatial data",
      achievements: [
        "Engineered a live weather-fetch dashboard feature that enabled users to query backend weather APIs and submit custom entries, reducing friction for users and accelerating weather-dependent workflows",
        "Orchestrated seamless RESTful API integration, enhancing geospatial data refresh speed by 25% through coordination with backend team and frontend state updates",
        "Maintained a high-availability React/Redux UI system servicing concurrent users, reducing stale-state occurrences by 35% and improving session stability through structured TypeScript typings",
      ],
      technologies: ["React", "Node.js", "Redux"],
    },
    {
      type: "work",
      title: "Software Engineering Intern",
      company: "Anvil",
      location: "Ottawa, ON",
      period: "Jan 2024 - May 2024",
      description:
        "Built on tools acclerating information management workflows through the use of machine learning",
      achievements: [
        "Resolved 15+ critical bugs across frontend and backend, improving platform stability and reducing QA regression cycles by 20% through React, Django and TDD principles",
        "Implemented a Cypress-based automated testing suite, boosting test coverage by 40% and reinforcing platform reliability",
        "Designed a dynamic loading screen to enhance UX during data fetches, reducing perceived wait times by 25% via optimized frontend rendering in React",
      ],
      technologies: ["Python", "Django", "TypeScript", "Cypress"],
    },
    {
      type: "work",
      title: "Software Developer",
      company: "Flexera",
      location: "Kanata, ON",
      period: "Jan 2023 - Apr 2023",
      description:
        "Worked with a team to build tools that provided cloud-cost management services to clients, enabling them to reduce cloud spend.",
      achievements: [
        "Employed React and Golang to process real-time billing from AWS/Azure/GCP, enabling clients to reduce multi-cloud spend by 30 to 40%",
        "Optimized and containerized 3 microservices using Docker and Kubernetes, trimming service startup latency by 30% to improve platform responsiveness",
        "Developed frontend and backend features for Snow Cloud Cost platform, facilitating dashboards with 50+ savings recommendations",
      ],
      technologies: ["React", "Golang", "Docker", "Kubernetes"],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science, AI and Machine Learning",
      company: "Carleton University",
      location: "Ottawa, ON",
      period: "2O20 - 2025",
      description: "Graduated with academic distinction",
      achievements: ["GPA: 3.7/4.0", "Won 2 hackathon competitions"],
      technologies: [
        "Java",
        "C++",
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "Networking",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background in software
            development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } ml-16 md:ml-0`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          {exp.type === "work" ? (
                            <Building className="w-4 h-4 text-primary" />
                          ) : (
                            <GraduationCap className="w-4 h-4 text-primary" />
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {exp.location}
                        </p>

                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-sm text-muted-foreground flex items-start"
                                >
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-2">
                              Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
