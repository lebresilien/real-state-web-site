"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast  } from "@/components/ui/use-toast";
import { useState } from "react";

const FormSchema = z.object({
    name: z.string().min(3, {
      message: "Le Nom doit contenir au moins 3 caractères.",
    }),
    subject: z.string().min(1, {
        message: "Le champ subject est obligatoire",
    }),
    email: z.string().email(),
    message: z.string().min(10, {
        message: "Le message doit contenir au moins 10 caractères.",
    }), 

})

export default function Contact() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          subject: "",
          email: "",
          message: "",
        },
    });

    const onSubmit = async (contact: z.infer<typeof FormSchema>) => {

        setIsSubmitting(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
                method: 'POST',
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
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            toast({
                title: "Alert",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <span className="text-white">Vos informations ont été envoyées</span>
                    </pre>
                ),
            })
        } catch (error) {
            console.log('errroruuuuuuuuuuu', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex w-full h-full flex-col items-center lg:min-h-screen mt-60">
           
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px] -mt-60">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">Contact</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem className="text-white">CONTACT</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="container my-24">
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-4 p-10">
                        <h3 className="text-3xl text-primary sm:text-4xl leading-normal font-extrabold tracking-tight">
                            Contactez Nous
                        </h3>

                        <h5 className="text-xl text-gray-900 font-bold sm:text-2xl leading-normal font-extrabold tracking-tight">
                            Parlez à nos consultants
                        </h5>
                       
                        <div className="flex items-center my-10 cursor-pointer group border-b-2 pb-4 space-x-5">
                            <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                                <Icon name="phone-outline" className="h-7 w-7" />
                            </span>
                            <div className="flex flex-col space-y-1">
                                <span className="text-gray-500 text-lg">Appellez nous 24/7</span>
                                <span className="text-gray-900 font-bold text-lg">+237 678660800</span>
                            </div>
                        </div>

                        <div className="flex items-center my-10 cursor-pointer group border-b-2 pb-4 space-x-5">
                            <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                                <Icon name="mail-outline" className="h-7 w-7" />
                            </span>
                            <div className="flex flex-col space-y-1">
                                <span className="text-gray-500 text-lg">Envoyez un mail</span>
                                <span className="text-gray-900 font-bold text-lg">infos@etsmanagement.com</span>
                            </div>
                        </div>

                        <div className="flex items-center my-10 cursor-pointer group space-x-5">
                            <span className="inline-flex items-center bg-slate-50 p-4 rounded-full text-primary group-hover:text-white group-hover:bg-primary">
                                <Icon name="current-location-outline" className="h-7 w-7" />
                            </span>
                            <div className="flex flex-col space-y-1">
                                <span className="text-gray-500 text-lg">Visitez nos locaux</span>
                                <span className="text-gray-900 font-bold text-lg">Akwa, Doaula, Cameroun</span>
                            </div>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="md:col-span-8 p-10">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Noms et prénoms</FormLabel>
                                                <FormControl>
                                                    <Input
                                                    {...field}
                                                        className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                        placeholder="Jhon Doe"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>subject</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                            placeholder="xxxxxxxxx"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                    {...field}
                                                        className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                        placeholder="********@*****.**"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                    {...field}
                                                        className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                        placeholder="Votre message"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex justify-between w-full px-3 mt-5">
                                    <Button
                                        className="shadow inline-flex relative gap-x-2 h-10 w-full border-0 bg-primary overflow-hidden transition-all hover:bg-secondary group sm:text-sm lg:h-16"
                                        type="submit"
                                        disabled={isSubmitting ? true : false}
                                    >
                                        <span className="w-0 h-0 rounded bg-secondary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            { isSubmitting ? "Envoi..." : "Envoyer" }
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}