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

  const pills = [
    {
      title: "SNS Venture Capital & Investment",
      color: "#E63A2E",
      mid: (328 + 360) / 2,
      icon: Building2,
    },
    {
      title: "SNS Square Technologies",
      color: "#8BCF00",
      mid: (291 + 323) / 2,
      icon: Laptop,
    },
    {
      title: "SNS Innovation Hub",
      color: "#E5008D",
      mid: (254 + 286) / 2,
      icon: Brain,
    },
    {
      title: "SNS Institutions",
      color: "#FF6A00",
      mid: (217 + 249) / 2,
      icon: School,
    },
    {
      title: "SNS SPINE",
      color: "#00C4F4",
      mid: (180 + 212) / 2,
      icon: HeartPulse,
    },
  ];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-start"
      style={{
        marginTop: "-40px",
      }}
    >
      {/* ✅ ONLY THIS WRAPPER IS NEW */}
      <div style={{ transform: "translateX(400px)" }}>
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
              <h1 className="text-5xl font-extrabold text-black">SNS</h1>
              <p className="mt-3 text-lg text-black">Design Thinking</p>
              <p className="text-lg text-black">Consultancy</p>
            </div>
          </div>

          {/* ===== RIGHT-SIDE DOTS + PILLS ===== */}
          {pills.map((p) => {
            const Icon = p.icon;
            const mirrored = (360 - p.mid) % 360;
            const dotSize = 48;

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
                  style={{
                    left: dotLeft + dotSize + 18,
                    top: dotPos.y - 22,
                    backgroundColor: p.color,
                    color: "white",
                    padding: "12px 28px",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
                  }}
                >
                  {p.title}
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
