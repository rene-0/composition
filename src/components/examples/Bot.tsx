import { Message } from "../message/Message"

export function BotExample() {
	const bot = {
		id: "b1",
		senderId: "bot",
		name: "Assistente",
		text: "Posso te ajudar com o pedido #123?",
		time: "09:00",
	}
	const humano = {
		id: "b2",
		senderId: "me",
		name: "Renê",
		text: "Sim, quero trocar o endereço.",
		time: "09:01",
	}

	return (
		<>
			{/* Bot: sem Avatar/Actions, Meta opcional */}
			<Message.Root message={bot}>
				<div className="flex flex-col gap-1">
					{/* <Message.Meta />  // se quiser mostrar */}
					<Message.Bubble className="bg-sky-50 ring-1 ring-sky-100">{bot.text}</Message.Bubble>
				</div>
			</Message.Root>

			{/* Humano (me): Actions */}
			<Message.Root message={humano}>
				<div className="flex items-start gap-1">
					<Message.Bubble>{humano.text}</Message.Bubble>
					<Message.Actions />
				</div>
			</Message.Root>
		</>
	)
}
