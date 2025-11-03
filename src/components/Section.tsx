type SectionProps = {
	title: string
	children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
	return (
		<div className="space-y-3">
			<h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
				{title}
			</h2>
			<div className="space-y-2">{children}</div>
		</div>
	)
}