import React, { useEffect, useRef } from 'react';

interface BentoItemProps {
    className?: string;
    children: React.ReactNode;
}

const BentoItem: React.FC<BentoItemProps> = ({ className, children }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={itemRef} className={`bento-item ${className || ''}`}>
            {children}
        </div>
    );
};

export const CyberneticBentoGrid = () => {
    return (
        <div className="w-full py-20 relative z-10 flex flex-col items-center">
            <style>{`
                .bento-grid-container {
                    display: grid;
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                    gap: 1.5rem;
                    width: 100%;
                    max-w: 72rem;
                }
                
                @media (min-width: 768px) {
                    .bento-grid-container {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                }

                .bento-item {
                    background-color: rgba(10, 10, 10, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                    overflow: hidden;
                    border-radius: 0; /* Sharp borders as requested */
                    padding: 2.5rem;
                    transition: border-color 0.3s ease;
                }

                .bento-item:hover {
                    border-color: rgba(150, 94, 199, 0.3); /* WHYS Purple outline */
                }

                .bento-item::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        600px circle at var(--mouse-x, 0) var(--mouse-y, 0),
                        rgba(150, 94, 199, 0.15),
                        transparent 40%
                    );
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                    z-index: 0;
                }

                .bento-item:hover::before {
                    opacity: 1;
                }

                .bento-content {
                    position: relative;
                    z-index: 10;
                }
            `}</style>

            <div className="w-full max-w-6xl z-10 px-8">
                <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tighter text-left mb-12">
                    WHAT WE OFFER
                </h1>
                
                <div className="bento-grid-container">
                    <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between group">
                        <div className="bento-content">
                            <span className="text-[#965EC7] text-[10px] font-black tracking-[0.2em] uppercase mb-4 block">01 // Protocol</span>
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">CHARTS</h2>
                            <p className="mt-4 text-white/50 font-mono text-sm leading-relaxed max-w-md">
                                Real-time tactical metrics. Monitor your ecosystem's performance with up-to-the-second data streams, geospatial visualizations, and advanced analytics matrices tailored for scale.
                            </p>
                        </div>
                        <div className="mt-8 h-64 bg-white/5 border border-white/5 relative overflow-hidden flex items-center justify-center">
                            {/* Abstract Chart Representation */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            <svg className="w-full h-full p-4 group-hover:stroke-[#965EC7] stroke-white/20 transition-all duration-500" viewBox="0 0 100 50" preserveAspectRatio="none" fill="none" strokeWidth="1">
                                <path d="M 0 50 Q 10 40 20 45 T 40 30 T 60 35 T 80 15 T 100 5" vectorEffect="non-scaling-stroke" />
                                <rect x="20" y="20" width="8" height="30" className="fill-white/10" stroke="none" />
                                <rect x="40" y="10" width="8" height="40" className="fill-white/10" stroke="none" />
                                <rect x="60" y="25" width="8" height="25" className="fill-white/10" stroke="none" />
                                <rect x="80" y="5" width="8" height="45" className="fill-[#965EC7]/40" stroke="none" />
                            </svg>
                        </div>
                    </BentoItem>
                    
                    <BentoItem className="group">
                        <div className="bento-content">
                            <span className="text-[#965EC7] text-[10px] font-black tracking-[0.2em] uppercase mb-4 block">02 // Network</span>
                            <h2 className="text-xl font-black text-white uppercase tracking-tighter">DEPLOY</h2>
                            <p className="mt-3 text-white/50 text-xs font-mono leading-relaxed">
                                Global deployment mechanisms. Deliver infrastructure at lightning speed via highly redundant nodes and edge operations.
                            </p>
                            <div className="mt-6 w-full h-1 bg-white/10 overflow-hidden">
                                <div className="h-full bg-[#965EC7] w-1/3 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                            </div>
                        </div>
                    </BentoItem>
                    
                    <BentoItem className="group">
                        <div className="bento-content">
                            <span className="text-[#965EC7] text-[10px] font-black tracking-[0.2em] uppercase mb-4 block">03 // Shield</span>
                            <h2 className="text-xl font-black text-white uppercase tracking-tighter">Security</h2>
                            <p className="mt-3 text-white/50 text-xs font-mono leading-relaxed">
                                Enterprise-grade authentication. Bulletproof data encryption and rigid user management built into the core framework.
                            </p>
                        </div>
                    </BentoItem>
                    
                    <BentoItem className="md:row-span-2 group flex flex-col justify-between">
                        <div className="bento-content">
                            <span className="text-[#965EC7] text-[10px] font-black tracking-[0.2em] uppercase mb-4 block">04 // Core</span>
                            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">AUTOMATION</h2>
                            <p className="mt-4 text-white/50 text-sm font-mono leading-relaxed">
                                Intelligent operational workflows. Eradicate manual redundancy with infinite scaling serverless capabilities. 
                            </p>
                        </div>
                        <div className="mt-8 flex gap-2 flex-wrap">
                            {['CI/CD', 'CRON', 'WEBHOOKS', 'EDGE'].map((tag) => (
                                <span key={tag} className="text-[9px] font-mono tracking-widest px-2 py-1 border border-white/10 text-white/40 group-hover:border-[#965EC7]/50 group-hover:text-white transition-colors duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </BentoItem>
                    
                    <BentoItem className="md:col-span-2 group">
                        <div className="bento-content flex flex-col md:flex-row gap-8 items-center justify-between">
                            <div className="w-full md:w-1/2">
                                <span className="text-[#965EC7] text-[10px] font-black tracking-[0.2em] uppercase mb-4 block">05 // Vanguard</span>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">FULL SUPPORT</h2>
                                <p className="mt-3 text-white/50 text-sm font-mono leading-relaxed">
                                    Immediate tactical assistance. Direct comms with our engineering operators to resolve critical ecosystem anomalies in real-time. Maintenance, monitoring, and structural upgrades mapped on your command.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 h-32 bg-white/5 border border-white/5 flex flex-col items-start justify-center p-6 font-mono text-[10px] text-white/30 tracking-widest relative overflow-hidden group-hover:border-[#965EC7]/20 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-2 text-[#965EC7] font-black animate-pulse">REC</div>
                                <span>&gt; SYSTEM OPERATIONAL</span>
                                <span>&gt; AGENT ONLINE</span>
                                <span>&gt; INITIATING HANDSHAKE...</span>
                                <span className="group-hover:text-white transition-colors duration-300">&gt; ESTABLISHED.</span>
                            </div>
                        </div>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};
