import { MessageContextProvider } from "../../context/MessageContextProvider"

type Message = {
	id: string
	senderId: string
	name?: string
	time?: string
}

type MessageRootProps = {
	message: Message
	children: React.ReactNode
	className?: string
}

const currentUserId = "me"

export function MessageRoot({ message, children, className }: MessageRootProps) {
	const { id, senderId, name, time } = message

	const isMe = senderId === currentUserId

	return (
		<MessageContextProvider id={id} isMe={isMe} name={name} time={time} >
			<div
				className={[
					"flex gap-2",
					isMe ? "justify-end" : "justify-start",
					className,
				]
					.filter(Boolean)
					.join(" ")}
			>
				{children}
			</div>
		</MessageContextProvider>
	)
}
