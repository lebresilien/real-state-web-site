
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

const lists = [
    'Accès à des propriétés exclusives non listées publiquement',
    'Consultation gratuite avec nos conseillers en immobilier',
    'Accès à des offres promotionnelles personnalisées et des conseils experts',
    'Vos informations sont 100% sécurisées et ne seront jamais partagées avec des tiers'
];

const properties = [
    'Appartement',
    'Maison',
    'Terrain',
    'Local commercial',
    'Autre'
];

const services = [
    'Vente',
    'Location',
    'Terrain',
    'Gestion Immobilière',
    'Conseil'
];

const modes = [
    'Rendez-vous en présentiel à Yaoundé',
    'Appel téléphonique',
    'Visioconférence via Zoom/Google meet/WhatsApp video call '
];

const FormSchema = z.object({
    name: z.string().min(3, {
      message: "Le Nom doit contenir au moins 3 caractères.",
    }),
    phone: z.string().min(1, {
        message: "Le champ telephone est obligatoire",
    }),
    service: z.string().min(1, {
        message: "Le champ service est obligatoire",
    }),
    amount: z.string().min(5, {
        message: "Le champ budget doit contenir au moins 5 chiffres",
    }),
    property: z.string().min(1, {
        message: "Le champ type de propriété est obligatoire",
    }),
    mode: z.string().min(1, {
        message: "Le champ mode de consultation est obligatoire",
    }),
    date_hour: z.date(),
    time: z.string().min(1, {
        message: "Le champ heure est obligatoire",
    }),
    email: z.string().email(),
    comment: z.string().min(10, {
        message: "Le message doit contenir au moins 10 caractères.",
    }), 
});
export default function Consulting() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          phone: "",
          email: "",
          service: "",
          property: "",
          amount: "",
          mode: "",
          comment: "",
          date_hour: new Date(),
          time: ""
        }
    });

    const onSubmit = async (contact: z.infer<typeof FormSchema>) => {
        console.log(contact)
    }

    return (
        <div className="flex relative w-full h-full flex-col items-center lg:min-h-screen mt-60">
            
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px] -mt-60">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">Consutations</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white"/>
                        <BreadcrumbItem className="text-white">Consultations</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="w-full flex flex-col items-center space-y-10 my-24 md:container">

                <div className="w-full flex flex-col space-y-0 border-l-4 border-primary pl-2 lg:w-9/12">
                    <h1 className="text-2xl lg:text-3xl font-sans font-bold">
                        Obtenez une Consultation Gratuite pour Vos Besoins Immobiliers
                    </h1>
                    <span className="text-sm text-gray-700 lg:text-end lg:mr-16">
                        Vous êtes à un clic de découvrir les meilleures opportunités 
                        immobilières à Yaoundé et au-delà
                    </span>
                </div>

                <div className="w-full border-primary pl-2 lg:w-9/12">
                    <p className="text-md font-normal text-gray-500 lg:text-xl lg:mr-16">
                        Inscrivez-vous pour une consultation personnalisée avec nos experts et explorez 
                        nos services adaptés à vos besoins
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12">
                    
                    <div className="md:col-span-4 p-10">
                        <h3 className="text-3xl text-primary sm:text-4xl leading-normal font-extrabold tracking-tight">
                            Bullet Points:
                        </h3>

                        <div className="flex flex-col space-y-5 my-5">
                            {lists.map((value, index) => (
                               <div className="flex space-x-3" key={index}>
                                    <span className="inline-flex items-center">
                                        <Icon name="check-circled" className="h-7 w-7 text-primary"/>
                                    </span>
                                    <span className="text-gray-900 font-bold text-lg">{value}</span>
                               </div> 
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="md:col-span-8 p-10">
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full md:w-1/2 mb-6">
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
                                                            placeholder="John Doe"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Telephone</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                        {...field}
                                                            className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                            placeholder="xxxxxxxx"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full mb-6">
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
                                    <div className="w-full md:w-1/2 mb-6">
                                        <FormField
                                            control={form.control}
                                            name="service"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Service</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl className="appearance-none w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary">
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Selectionnez le service" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {services.map((el, index) => (
                                                                    <SelectItem key={index} value={el}>{el}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 mb-6">
                                        <FormField
                                            control={form.control}
                                            name="property"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Type de Propriété</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl className="appearance-none w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary">
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selectionnez le type de propriété" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {properties.map((el, index) => (
                                                                <SelectItem key={index} value={el}>{el}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 mb-6">
                                        <FormField
                                            control={form.control}
                                            name="amount"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Budget estimé</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="number"
                                                            {...field}
                                                            className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                            placeholder="100000000"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 mb-6">
                                        <FormField
                                            control={form.control}
                                            name="mode"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Mode de consultation</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl className="appearance-none w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary">
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selectionnez le mode de consultation" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {modes.map((el, index) => (
                                                                <SelectItem key={index} value={el}>{el}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 mb-6">
                                        <FormField
                                            control={form.control}
                                            name="date_hour"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Date</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant={"outline"}
                                                                    className={cn(
                                                                        "block text-left flex items-center appearance-none w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:border-primary",
                                                                        !field.value && "text-muted-foreground"
                                                                    )}
                                                                    >
                                                                    {field.value ? (
                                                                        format(field.value, "dd-MM-yyyy")
                                                                    ) : (
                                                                        <span>Pick a date</span>
                                                                    )}
                                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                // @ts-ignore
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                disabled={(date) =>
                                                                date > new Date() || date < new Date("1900-01-01")
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:px-3 mb-6">
                                        <FormField
                                            control={form.control}
                                            name="time"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Heure</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="time"
                                                            {...field}
                                                            className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                            placeholder="18-08-2024"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full mb-6">
                                        <FormField
                                            control={form.control}
                                            name="comment"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Commentaires</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            className="appearance-none block w-full h-16 bg-gray-50 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                                            placeholder="Dites nous plus sur votre besoin......"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex justify-between w-full md:px-3 mt-5">
                                        <Button
                                            className="shadow inline-flex relative gap-x-2 h-10 w-full border-0 bg-primary overflow-hidden transition-all hover:bg-secondary group sm:text-sm lg:h-16"
                                            type="submit"
                                        >
                                            <span className="w-0 h-0 rounded bg-secondary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                            <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                Planifier ma consultation
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </div>

                </div>
                
            </div>

        </div>
    )
}