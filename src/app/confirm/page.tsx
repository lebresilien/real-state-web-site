
"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";


export default function Confirm() {

    return (
        <div className="flex relative w-full h-full flex-col items-center lg:min-h-screen mt-60">
            
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px] -mt-60">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">Confirmation</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white"/>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/consulting">Consultation</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white"/>
                        <BreadcrumbItem className="text-white">Confirmation</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="w-full flex flex-col items-center space-y-10 px-5 my-24 md:px-0 md:container">
                

                <div className="border-t-4 border-primary rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex space-x-2 items-center">
                        <div className="py-1">
                            <span className="inline-flex items-center text-primary">
                                <Icon name="info-circled" className="h-7 w-7"/>
                            </span>
                        </div>
                        <div>
                            <p className="text-balance font-bold text-black text-lg">Merci pour votre inscription, nous sommes impatients de vous rencontrer</p>
                            <p className="text-balance text-base">
                                Vous recevrez un email de confirmation contenant tous les détails de votre rendez vous
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center cursor-pointer rounded-b group space-y-1 border-t-4 border-t-primary shadow-md p-10">
                    <div className="flex flex-col space-y-1 items-center">
                        <span className="text-gray-900 font-black tex-md text-center">Téléchargez notre guide exclusif sur l&lsquo;achat et la vente de propriétés au Cameroun</span>
                        <span className="text-base text-center">
                            Cliquez sur le boutton ci dessous pour télécharger
                        </span>
                    </div>
                    <Link href={"/folders/page-consultation.pdf"} target="_blank">
                        <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                            <Icon name="download" className="h-7 w-7 animate-bounce" />
                        </span>
                    </Link>
                </div>

                <h3 className="text-3xl text-primary sm:text-4xl leading-normal font-extrabold tracking-tight">
                    Contactez Nous
                </h3>

                <div className="w-full flex flex-col justify-center items-center space-y-5 lg:space-y-0 lg:flex-row lg:space-x-14">
                    
                    <div className="w-80 flex flex-col items-center cursor-pointer group space-y-1 border border-transparent shadow-md p-10">
                        <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                            <Icon name="phone-outline" className="h-7 w-7" />
                        </span>
                        <div className="flex flex-col space-y-1 items-center">
                            <span className="text-gray-500 text-lg">Appellez nous 24/7</span>
                            <span className="text-gray-900 font-bold text-lg">+237 691313486</span>
                        </div>
                    </div>

                    <div className="w-80 flex flex-col items-center cursor-pointer group space-y-1 border border-transparent shadow-md p-10">
                        <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                            <Icon name="mail-outline" className="h-7 w-7" />
                        </span>
                        <div className="flex flex-col space-y-1 items-center">
                            <span className="text-gray-500 text-lg">Envoyez un mail</span>
                            <span className="text-gray-900 font-bold text-lg">infos@etsmanagement.com</span>
                        </div>
                    </div>

                    <div className="w-80 flex flex-col items-center cursor-pointer group space-y-1 border border-transparent shadow-md p-10">
                        <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                            <Icon name="current-location-outline" className="h-7 w-7" />
                        </span>
                        <div className="flex flex-col space-y-1 items-center">
                            <span className="text-gray-500 text-lg">Visitez nos locaux</span>
                            <span className="text-gray-900 font-bold text-lg">Akwa, Doaula, Cameroun</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}