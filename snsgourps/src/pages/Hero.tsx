// ... imports
import React, { useEffect, useState } from "react";
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
  const [scale, setScale] = useState(1);
  const [pillWidth, setPillWidth] = useState("400px");

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Update scale and layout state
      if (width < 1024) {
        setScale(0.65);
        setPillWidth("300px");
      } else if (width < 1280) {
        setScale(0.75);
        setPillWidth("320px");
      } else if (width < 1550) {
        setScale(0.9);
        setPillWidth("360px");
      } else if (width >= 2000) {
        setScale(1.3); // 4K Scaling
        setPillWidth("450px");
      } else {
        setScale(1);
        setPillWidth("400px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pills = [
    {
      title: "SNS Venture Capital & Investment",
      description: "Funding high-potential startups for ownership stakes.",
      color: "#E63A2E",
      mid: 349, // Adjusted for visual alignment (math center is 344)
      icon: Building2,
      link: "#", // Placeholder as no URL provided
    },
    {
      title: "SNS Square Technologies",
      description: "Driving digital transformation with cutting-edge IT and software solutions.",
      color: "#8BCF00",
      mid: (291 + 323) / 2,
      icon: Laptop,
      link: "https://www.snssquare.com/",
    },
    {
      title: "SNS Innovation Hub",
      description: "Empowering digital transformations with IT and software solutions.",
      color: "#E5008D",
      mid: 270,
      icon: Brain,
      link: "https://snsihub.ai/",
    },
    {
      title: "SNS Institutions",
      description: "Fostering holistic growth through high-quality education.",
      color: "#FF6A00",
      mid: (217 + 249) / 2,
      icon: School,
      link: "https://main.snsgroups.com/",
    },
    {
      title: "SNS SPINE",
      description: "Enabling mental and physical well-being through sports, gaming, entertainment and clubs.",
      color: "#00C4F4",
      mid: 191, // Adjusted for visual alignment (math center is 196)
      icon: HeartPulse,
      link: "https://snsspine.in/",
    },
  ];

  // CINEMATIC EASING
  const EASE_CINEMATIC: any = [0.22, 1, 0.36, 1];
  const EASE_ARC = "easeInOut";

  // Animation constants
  const BACKGROUND_DURATION = 0.8;

  // Circle visual reveals
  // Centers starts first
  const CENTER_CIRCLE_DELAY = 0;

  // Arc starts 200ms later and takes longer
  const ARC_DURATION = 1.8;
  const ARC_DELAY = 0.2;

  // Text Animations (Inside Circle)
  const HEADLINE_DELAY = 0.4;
  const HEADLINE_DURATION = 0.9;

  // Subheading starts 200ms after headline begins
  const SUBHEADING_DELAY = HEADLINE_DELAY + 0.2;
  const SUBHEADING_DURATION = 0.8;

  // Right Side Elements
  // Start after the main circle/arc system is established
  const DOT_START_DELAY = 1.4;
  const DOT_DURATION = 0.8;

  // Pills follow dots
  const PILL_START_DELAY = DOT_START_DELAY + 0.3;
  const PILL_STAGGER = 0.12; // Micro stagger

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
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
      <div
        style={{
          // We apply translation BEFORE scaling to maintain consistent visual centering relative to the content size
          // -200px shifts the visual center (which is roughly between circle and pills) to the screen center
          transform: `translateX(-200px) scale(${scale})`,
          transformOrigin: 'center center',
          transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          width: SIZE,
          height: SIZE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
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
                  duration: ARC_DURATION,
                  ease: EASE_ARC,
                  delay: ARC_DELAY,
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
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              transformOrigin: "50% 0%",
            }}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: CENTER_CIRCLE_DELAY,
            }}
          >
            <motion.div
              className="rounded-full bg-[#FFCC00] flex flex-col items-center justify-center text-center"
              style={{ width: 300, height: 300, transformOrigin: "50% 0%" }}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: CENTER_CIRCLE_DELAY + 0.15,
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
            const dotSize = 40;
            const isHovered = hoveredPill === index;

            const dotPos = polarToCartesian(
              CENTER,
              CENTER,
              RADIUS, // Align exactly with Arc radius
              mirrored
            );

            const dotLeft = dotPos.x - dotSize / 2 + 20; // Reduced global offset to bring closer to center
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
                  onClick={() => p.link && window.open(p.link, "_blank")}
                  style={{
                    left: dotLeft + dotSize + 12, // Reduced gap between dot and pill
                    top: isHovered ? dotPos.y - 38 : dotPos.y - 22,
                    backgroundColor: p.color,
                    color: "white",
                    padding: isHovered ? "16px 24px" : "10px 24px", // Sleeker sizing
                    borderRadius: "28px", // Fixed radius to avoid morph jank
                    fontWeight: 700,
                    whiteSpace: isHovered ? "normal" : "nowrap",
                    boxShadow: isHovered ? "0 15px 30px rgba(0,0,0,0.2)" : "0 6px 14px rgba(0,0,0,0.08)",
                    width: pillWidth,
                    textAlign: "center",
                    cursor: "pointer",
                    overflow: "hidden",
                    zIndex: 20,
                  }}
                  // Gentle entrance: slight x shift, fade in
                  initial={{ x: 20, opacity: 0, scale: 1 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: isHovered ? 1.03 : 1, // Energy added on hover
                  }}
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
                    // Hover interactions - Instant & Smooth
                    scale: { duration: 0.25, ease: "easeOut" },
                    backgroundColor: { duration: 0.25, ease: "easeOut" },
                    padding: { duration: 0.25, ease: "easeOut" },
                    boxShadow: { duration: 0.25, ease: "easeOut" },
                    layout: { duration: 0.25, ease: "easeOut" }
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
    </section >
  );
};

export default Hero;
