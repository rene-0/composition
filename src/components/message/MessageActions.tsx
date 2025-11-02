import { useContext, useEffect, useRef, useState } from "react"
import { MessageContext } from "../../context/MessageContext"

type MessageActionsProps = {
	className?: string
}

export function MessageActions({ className }: MessageActionsProps) {
	const { isMe, id } = useContext(MessageContext)
	const [open, setOpen] = useState(false)

	const mainContainer = useRef<HTMLDivElement>(null)

	const handleEdit = () => {
		console.log("editar", id)
		setOpen(false)
	}

	const handleDelete = () => {
		console.log("deletar", id)
		setOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				mainContainer.current &&
				!mainContainer.current.contains(event.target as Node)
			) {
				setOpen(false)
			}
		}

		if (open) {
			document.addEventListener("mousedown", handleClickOutside)
		} else {
			document.removeEventListener("mousedown", handleClickOutside)
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [open])

	if (!isMe) return null

	return (
		<div className={["relative", className].filter(Boolean).join(" ")}>
			<button
				onClick={() => setOpen((o) => !o)}
				className="text-slate-400 cursor-pointer hover:text-slate-600 px-1"
			>
				⋮
			</button>
			{open ? (
				<div ref={mainContainer} className="absolute right-0 top-5 bg-white rounded shadow-md text-sm overflow-hidden z-10">
					<button
						onClick={handleEdit}
						className="block w-full text-left px-3 py-1 cursor-pointer hover:bg-slate-100"
					>
						Editar
					</button>
					<button
						onClick={handleDelete}
						className="block w-full text-left px-3 py-1 cursor-pointer text-red-500 hover:bg-slate-100"
					>
						Excluir
					</button>
				</div>
			) : null}
		</div>
	)
}