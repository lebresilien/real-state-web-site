"use client";
import TabComponent from "@/components/tab";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

export default function Page() {

    const [isVisible, setIsVisible] = useState(false);

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

            <div className="container h-full my-24 flex flex-col">
                <TabComponent />
            </div>

        </div>
    )
}