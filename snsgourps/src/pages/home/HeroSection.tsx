import CircularDiagram from './CircularDiagram';

const HeroSection = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Circular Diagram */}
        <div className="flex items-center justify-center min-h-[500px] md:min-h-[660px]">
          <CircularDiagram />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
