const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-slate-50 via-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          About SNS Groups
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Building Entrepreneurial mindset using GenAI powered Design Thinking Framework 
              while Redesigning Common Mind & Business towards Excellence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">What We Do</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="font-bold text-lg text-gray-800">Venture Capital & Investment</h3>
                <p className="text-gray-600">Strategic investments in promising startups and innovative ventures.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-bold text-lg text-gray-800">Square Technologies</h3>
                <p className="text-gray-600">Cutting-edge IT solutions and software development services.</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <h3 className="font-bold text-lg text-gray-800">Innovation Hub</h3>
                <p className="text-gray-600">Fostering entrepreneurship through mentorship and resources.</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-bold text-lg text-gray-800">Institutions</h3>
                <p className="text-gray-600">High-quality educational institutions building future leaders.</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-bold text-lg text-gray-800">SPINE</h3>
                <p className="text-gray-600">Holistic approach to wellness and sports development.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-gray-800 mb-2">1000+</div>
                <div className="text-gray-600">Startups Supported</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
