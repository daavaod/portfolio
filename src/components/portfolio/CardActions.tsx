import type { FC } from "react"
import { Trash, Pencil } from "lucide-react"
import { Button } from "../ui/button"

// types
interface CardActionsProps {
    id: string
}

const CardActions: FC<CardActionsProps> = ({
    id
}) => {

    const handleEdit = (id: string) => {
        console.log('handle edit', id)
    }

    const handleDelete = (id: string) => {
        console.log('handle delete', id)
    }

    return (
        <div className="flex gap-2">
            <Button variant="secondary" size="icon" className="size-8 hover:bg-primary/90 hover:text-white cursor-pointer" onClick={() => handleEdit(id)}>
                <Pencil />
            </Button>
            <Button variant="secondary" size="icon" className="size-8 hover:bg-destructive/90 hover:text-white cursor-pointer" onClick={() => handleDelete(id)}>
                <Trash />
            </Button>
        </div>
    )
}

export default CardActions