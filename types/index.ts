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

export interface Mission {
    name: string
    description: string
}

export interface Faq {
    question: string
    answer: string
}

export interface Value {
    name: string
    description: string
}

export interface Story {
    period: string
    title: string
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

export interface Data {
    name: string
    description: string
    presentation: string
    contexte: string
    apport: string
    illustration: string,
    costs: [{
        name: string
        description: string
    }],
    advantages: [{
        name: string
        description: string
    }],
    profits: [{
        name: string
        description: string
    }]
}