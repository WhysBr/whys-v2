import WhisperText from "@/components/ui/whisper-text";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    number: "01",
    title: "Brand Identity",
    category: "Branding / Visual System",
    year: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    category: "Web Design / Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "SaaS Dashboard",
    category: "UI/UX / Product Design",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Motion Campaign",
    category: "Motion / Digital Marketing",
    year: "2025",
    image: "https://images.unsplash.com/photo-1535223289429-462dc426c8c4?q=80&w=800&auto=format&fit=crop",
  },
];

export default function WorksSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-8">

        {/* WhisperText Header */}
        <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-10">
          <WhisperText
            text="all work -->"
            className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-none"
            delay={90}
            duration={0.5}
            x={-30}
            y={0}
          />
          <span className="text-white/20 font-mono text-xs uppercase tracking-widest hidden md:block">
            Selected Projects
          </span>
        </div>

        {/* Work List */}
        <div className="flex flex-col divide-y divide-white/5">
          {works.map((work) => (
            <div
              key={work.number}
              className="group flex items-center justify-between gap-8 py-8 cursor-pointer hover:bg-white/[0.02] transition-all duration-300 px-4 -mx-4"
            >
              {/* Left: Number + Info */}
              <div className="flex items-center gap-8 flex-1 min-w-0">
                <span className="text-[#965EC7]/40 font-mono text-xs tracking-widest shrink-0 group-hover:text-[#965EC7] transition-colors">
                  {work.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight truncate group-hover:text-[#965EC7] transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-white/30 font-mono text-xs uppercase tracking-widest mt-1">
                    {work.category}
                  </p>
                </div>
              </div>

              {/* Center: Hover Image */}
              <div className="hidden md:block w-32 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 shrink-0">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Right: Year + Arrow */}
              <div className="flex items-center gap-6 shrink-0">
                <span className="text-white/20 font-mono text-xs hidden md:block">{work.year}</span>
                <ArrowUpRight
                  className="size-5 text-white/20 group-hover:text-[#965EC7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex justify-center">
          <button className="border border-white/10 hover:border-[#965EC7]/50 text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest px-10 py-4 transition-all duration-300 hover:bg-[#965EC7]/5">
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
}
