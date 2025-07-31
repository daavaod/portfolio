// libs
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "../typography/Link"

// types
interface CardCompProps {
    title: string
    description: string
    link: string
    linkText: string
    techStack: string[]
}

export default function CardComp({title, description, link, linkText, techStack}: CardCompProps) {
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
            </CardHeader>
            <CardContent>
                <div className="flex gap-2">
                    {techStack.map((item, index) => <Badge variant="secondary" key={index}>{item}</Badge>)}
                </div>
            </CardContent>
        </Card>
    )
}