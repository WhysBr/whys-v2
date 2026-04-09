import React from 'react';
import { cn } from '@/lib/utils';
import {
	PlusIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Establish Comms',
	description = 'Our operators are standing by. For mission-critical inquiries or general outreach, transmit your message through the interface below.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-[#0a0a0a] border border-white/10 relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-[#965EC7]" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-[#965EC7]" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-[#965EC7]" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-[#965EC7]" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-4 py-8 md:p-8">
					<h1 className="text-3xl font-black md:text-4xl lg:text-7xl uppercase tracking-tighter leading-none text-white">
						{title}
					</h1>
					<p className="text-white/60 max-w-xl text-sm md:text-base lg:text-lg font-mono">
						{description}
					</p>
					<div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 mt-12">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-white/5 flex h-full w-full items-center border-t border-white/10 p-5 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-3 py-3', className)} {...props}>
			<div className="bg-[#965EC7]/20 border border-[#965EC7]/30 rounded-lg p-3">
				<Icon className="h-5 w-5 text-[#965EC7]" />
			</div>
			<div>
				<p className="font-bold text-xs uppercase tracking-widest text-[#965EC7]">{label}</p>
				<p className="text-white/80 text-sm font-mono">{value}</p>
			</div>
		</div>
	);
}
