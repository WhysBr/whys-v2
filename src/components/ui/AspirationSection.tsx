import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import type { Frame } from "@/components/ui/dynamic-frame-layout";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const demoFrames: Frame[] = [
  {
    id: 1,
    video: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    video: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export default function AspirationSection() {
  const WHYS_WORDS = [
    "BRAND",
    "VISION",
    "INTERFACE",
    "EXPERIENCE",
    "LEGACY",
    "STORY"
  ];

  const processSteps = [
    {
      title: "Briefing",
      desc: "Intelligent data harvesting via brand profiling."
    },
    {
      title: "Reunion",
      desc: "Mission alignment and strategic objective lock."
    },
    {
      title: "Wireframe",
      desc: "Tactical blueprinting of the digital ecosystem."
    },
    {
      title: "Alignment",
      desc: "Continuous refinement cycles for absolute precision."
    },
    {
      title: "Deployment",
      desc: "Operational launch and sustained tactical support."
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Grain Overlay to match the rest of the site */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-white/40 font-mono text-sm tracking-[0.5em] uppercase mb-12 animate-pulse">
          Digital Evolution Index
        </h2>
        
        <h1 className="text-white text-center text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] selection:bg-[#965EC7]">
          YOUR <br />
          <AnimatedTextCycle 
            words={WHYS_WORDS}
            interval={3000}
            className="text-[#965EC7] italic underline decoration-white/10 underline-offset-[1.5rem]"
          /> <br />
          BUILT TO SCALE
        </h1>

        <div className="w-full h-[600px] mt-24 mb-12 p-4 md:p-0">
          <DynamicFrameLayout 
            frames={demoFrames} 
            className="w-full h-full" 
            hoverSize={6}
            gapSize={8}
          />
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="w-1 h-24 bg-gradient-to-b from-[#965EC7] to-transparent opacity-50" />
          <p className="text-white/60 text-center font-mono text-xs uppercase tracking-widest max-w-sm leading-relaxed mb-12">
            Transitioning from static identity to fluid ecosystem. <br />
            Next Phase: Operational Comms.
          </p>
        </div>

        {/* Process Section - Put on top of "WHAT WE OFFER" */}
        <div className="w-full mt-24 mb-32 flex flex-col items-center px-4 md:px-8">
          <PointerHighlight containerClassName="mb-16">
            <h2 className="text-5xl md:text-[5.5rem] font-black uppercase text-white tracking-tighter px-6 py-2 leading-none text-center">
              Our Process
            </h2>
          </PointerHighlight>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-[1400px]">
             {processSteps.map((step, idx) => (
                <GlowCard 
                  key={idx} 
                  glowColor="purple" 
                  customSize={true} 
                  className="min-h-[300px] flex flex-col justify-start w-full border border-white/5"
                >
                  <span className="text-[#965EC7] font-mono text-sm font-black tracking-[0.2em] uppercase mb-auto opacity-80">
                    Stp.0{idx + 1}
                  </span>
                  
                  <div className="flex flex-col gap-2 mt-auto">
                    <h3 className="text-white text-2xl font-black uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs font-mono leading-relaxed pr-4">
                      {step.desc}
                    </p>
                  </div>
                </GlowCard>
             ))}
          </div>
        </div>

        <CyberneticBentoGrid />
      </div>
    </section>
  );
}
