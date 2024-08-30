import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Icon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Blogs } from "../../../../types";
import htmlParser from 'html-react-parser';

export default async function Page({ params }: { params: { slug: string } }) {

    let res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${params.slug}`, { next: { revalidate: 10 } });
    let data = await res.json();

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
                
                <div className="w-full p-6 space-y-6 flex flex-col md:w-3/4 md:p-10">
                    
                    <div className="relative cursor-pointer group h-96">
                        <Image
                                className="grayscale transition ease-in group-hover:-translate-y-2 group-hover:scale-25 duration-1000"
                                src={data.item.cover}
                                alt={data.item.title}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                        />
                        <div className="absolute h-full inset-0 flex items-end justify-end">
                            <h2 className="text-center bg-primary px-2 py-1 text-white text-sm font-bold">{data.item.createdAt}</h2>
                        </div>
                    </div>

                    <a href="#" className="block capitalize flex flex-row items-center p-3 space-x-2 group">
                        <Icon name="avatar" className="text-primary" />
                        <span className="text-gray-700 font-bold text-sm uppercase group-hover:text-primary">{data.item.user}</span>
                    </a>

                    <div>
                        <h1 className="text-xl font-bold uppercase tracking-wide leading-6 md:text-2xl hover:text-primary hover:font-extrabold">{data.item.title}</h1>
                    </div>

                    <p className="overflow-hidden">
                       {htmlParser(data.item.content)}
                    </p>

                </div>
                    
                <div className="w-full py-6 space-y-6 flex flex-col md:py-10 md:w-1/4">
                    
                    <div className="py-5 bg-primary flex w-full max-w-sm items-center space-x-1 px-5">
                        <Input className="border-none text-white border-transparent shadow-none focus-visible:ring-transparent" placeholder="Rechercher" />
                        <Icon name="magnifying-glass" className="text-white" />
                    </div>

                    <div className="py-5 flex flex-col w-full h-full bg-gray-200 max-w-sm items-center px-10">
                        {data.blogs.map((item: Blogs, index: number) => (
                            <div className="flex items-center shadow-none md:max-w-xl" key={index}>
                                <Image width={10} height={70} src={item.cover} alt={item.title} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <a href={`blog/${params.slug}`} className="block flex font-bold mb-2 group">
                                        <Icon name="avatar" className="text-primary" />
                                        <span className="text-sm text-gray-500 group-hover:text-primary">{item.user}</span>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 hover:text-primary">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-5 flex flex-col w-full h-full bg-gray-200 max-w-sm items-center px-10">
                        <h5 className="text-lg uppercase font-bold text-gray-950 md:text-xl">categories</h5>
                        <div className="flex flex-col space-y-1 mt-5 w-full">
                            {data.categories.map((value: string, index: number) => (
                                <Link href="#" key={index} className="block capitalize flex justify-between items-center p-3 group hover:bg-white">
                                    <span className="text-gray-700">{value}</span>
                                    <Icon name="arrow-right" className="hidden text-primary group-hover:block" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="py-5 flex flex-col w-full h-full bg-gray-200 max-w-sm items-center px-10">
                        <h5 className="text-lg uppercase font-bold text-gray-950 md:text-xl">Tags</h5>
                        <div className="flex flex-wrap gap-1 mt-5 w-full">
                            {data.tags.map((value: string, index: number) => (
                                <Link href="#" key={index} className="text-gray-700 capitalize py-1 px-3 bg-white hover:text-white hover:bg-primary">
                                    <span className="">{value}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}