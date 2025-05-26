
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cloud, Zap, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Python", "C++", "MATLAB/Simulink", "MySQL basics", "Linux Commands"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS DevOps", "Cloud Engineering", "Infrastructure Management", "System Administration"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      skills: ["Solar PV Plant Design", "Power Quality Improvement", "Electrical Systems", "Grid Integration"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Cpu,
      title: "Embedded & Systems",
      skills: ["Arduino", "Embedded Systems", "Operating Systems", "IoT Development"],
      color: "from-purple-400 to-purple-600"
    }
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Detail Orientation",
    "Time Management",
    "Proactive Attitude",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            A comprehensive skill set spanning software development, cloud technologies, 
            and electrical engineering systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-purple-100 text-sm flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-3 text-center hover:bg-white/20 transition-colors duration-300">
                <span className="text-purple-100 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
