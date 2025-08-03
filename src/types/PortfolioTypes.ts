import { Timestamp } from "firebase/firestore";

export type PortfolioTypes = {
    id?: string;
    name: string;
    description: string;
    link?: string | undefined;
    linkText?: string | undefined;
    techStack: string[]
}

export type NewPortfolioType = {
    name: string;
    description: string;
    link?: string | undefined;
    linkText?: string | undefined;
    techStack: string[],
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
}