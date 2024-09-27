"use client";
import TabComponent from "@/components/tab";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useEffect, useState } from 'react';
import { Advantage, Mission, Story, Testimony, Value } from "../../../types";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
export default function Page() {

    const [testimonies, setTestimonies] = useState<Testimony[]>([]);
    const [stories, setStories] = useState<Story[]>([]);
    const [data, setData] = useState<Mission[] | null>(null);
    const [values, setValues] = useState<Value[] | null>(null);
    const [adavantages, setAdvantages] = useState<Advantage[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('/api/about');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const res = await response.json();
            setData(res.missions);
            setValues(res.values);
            setAdvantages(res.advantages);
            setTestimonies(res.testimonies);
            setStories(res.stories);
          } catch (error) {
            throw new Error('Error from server');
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
       
    }, [])

    if(loading) 
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="relative flex h-24 w-24">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-20 w-20 bg-blue-600"></span>
                </span>
            </div>
        )

    return (
        <div className="flex w-full h-full flex-col items-center justify-center lg:min-h-screen">
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[400px] lg:h-[500px]">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">a propos</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem className="text-white uppercase">a propos</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="container h-full my-24 flex flex-col space-y-20">

                <div data-aos="flip-up" className="flex flex-col px-10 items-center justify-center space-y-10 bg-gray-50 py-10 lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-black text-center text-xl font-bold tracking-wide uppercase lg:text-2xl lg:text-start">
                            notre mission
                        </h3>
                        <p className="text-gray-700 lg:w-[500px]">
                            Chez <span className="text-primary font-bold underline text-justify decoration-primary">ETS Management Immobilier (EMI)</span>, notre mission est de transformer le marché 
                            immobilier au Cameroun en offrant des services basés sur la confiance, la transparence et 
                            l&apos;intégrité.Nous croyons que chaque transaction immobilière doit être une expérience positive, 
                            sécurisée et honnête pour toutes les parties impliquées.
                        </p> 
                    </div>

                    <div className="flex flex-col space-y-5 max-w-sm">
                        <Accordion type="single" collapsible>
                            {data?.map((mission) => (
                                <AccordionItem value={mission.name} key={mission.name}>
                                    <AccordionTrigger className="font-bold">{mission.name}</AccordionTrigger>
                                    <AccordionContent>
                                        {mission.description}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>

                <div data-aos="flip-down" className="flex flex-col px-10 items-center justify-center space-y-10 bg-gray-50 py-10 lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-black text-center text-xl font-bold tracking-wide uppercase lg:text-2xl lg:text-start">
                            nos valeurs
                        </h3>
                        <p className="text-gray-700 lg:w-[500px]">
                            Nos valeurs fondamentales guident chaque aspect de notre travail. Elles définissent qui nous 
                            sommes et comment nous opérons. 
                        </p> 
                    </div>

                    <div className="flex flex-col space-y-5 max-w-sm">
                        <Accordion type="single" collapsible>
                            {values?.map((el) => (
                                <AccordionItem value={el.name} key={el.name}>
                                    <AccordionTrigger className="font-bold">{el.name}</AccordionTrigger>
                                    <AccordionContent>
                                        {el.description}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                <div data-aos="flip-up" className="flex flex-col px-10 items-center justify-center space-y-10 bg-gray-50 py-10 lg:flex-row lg:justify-between lg:space-y-0">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-black text-center text-xl font-bold tracking-wide uppercase lg:text-2xl lg:text-start">
                            ce qui nous differencie
                        </h3>
                        <p className="text-gray-700 lg:w-[500px]">
                            Nos valeurs fondamentales guident chaque aspect de notre travail. Elles définissent qui nous 
                            sommes et comment nous opérons. 
                        </p> 
                    </div>

                    <div className="flex flex-col space-y-5 max-w-sm">
                        <Accordion type="single" collapsible>
                            {adavantages?.map((el) => (
                                <AccordionItem value={el.name} key={el.name}>
                                    <AccordionTrigger className="font-bold">{el.name}</AccordionTrigger>
                                    <AccordionContent>
                                        {el.description}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                <TabComponent testimonies={testimonies} stories={stories} />
             
            </div>

        </div>
    )
}