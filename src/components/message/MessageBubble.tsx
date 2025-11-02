import { useContext } from "react"
import { MessageContext } from "../../context/MessageContext"

type MessageBubbleProps = {
	children: React.ReactNode
	className?: string
}

export function MessageBubble({ children, className }: MessageBubbleProps) {
	const { isMe } = useContext(MessageContext)
	return (
		<div
			className={[
				"rounded-lg px-3 py-2 text-sm shadow-sm max-w-[65vw] sm:max-w-[55vw]",
				isMe ? "bg-[#d9fdd3] rounded-tr-none" : "bg-white rounded-tl-none",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</div>
	)
}