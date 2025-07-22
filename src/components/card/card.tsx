import type { ReactNode } from "react"
// libs
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// types
interface CardCompProps {
    children: ReactNode
}

export default function CardComp({children}:CardCompProps) {
    return (
        <Card>
            {children}
        </Card>
    )
}