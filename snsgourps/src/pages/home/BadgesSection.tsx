const BadgesSection = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-base md:text-lg font-semibold text-gray-700 mb-6">
          Redesigning Common Minds & Business Towards Excellence
        </h2>
        
        {/* Badges Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
          {/* 1000+ Startups Badge */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 px-8 py-6 md:px-12 md:py-8 rounded-t-2xl text-center shadow-md">
              <div className="text-5xl md:text-6xl font-extrabold text-black leading-none">1000</div>
              <div className="text-sm md:text-base font-bold text-black mt-1">+ Startups</div>
            </div>
            <div className="bg-black text-white px-8 py-3 text-center font-bold w-full shadow-md">
              <span className="text-4xl md:text-5xl font-extrabold">10</span>
              <span className="text-lg md:text-xl">+ Years</span>
            </div>
          </div>

          {/* SNS Institutions Logo */}
          <div className="flex items-center justify-center">
            <img 
              src="/assets/sns-DxCft4Qp.png" 
              alt="SNS Institutions" 
              className="h-28 md:h-36 w-auto object-contain"
            />
          </div>  

          {/* GenAI Badge */}
          <div className="bg-yellow-400 px-8 py-6 md:px-10 md:py-8 rounded-2xl text-center shadow-md">
            <div className="text-3xl md:text-4xl font-extrabold text-black">1</div>
            <div className="text-xl md:text-2xl font-bold text-black">GenAI</div>
            <div className="text-sm md:text-base font-semibold text-black mt-1">Design</div>
            <div className="text-sm md:text-base font-semibold text-black">Thinking</div>
            <div className="text-sm md:text-base font-semibold text-black">Framework</div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm md:text-base text-gray-600 font-medium">
          Build an Entrepreneurial Mindset Through Our Design Thinking FrameWork
        </p>
      </div>
    </section>
  );
};

export default BadgesSection;
