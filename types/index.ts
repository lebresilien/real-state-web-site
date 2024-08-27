export interface Service {
    id: number
    name: string
    description: string
}

export interface Testimony {
    id: number 
    fullName: string
    picture: string
    citation: string
}

export interface Advantage {
    id: number
    name: string 
    description: string
}

export interface Vision {
    id: number 
    name: string
    description: string
}

export interface Contact {
    name: string
    subject: string
    email: string
    message: string
}

export interface Blogs {
    title: string
    slug: string
    cover: string
    content?: string
    category?: string
    tags?: string[],
    user: string,
    createdAt: string
}