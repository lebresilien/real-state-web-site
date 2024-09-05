"use client";
import TabComponent from "@/components/tab";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import { Mission } from "../../../types";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
export default function Page() {

    const [data, setData] = useState<Mission[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('/api/about');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const res = await response.json();
            //console.log('rrere', res)
            setData(res.missions);
          } catch (error) {
            console.log('errror', error);
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
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px]">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">Blog</h1>
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

            <div className="container h-full my-24 flex flex-col space-y-5">

                <div className="flex flex-col px-10 items-center justify-center space-y-10 bg-gray-50 py-10 md:flex-row md:justify-between md:space-y-0">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-black text-xl font-bold tracking-wide uppercase md:text-2xl ">
                            notre mission
                        </h3>
                        <p className="text-gray-700 w-[500px]">
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

                <TabComponent />
             
            </div>

        </div>
    )
}