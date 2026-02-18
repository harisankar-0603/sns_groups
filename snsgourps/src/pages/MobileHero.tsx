import React from 'react';
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
    description: 'Funding high-potential startups for strategic ownership stakes.',
    color: '#e53935',
    link: '#',
  },
  {
    icon: Laptop,
    title: 'SNS Square Technologies',
    description: 'Driving digital transformation with cutting-edge IT and software solutions.',
    color: '#a6ce39',
    link: 'https://www.snssquare.com/',
  },
  {
    icon: Lightbulb,
    title: 'SNS Innovation Hub',
    description: 'Empowering entrepreneurs with mentorship, resources and a platform for innovation.',
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
    description: 'Igniting Gen Y through movement, innovation, and teamwork.',
    color: '#0ea5c6',
    link: 'https://snsspine.in/',
  },
];

const MobileHero: React.FC = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundColor: '#f4f4f4',
        paddingTop: '64px',
        paddingBottom: '64px',
        minHeight: '900px',
        overflow: 'hidden',
      }}
    >
      <div className="relative" style={{ minHeight: '820px' }}>
        {/* Outer Circle — gray border, no fill */}
        <div
          className="absolute rounded-full"
          style={{
            width: '580px',
            height: '580px',
            border: '4px solid #b0b0b0',
            top: '50%',
            left: '-290px',
            transform: 'translateY(-50%)',
          }}
        />

        {/* Yellow Inner Core */}
        <div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: '480px',
            height: '480px',
            backgroundColor: '#f4c430',
            top: '50%',
            left: '-240px',
            transform: 'translateY(-50%)',
          }}
        >
          <p
            style={{
              width: '220px',
              fontSize: '1.75rem',
              fontWeight: 600,
              lineHeight: '1.25',
              textAlign: 'left',
              color: '#000',
              marginLeft: '280px',
            }}
          >
            SNS Design Thinking Consultancy
          </p>
        </div>

        {/* Service Items — arc-positioned around circle */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '700px',
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const servicePositions = [
              'translate(102px, 170px)',
              'translate(210px, 280px)',
              'translate(270px, 430px)',
              'translate(210px, 580px)',
              'translate(102px, 690px)',
            ];
            return (
              <div
                key={service.title}
                className="absolute flex flex-row items-center gap-3 cursor-pointer"
                style={{
                  transform: servicePositions[index],
                }}
                onClick={() => window.open(service.link, '_blank', 'noopener,noreferrer')}
              >
                {/* Icon Circle */}
                <div
                  className="rounded-full flex items-center justify-center shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: service.color,
                  }}
                >
                  <Icon style={{ width: '18px', height: '18px', color: '#fff' }} />
                </div>

                {/* Content Block */}
                <div className="flex flex-col" style={{ maxWidth: '200px' }}>
                  {/* Colored Title Bar */}
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: service.color,
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 700,
                      paddingLeft: '20px',
                      paddingRight: '20px',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                      borderRadius: '8px',
                      width: 'fit-content',
                    }}
                  >
                    {service.title}
                  </span>

                  {/* Description */}
                  <p
                    style={{
                      marginTop: '8px',
                      maxWidth: '200px',
                      fontSize: '12px',
                      lineHeight: '1.6',
                      color: '#444',
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
