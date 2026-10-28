import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Cloud, Zap, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      badge: "US IT & Non-IT Recruitment",
      title: "US Recruiter",
      company: "Yochana IT Solutions",
      location: "Farmington Hills, Michigan, USA (Offshore)",
      period: "Nov 2025 – Present",
      points: [
        "Managing end-to-end recruitment for US Non-IT and IT requirements, supporting direct clients and implementing partners.",
        "Working across Energy, Engineering, Aerospace, Automotive, IT, Cloud, and Medical domains — translating job descriptions into effective sourcing strategies.",
        "Sourcing through LinkedIn Recruiter, Indeed, Dice, Glassdoor, Monster, Ceipal, and internal databases; handling screening, qualification, submissions, and interview coordination.",
        "Supporting direct-client hiring for Fishbeck, CNC, TMC, Cyient, and Stantec, plus Aerospace (United Airlines, Boeing, Bell Textron) and IT requirements for Value Labs, TCS, Infosys, NVIDIA, Oracle, IBM, and more.",
        "Working on W2, C2H/C2C, and Full-Time hiring models while maintaining candidate engagement and accurate ATS records.",
      ],
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Cloud,
      badge: "Technical Internship",
      title: "Cloud Engineer Intern",
      company: "Infoz IT Solutions Ltd.",
      location: "India",
      period: "June 2024 – Mar 2025",
      points: [
        "Deployed applications using AWS EC2, S3, and IAM.",
        "Automated CI/CD pipelines using Jenkins and Git.",
        "Supported Linux server management and monitoring.",
      ],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Zap,
      badge: "Technical Internship",
      title: "Solar PV & Power Systems Intern",
      company: "AP TRANSCO",
      location: "Bommuru, Rajahmundry, India",
      period: "Sept 2024 – Nov 2024",
      points: [
        "Worked on the Solar PV-Fed Multilevel Inverter with Series Compensator project for power quality improvement in grid-connected systems.",
        "Evaluated dynamic performance of the DVR using MATLAB/Simulink; results demonstrated improved voltage-sag compensation and power quality.",
        "Tools used: MATLAB/Simulink, MPPT, PI Controller.",
      ],
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Experience</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional recruitment experience combined with hands-on technical
            internships across cloud engineering and power systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon className="text-white" size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="text-sm px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-purple-100">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-purple-200 font-medium">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="text-yellow-300 text-sm font-semibold mb-5">{exp.period}</p>

                    <ul className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-purple-100">
                          <span className="w-2 h-2 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full mr-3 mt-2 shrink-0"></span>
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-purple-200 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Availability</h3>
            </div>
            <p className="text-purple-100">
              Available for US IT Recruiter, US Non-IT Recruiter, and Talent
              Acquisition opportunities — Remote / Hybrid, Full-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
