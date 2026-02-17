import React from "react";
import {
  Building2,
  Laptop,
  Brain,
  School,
  HeartPulse,
} from "lucide-react";

/* ===============================
   ARC MATH HELPERS
   =============================== */
const polarToCartesian = (
  cx: number,
  cy: number,
  r: number,
  angle: number
) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
};

const describeArc = (
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) => {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return `
    M ${start.x} ${start.y}
    A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}
  `;
};

/* ===============================
   HERO
   =============================== */
const Hero: React.FC = () => {
  const SIZE = 480;
  const CENTER = SIZE / 2;
  const RADIUS = 225;
  const STROKE = 30;
  const [hoveredPill, setHoveredPill] = React.useState<number | null>(null);

  const pills = [
    {
      title: "SNS Venture Capital & Investment",
      description: "Funding high-potential startups for ownership stakes.",
      color: "#E63A2E",
      mid: (328 + 360) / 2,
      icon: Building2,
    },
    {
      title: "SNS Square Technologies",
      description: "Driving digital transformation with cutting-edge IT and software solutions.",
      color: "#8BCF00",
      mid: (291 + 323) / 2,
      icon: Laptop,
    },
    {
      title: "SNS Innovation Hub",
      description: "Empowering digital transformations with IT and software solutions.",
      color: "#E5008D",
      mid: (254 + 286) / 2,
      icon: Brain,
    },
    {
      title: "SNS Institutions",
      description: "Fostering holistic growth through high-quality education.",
      color: "#FF6A00",
      mid: (217 + 249) / 2,
      icon: School,
    },
    {
      title: "SNS SPINE",
      description: "Enabling mental and physical well-being through sports, gaming, entertainment and clubs.",
      color: "#00C4F4",
      mid: (180 + 212) / 2,
      icon: HeartPulse,
    },
  ];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-start relative"
      style={{
        marginTop: "-40px",
      }}
    >
      {/* Gradient background blob - top right */}
      <div 
        className="absolute z-0" 
        style={{
          top: '0',
          right: '0',
          width: '500px',
          height: '280px',
          background: 'linear-gradient(90deg, #FFF4D6 0%, #FFEEB8 100%)',
          opacity: 0.5,
          borderRadius: '140px',
          filter: 'blur(50px)',
        }}
      ></div>
      
      {/* Gradient background blob - bottom left */}
      <div 
        className="absolute z-0" 
        style={{
          bottom: '0',
          left: '0',
          width: '500px',
          height: '280px',
          background: 'linear-gradient(90deg, #FFF4D6 0%, #FFEEB8 100%)',
          opacity: 0.5,
          borderRadius: '140px',
          filter: 'blur(50px)',
        }}
      ></div>
      
      {/* ✅ ONLY THIS WRAPPER IS NEW */}
      <div style={{ transform: "translateX(300px)" }}>
        <div
          className="relative flex items-center justify-center"
          style={{ width: SIZE, height: SIZE }}
        >
          {/* ===== OUTER ARCS ===== */}
          <svg
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="absolute inset-0"
          >
            <path d={describeArc(CENTER, CENTER, RADIUS, 328, 360)} stroke="#E63A2E" strokeWidth={STROKE} fill="none" />
            <path d={describeArc(CENTER, CENTER, RADIUS, 291, 323)} stroke="#8BCF00" strokeWidth={STROKE} fill="none" />
            <path d={describeArc(CENTER, CENTER, RADIUS, 254, 286)} stroke="#E5008D" strokeWidth={STROKE} fill="none" />
            <path d={describeArc(CENTER, CENTER, RADIUS, 217, 249)} stroke="#FF6A00" strokeWidth={STROKE} fill="none" />
            <path d={describeArc(CENTER, CENTER, RADIUS, 180, 212)} stroke="#00C4F4" strokeWidth={STROKE} fill="none" />
          </svg>

          {/* ===== CENTER ===== */}
          <div
            className="absolute rounded-full bg-white flex items-center justify-center"
            style={{
              width: 360,
              height: 360,
              boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
            }}
          >
            <div
              className="rounded-full bg-[#FFCC00] flex flex-col items-center justify-center text-center"
              style={{ width: 310, height: 310 }}
            >
              <h1 className="font-black text-black" style={{ fontSize: '60px', lineHeight: '1', marginBottom: '0px' }}>SNS</h1>
              <p className="font-medium text-black" style={{ fontSize: '22px', lineHeight: '0', marginBottom: '0px' }}>Design Thinking</p>
              <p className="font-medium text-black" style={{ fontSize: '22px', lineHeight: '1.3' }}>Consultancy</p>
            </div>
          </div>

          {/* ===== RIGHT-SIDE DOTS + PILLS ===== */}
          {pills.map((p, index) => {
            const Icon = p.icon;
            const mirrored = (360 - p.mid) % 360;
            const dotSize = 48;
            const isHovered = hoveredPill === index;

            const dotPos = polarToCartesian(
              CENTER,
              CENTER,
              RADIUS - STROKE / 2 + 8,
              mirrored
            );

            const dotLeft = dotPos.x - dotSize / 2 + 40;
            const dotTop = dotPos.y - dotSize / 2;

            return (
              <React.Fragment key={p.title}>
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: dotLeft,
                    top: dotTop,
                    width: dotSize,
                    height: dotSize,
                    borderRadius: "9999px",
                    backgroundColor: p.color,
                    boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                  }}
                >
                  <Icon size={24} color="white" />
                </div>

                <div
                  className="absolute"
                  onMouseEnter={() => setHoveredPill(index)}
                  onMouseLeave={() => setHoveredPill(null)}
                  style={{
                    left: dotLeft + dotSize + 18,
                    top: isHovered ? dotPos.y - 38 : dotPos.y - 22,
                    backgroundColor: p.color,
                    color: "white",
                    padding: isHovered ? "18px 28px" : "12px 28px",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    whiteSpace: isHovered ? "normal" : "nowrap",
                    boxShadow: isHovered ? "0 10px 20px rgba(0,0,0,0.15)" : "0 6px 14px rgba(0,0,0,0.08)",
                    width: "420px",
                    textAlign: "center",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ 
                    transition: "opacity 0.3s ease",
                    opacity: isHovered ? 0.95 : 1
                  }}>
                    {p.title}
                  </div>
                  <div style={{ 
                    fontSize: "14px", 
                    fontWeight: 400, 
                    marginTop: isHovered ? "8px" : "0px",
                    lineHeight: "1.4",
                    maxHeight: isHovered ? "100px" : "0px",
                    opacity: isHovered ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}>
                    {p.description}
                  </div>
                </div>

              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
