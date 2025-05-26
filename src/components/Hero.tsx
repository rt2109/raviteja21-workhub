
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hire Me To
              <br />
              Design Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Projects.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-purple-100">
              Passionate Electrical Engineering graduate specializing in Python, AWS DevOps, and Solar PV systems. 
              Ready to bring innovative solutions to challenging projects.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-purple-300 to-blue-400 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">RY</div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">☀️</span>
              </div>
              <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">🐍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
