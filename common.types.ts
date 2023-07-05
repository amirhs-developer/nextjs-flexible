import {User,Session} from "next-auth";

//? Types 
export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
}

//? Interface

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    id: string;
    createdBy: {
        name: string;
        email: string;
        avatarUrl: string;
        id: string;
    }
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    telegramUsername: string;
    phoneNumber: string;
    projects: {
        edges: {node: ProjectInterface}[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }
    }
}

export interface SessionInterface extends Session {
    user: User & {
        id: string;
        name: string;
        email: string;
        avatarUrl: string;
    }
}

export interface ProjectForm {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
}


