import { Message } from "../message/Message"

export function SupportExample() {
	const customerMessage = {
		id: "s1",
		senderId: "joao",
		name: "João",
		text: "Meu pedido atrasou.",
		time: "09:11",
	}
	const customerSupportMessage = {
		id: "s2",
		senderId: "me",
		name: "Você",
		text: "Já verifiquei com a logística, chega em 15 min.",
		time: "09:12",
	}

	return (
		<>
			{/* Cliente: Avatar + Meta + Bubble; sem Actions */}
			<Message.Root message={customerMessage}>
				<Message.Avatar />
				<div className="flex flex-col gap-1">
					<Message.Meta />
					<Message.Bubble>{customerMessage.text}</Message.Bubble>
				</div>
			</Message.Root>

			{/* Atendente (me): Meta + Bubble + Actions */}
			<Message.Root message={customerSupportMessage}>
				<div className="flex flex-col gap-1">
					<Message.Meta />
					<div className="flex items-start gap-1">
						<Message.Bubble className="ring-1 ring-emerald-200" >{customerSupportMessage.text}</Message.Bubble>
						<Message.Actions />
					</div>
				</div>
			</Message.Root>
		</>
	)
}