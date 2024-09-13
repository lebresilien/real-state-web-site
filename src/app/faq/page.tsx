import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Faq } from "../../../types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default async function Page() {

    let res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/faqs`);
    let data = await res.json();

    return (
        <div className="flex w-full h-full bg-gray-50 flex-col items-center justify-center lg:min-h-screen">
            
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px]">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">Faq</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/faq">Faq</BreadcrumbLink>
                        </BreadcrumbItem>    
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="container">
                <Accordion type="single" collapsible>
                    {data.map((el: Faq, index: number) => (
                        <div key={index} className="my-10">
                            <AccordionItem value={el.question} className="bg-white px-1 lg:px-3 font-bold">
                                <AccordionTrigger>{el.question}</AccordionTrigger>
                                <AccordionContent>
                                    {el.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </div>
                    ))}
                </Accordion>
            </div>

            <div className="flex w-full flex-col items-center bg-white justify-center py-24 space-y-10">
                <span className="text-xl text-black font-bold uppercase lg:text-3xl">Toujours bloqué, demandez directement</span>
                <Link className="mt-8" href="/contact">
                    <Button className="inline-flex relative gap-x-2 h-10 border-0 bg-blue-500 overflow-hidden transition-all hover:bg-blue-500 group focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm lg:h-16">
                        <span className="w-0 h-0 rounded bg-blue-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">Contactez nous</span>
                        <Icon name="arrow-right" className="animate-ping h-3 w-3 text-white" />
                    </Button>
                </Link>
            </div>

        </div>
    )
}