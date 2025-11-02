import { MessageContext } from "./MessageContext"

type MessageRootProps = {
	id: string
	isMe: boolean
	name?: string
	time?: string
	children: React.ReactNode
	className?: string
}



export function MessageContextProvider({ id, isMe, name, time, children }: MessageRootProps) {
	return (
		<MessageContext.Provider value={{ id, isMe, name, time }}>
			{children}
		</MessageContext.Provider>
	)
}
