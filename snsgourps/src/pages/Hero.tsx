import React from "react";
import {
  Building2,
  Laptop,
  Brain,
  School,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";

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

  // CINEMATIC EASING
  // Apple-like smooth cubic-bezier
  // Cast to any to avoid TS tuple issues while valid in Framer Motion
  const EASE_CINEMATIC: any = [0.22, 1, 0.36, 1];

  // Animation constants
  const BACKGROUND_DURATION = 0.8;

  // Circle visual reveals
  const OUTER_CIRCLE_DURATION = 1.0;
  const INNER_CIRCLE_DELAY = 0.2; // Stagger inner after outer
  const ARCS_DURATION = 1.2;

  // Text Animations (Inside Circle)
  // Headline starts at 300ms
  const HEADLINE_DELAY = 0.3;
  const HEADLINE_DURATION = 0.9;

  // Subheading starts 200ms after headline begins
  const SUBHEADING_DELAY = HEADLINE_DELAY + 0.2;
  const SUBHEADING_DURATION = 0.8;

  // Right Side Elements
  // Dots enter after circles are mostly established or alongside text
  // Let's time them to start feeling "grounded" as the text settles
  const DOT_START_DELAY = 1.0;
  const DOT_DURATION = 0.8;

  // Pills follow dots
  const PILL_START_DELAY = DOT_START_DELAY + 0.3;
  const PILL_STAGGER = 0.12; // Micro stagger

  return (
    <section
      className="w-full min-h-screen flex items-center justify-start relative"
      style={{
        marginTop: "-40px",
      }}
    >
      {/* Gradient background blob - top right */}
      <motion.div
        className="absolute z-0"
        style={{
          top: '-10px',
          right: '0',
          width: '500px',
          height: '500px',
          background: 'linear-gradient(90deg, #FFF4D6 0%, #FFEEB8 100%)',
          borderRadius: '140px',
          filter: 'blur(30px)',
        }}
        initial={{ opacity: 0, y: 5 }} // Subtle shift
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: BACKGROUND_DURATION, ease: "easeOut" }}
      ></motion.div>

      {/* Gradient background blob - bottom left */}
      <motion.div
        className="absolute z-0"
        style={{
          bottom: '-10px',
          left: '0',
          width: '500px',
          height: '500px',
          background: 'linear-gradient(90deg, #FFF4D6 0%, #FFEEB8 100%)',
          borderRadius: '140px',
          filter: 'blur(30px)',
        }}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: BACKGROUND_DURATION, ease: "easeOut" }}
      ></motion.div>

      {/* ✅ MAIN VISUAL WRAPPER */}
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
            {[
              { start: 328, end: 360, color: "#E63A2E" },
              { start: 291, end: 323, color: "#8BCF00" },
              { start: 254, end: 286, color: "#E5008D" },
              { start: 217, end: 249, color: "#FF6A00" },
              { start: 180, end: 212, color: "#00C4F4" },
            ].map((arc, i) => (
              <motion.path
                key={i}
                d={describeArc(CENTER, CENTER, RADIUS, arc.start, arc.end)}
                stroke={arc.color}
                strokeWidth={STROKE}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: ARCS_DURATION,
                  ease: EASE_CINEMATIC,
                  delay: 0, // Starts immediately
                }}
              />
            ))}
          </svg>

          {/* ===== CENTER - OUTER WHITE CIRCLE ===== */}
          <motion.div
            className="absolute rounded-full bg-white flex items-center justify-center"
            style={{
              width: 360,
              height: 360,
              // Subtle shadow as requested
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{
              clipPath: "inset(0 0 0 0)",
              transitionEnd: { clipPath: "none" }
            }}
            transition={{
              duration: OUTER_CIRCLE_DURATION,
              ease: EASE_CINEMATIC,
              delay: 0,
            }}
          >
            {/* ===== CENTER - INNER YELLOW CIRCLE ===== */}
            <motion.div
              className="rounded-full bg-[#FFCC00] flex flex-col items-center justify-center text-center"
              style={{ width: 300, height: 300 }}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{
                clipPath: "inset(0 0 0 0)",
                transitionEnd: { clipPath: "none" }
              }}
              transition={{
                duration: OUTER_CIRCLE_DURATION,
                ease: EASE_CINEMATIC,
                delay: INNER_CIRCLE_DELAY,
              }}
            >
              {/* TEXT CONTENT - HEADLINE */}
              <motion.h1
                className="font-black text-black"
                style={{ fontSize: '60px', lineHeight: '1', marginBottom: '0px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: HEADLINE_DURATION,
                  ease: EASE_CINEMATIC,
                  delay: HEADLINE_DELAY,
                }}
              >
                SNS
              </motion.h1>

              {/* TEXT CONTENT - SUBHEADING */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: SUBHEADING_DURATION,
                  ease: EASE_CINEMATIC,
                  delay: SUBHEADING_DELAY,
                }}
              >
                <p className="font-medium text-black" style={{ fontSize: '22px', lineHeight: '0', marginBottom: '0px' }}>Design Thinking</p>
                <p className="font-medium text-black" style={{ fontSize: '22px', lineHeight: '1.3' }}>Consultancy</p>
              </motion.div>
            </motion.div>
          </motion.div>

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
                {/* DOT ANIMATION - NO BOUNCE */}
                <motion.div
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
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: DOT_START_DELAY,
                    duration: DOT_DURATION,
                    ease: EASE_CINEMATIC,
                  }}
                >
                  <Icon size={24} color="white" />
                </motion.div>

                {/* PILL ANIMATION - NO SLIDE FROM 50px */}
                <motion.div
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
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  // Gentle entrance: slight x shift, fade in
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    // Entrance animation
                    x: {
                      delay: PILL_START_DELAY + index * PILL_STAGGER,
                      duration: 0.8,
                      ease: EASE_CINEMATIC
                    },
                    opacity: {
                      delay: PILL_START_DELAY + index * PILL_STAGGER,
                      duration: 0.8,
                      ease: EASE_CINEMATIC
                    },
                    // Layout transition (for hover effects)
                    layout: { duration: 0.4, ease: EASE_CINEMATIC }
                  }}
                  layout // This helps animate between hover states smoothly if dimensions change
                >
                  <div style={{
                    transition: "opacity 0.3s ease",
                    opacity: isHovered ? 0.95 : 1
                  }}>
                    {p.title}
                  </div>
                  <motion.div
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginTop: isHovered ? 8 : 0
                    }}
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "1.4",
                      overflow: "hidden",
                    }}
                  >
                    {p.description}
                  </motion.div>
                </motion.div>

              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
