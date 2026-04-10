import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What kind of projects does WHYS take on?",
    a: "We work with startups, scale-ups, and established brands across digital product design, brand identity, web development, and motion. If you have a mission-critical digital initiative — we're built for it.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A brand identity sprint takes 2–3 weeks. A full product ecosystem — from briefing to deployment — ranges from 6 to 12 weeks. We define clear milestones at the start of every engagement.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. WHYS operates on a fully remote, globally distributed model. We've worked with clients across Latin America, North America, and Europe. Time zones are not a barrier — alignment protocols are.",
  },
  {
    q: "What does your process look like?",
    a: "We run a structured 5-phase protocol: Pre-Briefing → Reunion → Wireframes → Alignment Iterations → Deployment + Post-Support. Every project has checkpoints, deliverables, and a defined communication cadence.",
  },
  {
    q: "How is pricing structured?",
    a: "We work on project-based fixed fees or retained monthly engagements. Pricing depends on scope, complexity, and timeline. All projects begin with a discovery call and a formal proposal.",
  },
  {
    q: "Can we retain WHYS after the project ships?",
    a: "Absolutely. Our Post-Support packages cover ongoing maintenance, performance monitoring, content updates, and iterative feature releases. We prefer long-term operational partnerships over one-off deliveries.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Purple ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#965EC7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto px-8">

        {/* Header */}
        <div className="mb-20">
          <p className="text-[#965EC7] font-mono text-xs tracking-[0.4em] uppercase mb-4">
            Classified Intel
          </p>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Frequently<br />
            Asked.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-8 py-8 text-left group"
                >
                  <span
                    className={`text-base md:text-lg font-bold uppercase tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-[#965EC7]" : "text-white group-hover:text-[#965EC7]"
                    }`}
                  >
                    <span className="text-[#965EC7]/40 font-mono text-xs mr-4 group-hover:text-[#965EC7] transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 p-1 border transition-all duration-300 ${
                      isOpen
                        ? "border-[#965EC7] text-[#965EC7]"
                        : "border-white/10 text-white/30 group-hover:border-[#965EC7]/50 group-hover:text-[#965EC7]"
                    }`}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/50 font-mono text-sm leading-relaxed pb-8 pl-10 pr-4 border-l-2 border-[#965EC7]/30 ml-0">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="text-white/30 font-mono text-xs uppercase tracking-widest">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="text-[#965EC7] font-mono text-xs uppercase tracking-widest hover:underline underline-offset-4 transition-all"
          >
            Initiate Transmission →
          </a>
        </div>
      </div>
    </section>
  );
}
