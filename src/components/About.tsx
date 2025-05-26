import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User, Target } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            A passionate Electrical Engineering graduate with a strong foundation in technical innovation 
            and a drive to solve complex challenges through creative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-yellow-300 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-purple-100">
                  <strong>B.Tech in Electrical and Electronics Engineering</strong><br />
                  Sir C R Reddy College of Engineering<br />
                  Class of 2024
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="text-blue-300 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Personal Profile</h3>
                </div>
                <p className="text-purple-100">
                  A detail-oriented engineer with excellent communication skills and a proactive attitude. 
                  I excel in problem-solving and time management, always seeking innovative approaches to 
                  technical challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="text-green-300 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Mission</h3>
                </div>
                <p className="text-purple-100">
                  To combine technical expertise with creative problem-solving to deliver innovative 
                  solutions in cloud engineering, electrical systems, and software development.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-purple-100">
                <p>As a recent Engineering graduate, I've developed a unique blend of traditional electrical engineering knowledge and modern software development skills.</p>
                <p>
                  My passion lies in the intersection of hardware and software, particularly in 
                  areas like IoT systems, cloud infrastructure, and renewable energy solutions.
                </p>
                <p>
                  I'm enthusiastic about contributing to challenging projects that push the boundaries 
                  of technology and create meaningful impact in the industry.
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Core Values</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Innovation through collaboration</li>
                    <li>Continuous learning and growth</li>
                    <li>Quality-driven development</li>
                    <li>Sustainable technology solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;