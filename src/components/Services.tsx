
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Globe, Code, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Building responsive, modern websites that combine aesthetic appeal with functional excellence.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Developing robust applications using Python, C++, and modern development practices.",
      features: ["Python Development", "System Programming", "Database Integration", "API Development", "Code Optimization"]
    },
    {
      icon: Zap,
      title: "Engineering Solutions",
      description: "Providing specialized electrical and embedded systems solutions for complex technical challenges.",
      features: ["Solar PV Systems", "Power Quality Analysis", "Embedded Systems", "IoT Solutions", "System Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Services</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive solutions combining technical expertise with creative design 
            to deliver exceptional digital products and engineering solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-purple-100 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-purple-100">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-100 mb-6">
              Let's collaborate to bring your ideas to life with innovative solutions 
              that combine technical excellence with creative design.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-300 to-orange-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
