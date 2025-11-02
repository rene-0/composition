import { useContext } from "react"
import { MessageContext } from "../../context/MessageContext"

type MessageAvatarProps = {
	className?: string
}

export function MessageAvatar({ className }: MessageAvatarProps) {
	const { isMe, name } = useContext(MessageContext)
	if (isMe) return null

	const initial = name ? name.charAt(0).toUpperCase() : "C"

	return (
		<div
			className={[
				"w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			{initial}
		</div>
	)
}
