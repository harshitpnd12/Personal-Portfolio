import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    institution: "Institute of Engineering and Technology, Agra",
    year: "2021 - 2025",
    grade: "CGPA: 6.90/10",
    image: "/projects/iet.jpeg",
  },
  {
    id: 2,
    degree: "12th (PCM)",
    institution: "Lions School",
    board: "CBSE Board",
    year: "2020 - 2021",
    grade: "Percentage: 78.8%",
    image: "/projects/Lions School.jpeg",
  },
  {
    id: 3,
    degree: "10th",
    institution: "Lions School",
    board: "CBSE Board",
    year: "2018 - 2019",
    grade: "Percentage: 84%",
    image: "/projects/lions school 10.jpeg",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is my academic background showcasing qualifications and
          performance in school and college.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {edu.image ? (
                  <img
                    src={edu.image}
                    alt={edu.degree}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex justify-center items-center h-full bg-muted">
                    <GraduationCap
                      size={48}
                      className="text-muted-foreground"
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground text-sm mb-1">
                  {edu.board}
                </p>
                <p className="text-muted-foreground text-sm mb-1">{edu.year}</p>
                <p className="text-muted-foreground text-sm">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
