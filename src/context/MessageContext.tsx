import { createContext } from "react"

type MessageContextType = {
	isMe: boolean
	name?: string
	time?: string
	id: string
}


export const MessageContext = createContext<MessageContextType>({ id: '', isMe: false, name: '', time: '' })