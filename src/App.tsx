import { Message } from "./components/message/Message"

export function ChatExample() {

  const messages = [
    { id: "1", senderId: "contact", name: "João", text: "Fala Renê!", time: "10:01" },
    { id: "2", senderId: "me", name: "Renê", text: "Fala mano, suave?", time: "10:02" },
    { id: "3", senderId: "contact", name: "João", text: "Manda o layout novo do delivery", time: "10:03" },
    { id: "4", senderId: "me", name: "Renê", text: "Tô subindo no Git agora 🔥", time: "10:04" },
  ]

  return (
    <div className="h-full bg-[#efeae2] p-4 flex flex-col gap-2">
      {messages.map((msg) => {
        return (
          <Message.Root
            key={msg.id}
            message={msg}
          >
            <Message.Avatar />
            <div className="flex flex-col gap-1">
              <Message.Meta />
              <div className="flex items-start gap-1">
                <Message.Bubble>{msg.text}</Message.Bubble>
                <Message.Actions />
              </div>
            </div>
          </Message.Root>
        )
      })}
    </div>
  )
}