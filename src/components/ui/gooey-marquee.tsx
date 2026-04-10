"use client"

import React from 'react'

interface GooeyMarqueeProps {
  text: string
  className?: string
  speed?: number
}

export function GooeyMarquee({ text, className = "", speed = 16 }: GooeyMarqueeProps) {
  return (
    <div className={`relative w-full h-32 text-7xl md:text-8xl flex items-center justify-center overflow-hidden font-black uppercase tracking-tighter ${className}`}>
      {/* Blur layer with gooey effect */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor: "#0a0a0a", // Match background
          backgroundImage: `
            linear-gradient(to right, #965EC7, 1rem, transparent 50%),
            linear-gradient(to left, #965EC7, 1rem, transparent 50%)
          `,
          filter: "contrast(15)",
        }}
      >
        <p
          className="absolute min-w-[200%] whitespace-nowrap animate-marquee text-[#965EC7]"
          style={{
            filter: "blur(0.07em)",
            animation: `marquee ${speed}s infinite linear`,
          }}
        >
          {text} {text} {text} {text}
        </p>
      </div>

      {/* Clear text layer on top */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none mix-blend-difference opacity-50">
        <p
          className="absolute min-w-[200%] whitespace-nowrap animate-marquee text-white"
          style={{
            animation: `marquee ${speed}s infinite linear`,
          }}
        >
          {text} {text} {text} {text}
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee ${speed}s infinite linear;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
