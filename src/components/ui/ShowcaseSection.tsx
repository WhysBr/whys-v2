import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BoxCarousel, {
  type BoxCarouselRef,
  type CarouselItem,
} from "@/components/ui/box-carousel";

const carouselItems: CarouselItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop",
    alt: "Abstract digital design",
  },
  {
    id: "2",
    type: "image",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    alt: "Colorful abstract art",
  },
  {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    alt: "Retro tech aesthetic",
  },
  {
    id: "4",
    type: "image",
    src: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=800&auto=format&fit=crop",
    alt: "Dark UI interface",
  },
  {
    id: "5",
    type: "image",
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    alt: "Brand identity design",
  },
  {
    id: "6",
    type: "image",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    alt: "Developer workspace",
  },
  {
    id: "7",
    type: "image",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    alt: "Creative workspace",
  },
];

export default function ShowcaseSection() {
  const carouselRef = useRef<BoxCarouselRef>(null);
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDimensions = () => {
    if (currentWidth < 768) return { width: 260, height: 180 };
    if (currentWidth < 1024) return { width: 380, height: 260 };
    return { width: 480, height: 320 };
  };

  const { width, height } = getDimensions();

  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 overflow-hidden">
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Purple glow behind cube */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#965EC7]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-24">
          <div>
            <p className="text-[#965EC7] font-mono text-xs tracking-[0.4em] uppercase mb-4">
              Visual Portfolio
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Work in<br />Motion.
            </h2>
          </div>
          <p className="text-white/20 font-mono text-xs uppercase tracking-widest hidden md:block">
            Drag to rotate
          </p>
        </div>

        {/* Carousel + Controls */}
        <div className="flex flex-col items-center gap-16">
          {/* 3D Cube Carousel */}
          <div className="flex items-center justify-center">
            {currentWidth > 0 && (
              <BoxCarousel
                ref={carouselRef}
                items={carouselItems}
                width={width}
                height={height}
                direction="right"
                enableDrag
                autoPlay
                autoPlayInterval={4000}
                perspective={1200}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                transition={{ duration: 1.2, ease: [0.953, 0.001, 0.019, 0.995] } as unknown as any}
              />
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => carouselRef.current?.prev()}
              className="group flex items-center gap-2 border border-white/10 hover:border-[#965EC7]/50 text-white/30 hover:text-[#965EC7] px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#965EC7]/5"
            >
              <ChevronLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
              Prev
            </button>

            <div className="w-px h-6 bg-white/10" />

            <button
              onClick={() => carouselRef.current?.next()}
              className="group flex items-center gap-2 border border-white/10 hover:border-[#965EC7]/50 text-white/30 hover:text-[#965EC7] px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#965EC7]/5"
            >
              Next
              <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
