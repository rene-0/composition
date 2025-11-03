import { Message } from "../message/Message"

export function SystemExample() {
	const sys1 = {
		id: "sys1",
		senderId: "system",
		text: "João entrou no chat",
		time: "—",
	}
	const sys2 = {
		id: "sys2",
		senderId: "system",
		text: "Pedido #123 enviado",
		time: "—",
	}

	return (
		<>
			<Message.Root message={sys1}>
				{/* sem Avatar, sem Actions, Meta opcional */}
				<Message.Bubble className="mx-auto text-xs bg-transparent text-slate-500">{sys1.text}</Message.Bubble>
			</Message.Root>

			<Message.Root message={sys2}>
				<Message.Bubble className="mx-auto text-xs bg-transparent text-slate-500">{sys2.text}</Message.Bubble>
			</Message.Root>
		</>
	)
}
