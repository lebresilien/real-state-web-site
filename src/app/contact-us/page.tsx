import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Contact() {
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
                    <form className="md:col-span-8 p-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name">
                                    Noms et Prénoms
                                </Label>
                                <Input
                                    className="appearance-none block w-full h-14 bg-gray-100 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                    placeholder="Jhon Doe"
                                />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name">
                                    Sujet
                                </Label>
                                <Input
                                    className="appearance-none block w-full h-14 bg-gray-100 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                    placeholder="xxxxxxxxx"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Email
                                </Label>
                                <Input
                                    className="appearance-none block w-full h-14 bg-gray-100 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                    type="email" 
                                    placeholder="********@*****.**" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Message
                                </Label>
                                <Textarea 
                                    rows={3}
                                    placeholder="Entrer votre message"
                                    className="appearance-none block w-full h-14 bg-gray-100 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div className="flex justify-between w-full px-3 mt-5">
                                <Button
                                    className="shadow inline-flex relative gap-x-2 h-10 w-full border-0 bg-primary overflow-hidden transition-all hover:bg-secondary group sm:text-sm lg:h-16"
                                    type="submit"
                                >
                                    <span className="w-0 h-0 rounded bg-secondary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">Envoyer</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}