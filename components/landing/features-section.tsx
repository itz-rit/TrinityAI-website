"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "AI Automation",
    description: "Automate repetitive workflows, reduce manual effort and improve operational efficiency with intelligent AI-powered processes.",
    visual: "deploy",
    tone: "from-white to-[#edf6ff]",
  },
  {
    number: "02",
    title: "AI Voice Agents",
    description: "Intelligent voice systems for customer enquiries, support, follow-ups and business communication.",
    visual: "ai",
    tone: "from-[#fafdff] to-[#e8f3ff]",
  },
  {
    number: "03",
    title: "AI Chatbots",
    description: "Smart conversational assistants designed to engage customers, answer questions and support businesses across digital channels.",
    visual: "collab",
    tone: "from-white to-[#f0f7ff]",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Digital marketing strategies and campaigns designed to improve online visibility, reach the right audience and create meaningful business growth opportunities.",
    visual: "security",
    tone: "from-[#f8fcff] to-[#e3f1ff]",
  },
  {
    number: "05",
    title: "Website Development",
    description: "Professional, modern websites that establish a strong online presence and communicate your business clearly.",
    visual: "deploy",
    tone: "from-white to-[#eaf5ff]",
  },
  {
    number: "06",
    title: "Web & Mobile Applications",
    description: "Scalable digital applications designed to solve specific business requirements and deliver better user experiences.",
    visual: "ai",
    tone: "from-[#fbfdff] to-[#e6f2ff]",
  },
  {
    number: "07",
    title: "CRM Solutions",
    description: "Organize customer information, manage follow-ups and build stronger customer relationships with customized CRM solutions.",
    visual: "collab",
    tone: "from-white to-[#eef7ff]",
  },
  {
    number: "08",
    title: "ERP & Business Software",
    description: "Business management systems designed around your organization's processes, operations and specific requirements.",
    visual: "security",
    tone: "from-[#f9fcff] to-[#e4f1ff]",
  },
  {
    number: "09",
    title: "Custom Software",
    description: "Purpose-built software applications that solve unique business challenges and support long-term scalability.",
    visual: "deploy",
    tone: "from-white to-[#eaf4ff]",
  },
];

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      
      {/* Container */}
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      
      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central node */}
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Orbiting nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            {/* Connection line */}
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
            
            {/* Outer node */}
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
      
      {/* Pulse rings */}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* User A */}
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* User B */}
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* Connection */}
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      
      {/* Data packet */}
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
      
      {/* Sync indicator */}
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Shield */}
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Inner shield */}
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Lock icon */}
      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Keyhole */}
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />
      
      {/* Scan lines */}
      <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({ feature, index, cardRef }: { feature: typeof features[0]; index: number; cardRef: (element: HTMLDivElement | null) => void }) {
  return (
    <div
      ref={cardRef}
      className="group absolute inset-0"
      style={{ zIndex: index + 1 }}
    >
      <div className={`relative min-h-[25rem] overflow-hidden rounded-2xl border border-[#c9dff4] bg-gradient-to-br ${feature.tone} p-7 text-[#0b1b31] shadow-[0_18px_48px_rgba(33,92,145,0.12)] transition-transform duration-500 group-hover:-translate-y-1 sm:p-10 lg:min-h-[30rem] lg:p-14`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(65,157,255,0.12),transparent_34%)]" />
        <div className="relative flex h-full min-h-[21rem] flex-col justify-between gap-12 lg:min-h-[25rem] lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-sm tracking-[0.2em] text-[#1976d2]">{feature.number}</span>
            <h3 className="mt-8 max-w-3xl text-4xl font-display uppercase leading-[0.95] tracking-tight text-[#0b1b31] transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-7xl">
              {feature.title}
            </h3>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#39536d] sm:text-lg">
              {feature.description}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#1976d2]">
              Explore <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="hidden h-36 w-44 shrink-0 text-[#1976d2]/75 sm:block lg:h-48 lg:w-56">
            <AnimatedVisual type={feature.visual} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!scene || cards.length !== features.length) return;

    const context = gsap.context(() => {
      gsap.set(cards, { yPercent: 110, scale: 0.96 });
      gsap.set(cards[0], { yPercent: 0, scale: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index > 0) {
          timeline.to(card, {
            yPercent: 0,
            scale: 1,
            duration: 1,
            ease: "none",
          });
        }
      });
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#fbfdff] py-24 text-[#0b1b31] lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#567089] mb-6">
            <span className="w-8 h-px bg-[#9db9d2]" />
            03 — Our Services
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            BUILD SMART.
            <br />
            <span className="text-[#7890a8]">GROW BETTER.</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-[#49647e] lg:text-xl">
            <p>Technology should solve business problems, not create more of them.</p>
            <p>TrinityAI combines AI, automation, software and digital marketing to create practical technology solutions designed around real business requirements.</p>
          </div>
        </div>

        {/* Pinned service card scene */}
        <div
          ref={sceneRef}
          className="relative mt-16 lg:mt-24"
          style={{ height: `calc(30rem + ${(features.length - 1) * 45}vh)` }}
        >
          <div className="sticky top-20 h-[30rem] sm:h-[34rem] lg:h-[min(72vh,46rem)]">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.number}
                feature={feature}
                index={index}
                cardRef={(element) => {
                  if (element) cardRefs.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        <p className="mt-24 max-w-4xl border-t border-[#c9dff4] pt-8 text-xl leading-relaxed text-[#49647e] lg:mt-36 lg:text-3xl">
          We don&apos;t just build technology. We understand the business behind it — then create the right digital solution to move it forward.
        </p>
      </div>
    </section>
  );
}
