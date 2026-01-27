import React from 'react';
import { Building2, Laptop, Lightbulb, GraduationCap, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Circular Diagram */}
        <div className="flex items-center justify-center min-h-[500px] md:min-h-[660px]">
          <div className="relative w-full max-w-[1200px] h-[500px] md:h-[660px] flex items-center justify-center px-4">
            {/* Central Yellow Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                {/* White border circle */}
                <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-white flex items-center justify-center shadow-2xl border-[15px] md:border-[20px] border-white">
                  {/* Yellow inner circle */}
                  <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-[#FFD700] flex items-center justify-center">
                    <div className="text-center px-4">
                      <h1 className="text-2xl md:text-4xl font-extrabold text-black">SNS</h1>
                      <p className="text-sm md:text-lg font-semibold text-black mt-1 md:mt-2">Design Thinking</p>
                      <p className="text-sm md:text-lg font-semibold text-black">Consultancy</p>
                    </div>
                  </div>
                </div>

                {/* Colored Arcs around the circle - Hidden on mobile for cleaner look */}
                <div className="hidden md:block">
                  {/* Red Arc (Top) */}
                  <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[250px] h-[75%] border-[20px] border-transparent border-t-[#DE2A1B] rounded-t-[60px] z-0"></div>
                  
                  {/* Green Arc (Top Right) */}
                  <div className="absolute top-[60%] left-[50%] translate-x-[55%] translate-y-[-112%] w-[140px] h-[99%] border-[20px] border-transparent border-l-transparent border-t-transparent border-[#B0D402] rounded-[60px] rotate-45 z-0"></div>
                  
                  {/* Pink Arc (Right) */}
                  <div className="absolute top-1/4 right-[-12px] w-[180px] h-[250px] border-[20px] border-transparent border-l-transparent border-[#E10485] rounded-[60px] z-0"></div>
                  
                  {/* Orange Arc (Bottom Right) */}
                  <div className="absolute bottom-1/4 left-[50%] translate-x-[50%] translate-y-[165%] w-[140px] h-[320px] border-[20px] border-transparent border-l-transparent border-t-transparent border-[#EB510B] rounded-[60px] rotate-90 z-0"></div>
                  
                  {/* Cyan Arc (Bottom) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[250%] w-[200px] h-[500px] border-[20px] border-transparent border-l-transparent border-r-transparent border-[#01A3D4] rounded-[60px] z-0"></div>
                </div>
              </div>
            </div>

            {/* Pill-shaped Buttons with Icons - Responsive positioning */}
            {/* Red Button - SNS Venture Capital & Investment */}
            <div className="absolute top-[8%] md:top-[15%] left-[50%] translate-x-[20%] md:translate-x-[90%] z-20">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#DE2A1B] flex items-center justify-center text-white shadow-xl">
                  <Building2 className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="bg-[#DE2A1B] text-white px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl whitespace-nowrap">
                  <span className="hidden sm:inline">SNS Venture Capital & Investment</span>
                  <span className="sm:hidden">Venture Capital</span>
                </div>
              </div>
            </div>

            {/* Green Button - SNS Square Technologies */}
            <div className="absolute top-[25%] md:top-[30%] right-[2%] md:right-[5%] z-20">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#B0D402] flex items-center justify-center text-white shadow-xl">
                  <Laptop className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="bg-[#B0D402] text-white px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl whitespace-nowrap">
                  <span className="hidden sm:inline">SNS Square Technologies</span>
                  <span className="sm:hidden">Technologies</span>
                </div>
              </div>
            </div>

            {/* Pink Button - SNS Innovation Hub */}
            <div className="absolute top-[45%] md:top-1/2 right-[5%] md:right-[8%] -translate-y-1/2 z-20">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#E10485] flex items-center justify-center text-white shadow-xl">
                  <Lightbulb className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="bg-[#E10485] text-white px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl whitespace-nowrap">
                  <span className="hidden sm:inline">SNS Innovation Hub</span>
                  <span className="sm:hidden">Innovation</span>
                </div>
              </div>
            </div>

            {/* Orange Button - SNS Institutions */}
            <div className="absolute bottom-[25%] md:bottom-[30%] right-[8%] md:right-[12%] z-20">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#EB510B] flex items-center justify-center text-white shadow-xl">
                  <GraduationCap className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="bg-[#EB510B] text-white px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl whitespace-nowrap">
                  <span className="hidden sm:inline">SNS Institutions</span>
                  <span className="sm:hidden">Institutions</span>
                </div>
              </div>
            </div>

            {/* Cyan Button - SNS SPINE */}
            <div className="absolute bottom-[8%] md:bottom-[15%] left-1/2 translate-x-[20%] md:translate-x-[95%] z-20">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#01A3D4] flex items-center justify-center text-white shadow-xl">
                  <Heart className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="bg-[#01A3D4] text-white px-3 py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl whitespace-nowrap">
                  <span className="hidden sm:inline">SNS SPINE</span>
                  <span className="sm:hidden">SPINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
