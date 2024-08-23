import { Contact } from "../../../../types";

export async function POST(contact: Contact) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, { 
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: contact.name,
            subject: contact.subject,
            email: contact.email,
            message: contact.message,
        })
    });
    const response = await res.json();
    return new Response(JSON.stringify(response));
  }