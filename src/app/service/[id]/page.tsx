
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default async function Page({ params }: { params: { id: number } }) {

    let res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/services/${params.id}`, { next: { revalidate: 10 } });
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
                        <BreadcrumbItem className="text-white uppercase">{params.id}</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="container h-full my-24 flex flex-col md:flex-row md:space-x-3">
                
            <div className="w-full p-6 space-y-6 flex flex-col md:w-3/4 md:p-10"></div>

            <div className="w-full py-6 space-y-6 flex flex-col md:py-10 md:w-1/4">
            </div>

            </div>

        </div>
    )
}