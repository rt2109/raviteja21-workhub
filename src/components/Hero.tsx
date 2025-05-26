import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Sun } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block opacity-90">I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 animate-pulse">
                Raviteja
              </span>
              <span className="block opacity-90">Yarramsetti</span>
            </h1>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="text-2xl lg:text-3xl font-semibold mb-2 text-purple-100"> Engineer & Developer</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">Python</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">AWS DevOps</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20">Web Development</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl mb-8 text-purple-100 leading-relaxed max-w-2xl">
              Passionate about combining technical expertise with innovative solutions. 
              Specializing in cloud engineering, electrical systems, and sustainable energy solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-md text-gray-900">
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Enhanced Profile Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Profile Circle */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 opacity-20 animate-pulse"></div>
                
                {/* Profile Image Circle */}
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full relative overflow-hidden shadow-2xl">
                  <img src="https://i.postimg.cc/YqnvcJ0G/professional-pic-of-me.webp" alt="Raviteja Yarramsetti - Profile Picture" className="w-full h-full object-cover object-center" />
                  
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce group-hover:animate-pulse">
                <Zap className="text-white w-8 h-8" />
              </div>
              <div className="absolute top-1/4 -left-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-300 group-hover:animate-pulse">
                <Sun className="text-white w-7 h-7" />
              </div>
              <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-700 group-hover:animate-pulse">
                <Code className="text-white w-6 h-6" />
              </div>

              {/* Orbital Elements */}
              <div className="absolute inset-0 animate-spin" style={{
              animationDuration: '20s'
            }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/50 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{
              animationDuration: '15s',
              animationDirection: 'reverse'
            }}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-300/70 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;