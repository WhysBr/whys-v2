import WhisperText from "@/components/ui/whisper-text";
import { ArrowUpRight } from "lucide-react";

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
        <a
          href="/works"
          className="group flex items-end justify-between border-b border-white/10 pb-10 hover:border-[#965EC7]/30 transition-colors duration-500"
        >
          <WhisperText
            text="all work -->"
            className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter text-white group-hover:text-[#965EC7] transition-colors duration-500 leading-none"
            delay={90}
            duration={0.5}
            x={-30}
            y={0}
          />
          <ArrowUpRight
            className="size-12 text-white/20 group-hover:text-[#965EC7] group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 mb-2 shrink-0"
          />
        </a>
      </div>
    </section>
  );
}
