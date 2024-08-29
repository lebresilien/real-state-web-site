import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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

            <div className="container h-full my-24 flex flex-col md:flex-row md:space-x-3">
                
                <div className="bg-yellow-500 w-full p-6 flex flex-col items-center justify-center md:w-3/4 md:p-10">01</div>
                    
                <div className="w-full py-6 space-y-6 flex flex-col md:py-10 md:w-1/4">
                    
                    <div className="py-5 bg-primary flex w-full max-w-sm items-center space-x-1 px-5">
                        <Input className="border-none text-white border-transparent shadow-none focus-visible:ring-transparent" placeholder="Rechercher" />
                        <Icon name="magnifying-glass" className="text-white" />
                    </div>

                    <div className="py-5 flex flex-col w-full h-full bg-gray-200 max-w-sm items-center px-10">
                        {Array.from([8, 5, 8]).map((_, index) => (
                            <div className="flex items-center shadow-none md:max-w-xl" key={index}>
                                <img className="object-cover h-14 w-14" src="/images/emi.png" alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <a href="#" className="block flex font-bold mb-2 space-x-1 group">
                                        <Icon name="avatar" className="text-primary" />
                                        <span className="text-sm text-gray-500 group-hover:text-primary">user</span>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 hover:text-primary">Here are the je cameroun eggs sgsgs sgsgs h hs shshsgsg.</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-5 flex flex-col w-full h-full bg-gray-200 max-w-sm justify-center items-center px-10">
                        <h5 className="text-lg uppercase font-bold text-gray-950 md:text-xl">categories</h5>
                        <div className="flex flex-col space-y-3 mt-5 w-full">
                            {Array.from([8, 5, 8,1, 5, 8, 8,]).map((_, index) => (
                                <Link href="#" key={index} className="block capitalize flex justify-between items-center p-3 group hover:bg-white">
                                    <span className="text-gray-700">locaation</span>
                                    <Icon name="arrow-right" className="hidden text-primary group-hover:block" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="py-5 flex flex-col w-full h-full bg-gray-200 max-w-sm justify-center items-center px-10">
                        <h5 className="text-lg uppercase font-bold text-gray-950 md:text-xl">Tags</h5>
                        <div className="flex flex-wrap gap-1 mt-5 w-full">
                            {Array.from([8, 5, 8,1, 5, 8, 8,]).map((_, index) => (
                                <Link href="#" key={index} className="text-gray-700 capitalize py-1 px-3 bg-white hover:text-white hover:bg-primary">
                                    <span className="">duplex</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}