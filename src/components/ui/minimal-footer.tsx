import {
	GitFork,
	Globe,
	Link,
	X,
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'Aspiration Hub',
			href: '#',
		},
		{
			title: 'Portfolio Index',
			href: '#',
		},
		{
			title: 'Brand Assets',
			href: '#',
		},
		{
			title: 'Privacy Protocol',
			href: '#',
		},
	];

	const resources = [
		{
			title: 'Case Studies',
			href: '#',
		},
		{
			title: 'Technical Intel',
			href: '#',
		},
		{
			title: 'Support Freq',
			href: '#',
		},
		{
			title: 'Security',
			href: '#',
		},
	];

	const socialLinks = [
		{
			icon: <GitFork className="size-4" />,
			link: 'https://github.com/WhysBr',
		},
		{
			icon: <Globe className="size-4" />,
			link: '#',
		},
		{
			icon: <Link className="size-4" />,
			link: '#',
		},
		{
			icon: <X className="size-4" />,
			link: '#',
		},
	];

	return (
		<footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-20">
            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

			<div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(255,255,255,0.05),transparent)] mx-auto max-w-7xl px-8 relative z-10 border-x border-white/5">
				<div className="grid grid-cols-6 gap-12 pb-20">
					<div className="col-span-6 flex flex-col gap-8 md:col-span-4">
						<a href="#" className="w-max transition-opacity hover:opacity-100 opacity-60">
							<img src="/whys-symbol.png" alt="WHYS Logo" className="size-10 grayscale invert" />
						</a>
						<p className="text-white/40 max-w-sm font-mono text-xs uppercase tracking-widest leading-relaxed">
							Architecting tactical digital infrastructure and premium brand ecosystems. Built for scale, designed for impact.
						</p>
						<div className="flex gap-4">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="hover:bg-[#965EC7]/20 hover:text-[#965EC7] hover:border-[#965EC7]/50 rounded-md border border-white/10 p-2.5 transition-all text-white/60"
									target="_blank"
									href={item.link}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-[#965EC7] mb-6 block text-[10px] font-black uppercase tracking-[0.2em]">
							Intelligence
						</span>
						<div className="flex flex-col gap-3">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max text-xs font-mono uppercase tracking-widest text-white/40 duration-200 hover:text-white hover:underline underline-offset-4`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-[#965EC7] mb-6 block text-[10px] font-black uppercase tracking-[0.2em]">Studio</span>
						<div className="flex flex-col gap-3">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max text-xs font-mono uppercase tracking-widest text-white/40 duration-200 hover:text-white hover:underline underline-offset-4`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				
				<div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-light">
						© {year} WHYS WEBDESIGN. <br className="md:hidden" /> ALL RIGHTS RESERVED.
					</p>
                    <div className="flex gap-8 items-center opacity-20 hover:opacity-50 transition-opacity">
                         <div className="size-1.5 rounded-full bg-[#965EC7] animate-pulse" />
                         <span className="text-[10px] font-mono tracking-widest text-white">SYSTEM STATUS: OPTIMAL</span>
                    </div>
				</div>
			</div>
		</footer>
	);
}
