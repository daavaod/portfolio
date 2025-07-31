import type { FC } from "react"
// libs
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// components
import Link from "../typography/Link"

// types
interface CardCompProps {
    title: string
    description: string
    link: string
    linkText: string
    techStack: string[]
}

const CardComp: FC<CardCompProps> = ({
    title,
    description,
    link,
    linkText,
    techStack,
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                {
                    link &&
                    <CardDescription>
                        <Link link={link} linkText={linkText}></Link>
                    </CardDescription>
                }
                <CardAction>
                    2024
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2">
                    {techStack.map((item, index) => <Badge variant="secondary" key={index}>{item}</Badge>)}
                </div>
            </CardContent>
        </Card>
    )
}

export default CardComp