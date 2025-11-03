import { Message } from "../message/Message"

export function GroupExample() {
	const joao1 = {
		id: "g1",
		senderId: "joao",
		name: "João",
		text: "Bom dia!",
		time: "10:00",
	}
	const joao2 = {
		id: "g2",
		senderId: "joao",
		name: "João",
		text: "Alguém viu o PR #254?",
		time: "10:01",
	}
	const maria = {
		id: "g3",
		senderId: "maria",
		name: "Maria",
		text: "Acabei de revisar!",
		time: "10:02",
	}

	return (
		<>
			{/* Primeira do João: Avatar + Meta + Bubble */}
			<Message.Root message={joao1}>
				<Message.Avatar />
				<div className="flex flex-col gap-1">
					<Message.Meta />
					<Message.Bubble>{joao1.text}</Message.Bubble>
				</div>
			</Message.Root>

			{/* Seguinte do João: omite Avatar/Meta; só a bolha (recuada) */}
			<Message.Root message={joao2}>
				<Message.Bubble className="ml-10">{joao2.text}</Message.Bubble>
			</Message.Root>

			{/* Outra pessoa: volta Avatar + Meta + Bubble */}
			<Message.Root message={maria}>
				<Message.Avatar />
				<div className="flex flex-col gap-1">
					<Message.Meta />
					<Message.Bubble>{maria.text}</Message.Bubble>
				</div>
			</Message.Root>
		</>
	)
}
