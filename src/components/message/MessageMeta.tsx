import { useContext } from "react"
import { MessageContext } from "../../context/MessageContext"

type MessageMetaProps = {
	className?: string
}

export function MessageMeta({ className }: MessageMetaProps) {
	const { isMe, name, time } = useContext(MessageContext)

	return (
		<div
			className={[
				"flex items-center gap-2 text-[10px] text-slate-400",
				isMe ? "justify-end" : "justify-start",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<span className="text-slate-500">{name}</span>
			<span>{time}</span>
		</div>
	)
}
