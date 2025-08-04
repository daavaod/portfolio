import type { FC } from "react"
// libs
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// components
import Link from "../typography/Link"
import CardActions from "./CardActions"

// types
interface CardCompProps {
    id: string
    title: string
    description: string
    link?: string | undefined
    linkText?: string | undefined
    techStack: string[]
}

const CardComp: FC<CardCompProps> = ({
    id,
    title,
    description,
    link,
    linkText,
    techStack,
}) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                {
                    link &&
                    <CardDescription>
                        <Link link={link} linkText={linkText ?? ""}></Link>
                    </CardDescription>
                }
                <CardAction>
                    2024
                </CardAction>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex gap-2">
                    {techStack.map((item, index) => <Badge variant="secondary" key={index}>{item}</Badge>)}
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                <CardActions id={id} />
            </CardFooter>
        </Card>
    )
}

export default CardComp