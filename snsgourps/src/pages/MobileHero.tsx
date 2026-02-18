
import {
  Building2,
  Laptop,
  Lightbulb,
  School,
  Dumbbell,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'SNS Venture Capital and Investments',
    description: 'Funding high-potential startups for ownership stakes',
    color: '#e53935',
    link: '#',
  },
  {
    icon: Laptop,
    title: 'SNS Square Technologies',
    description: 'Empowering digital transformations with IT and software solutions.',
    color: '#a6ce39',
    link: 'https://www.snssquare.com/',
  },
  {
    icon: Lightbulb,
    title: 'SNS Innovation Hub',
    description: 'Empowering digital transformations with IT and software solutions.',
    color: '#e91e63',
    link: 'https://snsihub.ai/',
  },
  {
    icon: School,
    title: 'SNS Institutions',
    description: 'Nurturing holistic development through quality education.',
    color: '#f05a28',
    link: 'https://main.snsgroups.com/',
  },
  {
    icon: Dumbbell,
    title: 'SNS SPINE',
    description: 'Igniting Gen Y through movement, innovation, and teamwork',
    color: '#0ea5c6',
    link: 'https://snsspine.in/',
  },
];

const MobileHero = () => {
  // Config
  // Centered & Spaced Layout
  // Container Height: 700px (Centered Vertical)
  // Center Y = 350

  // Outer Circle: R=170. Center X = -10.
  // Geometry matches previous stable version.

  const items = [
    { px: 47, py: 190 },  // Venture (0)
    { px: 131, py: 255 }, // Square (1)
    { px: 160, py: 350 }, // Hub (2)
    { px: 131, py: 445 }, // Inst (3)
    { px: 47, py: 510 },  // Spine (4)
  ];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '700px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      <div style={{ position: 'relative', height: '700px' }}>
        {/* OUTER GRAY ARC */}
        <div
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            border: '3px solid #b0b0b0',
            left: '-180px',
            top: '180px', // Center Y = 350. Top = 180.
            zIndex: 1,
            boxShadow: '0 0 20px rgba(0,0,0,0.07)',
          }}
        />

        {/* INNER YELLOW CORE */}
        <div
          style={{
            position: 'absolute',
            width: '270px',
            height: '270px',
            borderRadius: '50%',
            backgroundColor: '#fde047',
            border: '7px solid #fff',
            left: '-145px',
            top: '215px', // Center Y = 350. Top = 215.
            zIndex: 2,
            boxShadow: '0 0 12px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '155px',
            boxSizing: 'border-box',
          }}
        >
          <h1
            style={{
              width: '110px',
              fontSize: '0.9rem',
              fontWeight: 800,
              lineHeight: '1.25',
              color: '#000',
              textAlign: 'left',
              margin: 0,
              marginTop: '-5px',
            }}
          >
            SNS Design Thinking Consultancy
          </h1>
        </div>

        {/* SERVICE ITEMS */}
        {items.map(({ px, py }, index) => {
          const service = services[index];
          const Icon = service.icon;
          const iconSize = 34;

          // Vertical Alignment Logic
          let topPosition = py - 12; // Default (Centered on Icon)

          if (index === 0) {
            topPosition = py - 50; // Venture: Shift UP heavily
          } else if (index === 4) {
            // Spine: Was py+12, user said "went more down" (too low).
            // Let's optimize: py - 5 (Slightly down from center, but not +12).
            topPosition = py - 5;
          }

          // Width Logic to force breaks
          // Square (1), Hub (2), Inst (3).
          let maxWidthVal = 'calc(100vw - 120px)';
          if (index === 1) maxWidthVal = '150px'; // Square
          if (index === 2) maxWidthVal = '150px'; // Hub (New Break)
          if (index === 3) maxWidthVal = '130px'; // Institutions (Force Harder Break)

          return (
            <div
              key={index}
              style={{ position: 'absolute', zIndex: 10, cursor: 'pointer' }}
              onClick={() => window.open(service.link, '_blank')}
            >
              {/* Icon */}
              <div
                style={{
                  position: 'absolute',
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  borderRadius: '50%',
                  backgroundColor: service.color,
                  border: '2px solid #fff',
                  left: `${px - iconSize / 2}px`,
                  top: `${py - iconSize / 2}px`,
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                }}
              >
                <Icon size={18} color="#fff" />
              </div>

              {/* Text Container */}
              <div
                style={{
                  position: 'absolute',
                  left: `${px + iconSize / 2 + 24}px`,
                  top: `${topPosition}px`,
                  zIndex: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: 'max-content',
                  maxWidth: maxWidthVal,
                  whiteSpace: 'normal',
                }}
              >
                <div
                  style={{
                    backgroundColor: service.color,
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    marginBottom: '4px',
                    textAlign: 'left',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {service.title}
                </div>
                <p
                  style={{
                    fontSize: '9px',
                    color: '#555',
                    maxWidth: '100%',
                    lineHeight: '1.3',
                    fontWeight: '500',
                    margin: 0,
                    whiteSpace: 'normal',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileHero;
