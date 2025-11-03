import { Message } from "../message/Message"

export function SquadExample() {
	const pinned = {
		id: "p1",
		senderId: "lead",
		name: "Tech Lead",
		text: "Deploy hoje às 18h.",
		time: "14:00",
	}
	const reply = {
		id: "p2",
		senderId: "me",
		name: "Você",
		text: "Beleza 👍",
		time: "14:01",
	}

	return (
		<>
			{/* Pinned (sem Avatar para dar destaque ao bloco) */}
			<Message.Root message={pinned}>
				<div className="flex flex-col gap-1">
					<Message.Meta />
					<Message.Bubble className="bg-amber-50 ring-1 ring-amber-200">{pinned.text}</Message.Bubble>
				</div>
			</Message.Root>

			{/* Resposta curta (só Bubble) */}
			<Message.Root message={reply}>
				<Message.Bubble>{reply.text}</Message.Bubble>
			</Message.Root>
		</>
	)
}