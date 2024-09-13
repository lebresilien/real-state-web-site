
"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Icon } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { Data } from "../../../../types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const readButtonVariants = {
    hover: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
};
export default  function Page() {

    const [data, setData] = useState<Data | null>(null);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams<{ id: string}>()

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/services/${params.id}`, { next: { revalidate: 10 } });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const res = await response.json();
            setData(res.res.service);
            setServices(res.res.all);
          } catch (error) {
            console.log('errror', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
       
    }, [params.id]);

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
        <div className="flex bg-gray-50 w-full h-full flex-col items-center justify-center lg:min-h-screen">
                
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px]">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">service</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="#">Service</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem className="text-white uppercase">{data ? data.name : ''}</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="container h-full my-24 flex flex-col lg:flex-row lg:space-x-3">
                
                <div className="w-full p-6 space-y-6 flex flex-col lg:w-3/4 lg:p-10">
                    <h3 className="text-2xl font-extrabold tracking-wide uppercase">{data ? data.name : ''}</h3>
                    
                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Présentation</h6>
                        <p className="overflow-flow">{data ? data.presentation : ''}</p>
                    </div>

                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Au Cameroun</h6>
                        <p className="overflow-flow">{data ? data.contexte : ''}</p>
                    </div>

                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Ce que nous apportons</h6>
                        <p className="overflow-flow">{data ? data.apport : ''}</p>
                    </div>

                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Illustration</h6>
                        <p className="overflow-flow">{data ? data.illustration : ''}</p>
                    </div>

                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Coûts</h6>
                        <Accordion type="single" collapsible>
                            {data?.costs.map((el: any) => (
                                    <AccordionItem className="bg-white my-4 px-3" value={el.name} key={el.name}>
                                        <AccordionTrigger className="font-bold">{el.name}</AccordionTrigger>
                                        <AccordionContent>
                                            {el.description}
                                        </AccordionContent>
                                    </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Avantages</h6>
                        <Accordion type="single" collapsible>
                            {data?.advantages.map((el: any) => (
                                    <AccordionItem className="bg-white my-4 px-3" value={el.name} key={el.name}>
                                        <AccordionTrigger className="font-bold">{el.name}</AccordionTrigger>
                                        <AccordionContent>
                                            {el.description}
                                        </AccordionContent>
                                    </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="flex flex-col">
                        <h6 className="text-lg font-extrabold">Bénéfices</h6>
                        <Accordion type="single" collapsible>
                            {data?.profits.map((el: any) => (
                                    <AccordionItem className="bg-white my-4 px-3" value={el.name} key={el.name}>
                                        <AccordionTrigger className="font-bold">{el.name}</AccordionTrigger>
                                        <AccordionContent>
                                            {el.description}
                                        </AccordionContent>
                                    </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                <div className="w-full max-h-96 p-6 space-y-6 border border-gray-700 flex flex-col lg:p-4 lg:w-1/4">
                    <div className="border-l-4 border-primary px-4">
                        <span className="text-xl font-bold uppercase">Tous les services</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        {services.map((el: any) => (
                            <motion.a
                                initial="initial" 
                                whileHover="hover" 
                                className="flex justify-between items-center cursor-pointer rounded-sm shadow text-gray-100 bg-primary p-3" 
                                key={el.id}
                                href={`${el.id}`}
                            >
                                <span>{el.name}</span>
                                <motion.div
                                    variants={readButtonVariants}
                                    transition={{
                                        duration: .5
                                    }}
                                >
                                    <Icon name="arrow-right" />
                                </motion.div>
                            </motion.a>
                        ))}
                    </div> 
                </div>

            </div>

            <div className="flex w-full flex-col items-center bg-white justify-center py-24 space-y-10">
                <span className="text-xl text-black font-bold uppercase lg:text-3xl">Prêt à Commencer ?</span>
                <Link className="mt-8" href="/contact">
                    <Button className="inline-flex relative gap-x-2 h-16 px-4 border-0 bg-blue-500 overflow-hidden transition-all hover:bg-blue-500 group focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm lg:h-20">
                        <span className="w-0 h-0 rounded bg-blue-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">Lancez nous</span>
                        <Icon name="arrow-right" className="animate-ping h-3 w-3 text-white" />
                    </Button>
                </Link>
            </div>

        </div>
    )
}