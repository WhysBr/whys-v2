import { ContactCard } from "@/components/ui/contact-card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
	return (
		<section id="contact" className="relative flex min-h-screen w-full items-center justify-center p-4 md:p-20 bg-[#0a0a0a] overflow-hidden">
            {/* Grain Overlay to match Portfolio */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

			<div className="mx-auto max-w-7xl w-full relative z-10">
				<ContactCard
					title="INVEST ON YOUR BRAND"
					description="For mission-critical inquiries or general outreach, transmit your message through our secure interface below. Response typical within 24 UTC."
					contactInfo={[
						{
							label: 'TRANSMISSION',
							value: 'whyscontato@gmail.com',
                            className: 'cursor-pointer hover:bg-[#965EC7]/10 transition-colors',
                            onClick: () => window.location.href = 'mailto:whyscontato@gmail.com'
						},
						{
							label: 'VOICE LINE',
							value: '+1 (555) WHYS-COM',
						},
						{
							label: 'HQ COORDINATES',
							value: 'GLOBAL OPERATIONAL NETWORK',
							className: 'col-span-1',
						}
					]}
				>
					<form action="" className="w-full space-y-6">
						<div className="space-y-2">
							<Label className="text-[#965EC7] font-mono text-xs tracking-widest uppercase">ID Name</Label>
							<Input type="text" placeholder="OPERATOR NAME" className="border-white/10 text-white" />
						</div>
						<div className="space-y-2">
							<Label className="text-[#965EC7] font-mono text-xs tracking-widest uppercase">Freq Path (Email)</Label>
							<Input type="email" placeholder="transmission@secure.net" className="border-white/10 text-white" />
						</div>
						<div className="space-y-2">
							<Label className="text-[#965EC7] font-mono text-xs tracking-widest uppercase">Message Intel</Label>
							<Textarea placeholder="DECRYPTED TRANSMISSION..." className="border-white/10 text-white min-h-[120px]" />
						</div>
						<Button className="w-full bg-[#965EC7] hover:bg-[#854fb3] text-white font-black uppercase tracking-widest py-6" type="button">
							Initiate Transmission
						</Button>
					</form>
				</ContactCard>
			</div>
		</section>
	);
}
