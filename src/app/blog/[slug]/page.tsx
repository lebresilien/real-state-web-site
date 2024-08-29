import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

export default function Page({ params }: { params: { slug: string } }) {
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
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/blog">Blog</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem className="text-white uppercase">{params.slug}</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="container h-full my-24 flex h-[200px] space-x-3">
                <div className="bg-yellow-500 flex flex-col items-center justify-center w-3/4 p-10">01</div>
                    
                <div className="py-10 w-1/4 flex flex-col space-y-10">
                    
                    <div className="py-5 bg-primary flex w-full max-w-sm items-center space-x-1 px-5">
                        <Input className="border-none text-white border-transparent shadow-none focus-visible:ring-transparent" placeholder="Rechercher" />
                        <Icon name="magnifying-glass" className="text-white" />
                    </div>

                    <div className="py-5 flex flex-col w-full bg-gray-200 max-w-sm items-center px-10">
                        <div className="flex flex-col items-center shadow-none md:flex-row md:max-w-xl">
                            <img className="object-cover h-14 w-14" src="/images/emi.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h6 className="mb-2 text-sm font-bold tracking-tight">Noteworthy technology acquisitions 2021</h6>
                                <p className="mb-3 font-normal text-gray-700">Here are the.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}