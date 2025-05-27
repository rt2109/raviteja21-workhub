import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Volume2, Sun } from "lucide-react";
const Projects = () => {
  const projects = [{
    icon: Volume2,
    title: "Decibel Meter using Sound Module",
    description: "An innovative project to detect and display sound intensity levels using Arduino microcontroller with LCD display integration.",
    technologies: ["C++", "Arduino", "LCD Display", "Sound Sensors"],
    features: ["Real-time sound level detection", "LCD display integration", "Calibrated decibel measurements", "Portable design"],
    category: "Embedded Systems",
    color: "from-blue-400 to-blue-600"
  }, {
    icon: Sun,
    title: "Solar PV-Fed Multilevel Inverter with Series Compensator",
    description: "Advanced simulation project focused on power quality improvement in grid-connected solar systems using MATLAB/Simulink.",
    technologies: ["MATLAB/Simulink", "Power Systems", "Grid Integration", "Power Electronics"],
    features: ["Voltage sag compensation", "Power quality enhancement", "Dynamic performance evaluation", "Grid integration analysis"],
    category: "Power Systems",
    color: "from-yellow-400 to-orange-500"
  }];
  return <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Portfolio & Projects</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise 
            and problem-solving capabilities across different engineering domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-purple-200 mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-purple-100 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-purple-100">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-300 to-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>)}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="bg-white/20 text-purple-100 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>)}
                  </div>
                </div>

                <div className="flex gap-3">
                  
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                    <Github size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-purple-100 mb-6">
              I'm continuously working on new projects that push the boundaries of technology. 
              Stay tuned for updates on cloud infrastructure solutions, IoT applications, 
              and innovative engineering projects.
            </p>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;