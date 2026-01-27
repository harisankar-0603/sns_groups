import React from "react";
import {
  Building2,
  Laptop,
  Lightbulb,
  GraduationCap,
  Heart,
} from "lucide-react";

/* ===============================
   SVG ARC HELPERS (CRITICAL)
   =============================== */
const polarToCartesian = (
  cx: number,
  cy: number,
  r: number,
  angle: number
) => {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
};

const arcPath = (
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
   HERO COMPONENT
   =============================== */
const Hero: React.FC = () => {
  // move SVG arc center left so semicircle sits on the left side of the center circle
  const cx = 170;
  const cy = 250;
  const radius = 200;

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center min-h-[650px]">
          <div className="relative w-[500px] h-[500px]">

            {/* ===============================
               OUTER ARC RING (SVG)
               =============================== */}
            <svg
              width="500"
              height="500"
              viewBox="0 0 500 500"
              className="absolute inset-0"
            >
              {/* Single Half Circle on the left side (top -> left -> bottom) */}
              <path
                d={arcPath(cx, cy, radius, 90, 270)}
                stroke="#333"
                strokeWidth="26"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* ===============================
               CENTER CIRCLE
               =============================== */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {/* White ring */}
              <div
                className="w-[300px] h-[300px] rounded-full bg-white flex items-center justify-center"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
                }}
              >
                {/* Yellow core */}
                <div className="w-[260px] h-[260px] rounded-full bg-[#FFD400] flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-black">
                      SNS
                    </h1>
                    <p className="mt-2 text-base font-semibold text-black">
                      Design Thinking
                    </p>
                    <p className="text-base font-semibold text-black">
                      Consultancy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================
               RIGHT SIDE LABELS
               =============================== */}
            <Label
              top="10%"
              color="#DE2A1B"
              icon={<Building2 />}
              text="SNS Venture Capital & Investment"
            />

            <Label
              top="26%"
              color="#9ACD32"
              icon={<Laptop />}
              text="SNS Square Technologies"
            />

            <Label
              top="44%"
              color="#E10485"
              icon={<Lightbulb />}
              text="SNS Innovation Hub"
            />

            <Label
              top="62%"
              color="#FF6B35"
              icon={<GraduationCap />}
              text="SNS Institutions"
            />

            <Label
              top="78%"
              color="#00BCD4"
              icon={<Heart />}
              text="SNS SPINE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===============================
   LABEL COMPONENT
   =============================== */
interface LabelProps {
  top: string;
  color: string;
  icon: React.ReactNode;
  text: string;
}

const Label: React.FC<LabelProps> = ({ top, color, icon, text }) => {
  return (
    <div
      className="absolute left-full ml-6 flex items-center gap-3"
      style={{ top }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div
        className="px-6 py-3 rounded-full text-white font-semibold text-sm whitespace-nowrap"
        style={{ backgroundColor: color }}
      >
        {text}
      </div>
    </div>  
  );
};

export default Hero;
