import { BotExample } from "./components/examples/Bot"
import { GroupExample } from "./components/examples/Group"
import { SquadExample } from "./components/examples/Squad"
import { SupportExample } from "./components/examples/Support"
import { SystemExample } from "./components/examples/System"
import { Section } from "./components/Section"

export function App() {
	return (
		<div className="h-full p-4 space-y-8 bg-[#efeae2]">
			<Section title="1) Suporte ao Cliente (omitir Actions do cliente)">
				<SupportExample />
			</Section>
			<Section title="2) Grupo (Avatar/Meta só na primeira mensagem do mesmo autor)">
				<GroupExample />
			</Section>
			<Section title="3) Sistema/Evento (só Bubble, centralizada, sem Avatar/Actions)">
				<SystemExample />
			</Section>
			<Section title="5) Time Interno / Squad (mensagem pinned/importante + resposta curta)">
				<SquadExample />
			</Section>
			<Section title="6) Bot + Humano (Avatar só humano, Actions só “me”)">
				<BotExample />
			</Section>
		</div>
	)
}