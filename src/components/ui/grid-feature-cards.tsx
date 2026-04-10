import { cn } from '@/lib/utils';
import React, { useId } from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern();

	return (
		<div className={cn('relative overflow-hidden p-6 hover:bg-white/[0.02] transition-colors', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-[#965EC7]/5 to-[#965EC7]/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-[#965EC7]/5 stroke-[#965EC7]/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			
			<div className="mb-8 p-3 rounded-none bg-white/5 w-fit border border-white/5 ring-1 ring-white/10 shadow-[0_0_15px_rgba(150,94,199,0.1)]">
				<feature.icon className="text-[#965EC7] size-6" strokeWidth={1.5} aria-hidden />
			</div>
			
			<h3 className="mt-4 text-lg md:text-xl font-bold uppercase tracking-tight text-white">{feature.title}</h3>
			<p className="text-white/50 relative z-20 mt-3 text-sm font-light leading-relaxed">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([sqX, sqY], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sqX * width} y={sqY * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
