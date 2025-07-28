// libs
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// types
interface CardCompProps {
    title: string
    techStack: string[]
}

export default function CardComp({title, techStack}: CardCompProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Tech stack:</p>
                <ul>
                    {techStack.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
    )
}