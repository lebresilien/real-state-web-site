
"use client";
import { useEffect, useState } from 'react';
import { type Blogs } from '../../../types';
import BlogItem from '@/components/blog';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Blog() {

    const [data, setData] = useState<Blogs[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('/api/blog');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const res = await response.json();
            setData(res);
          } catch (error) {
            console.log('errror', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
       
    }, [])
  
    if(loading) return (
        <div className="flex items-center justify-center h-screen">
            <span className="relative flex h-24 w-24">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-20 w-20 bg-blue-600"></span>
            </span>
         </div>
    )

    return (
        <div className="flex w-full h-full flex-col items-center justify-center lg:min-h-screen mt-60">
            
            <section className="w-full text-white flex flex-col items-center justify-center background-content h-[500px] -mt-60">
                <h1 className="text-3xl text-primary sm:text-5xl leading-normal uppercase font-extrabold tracking-tight text-white">Blog</h1>
                <Breadcrumb className="mt-3 font-semibold">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white hover:text-primary" href="/">Accueil</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem className="text-white">BLOG</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>

            <div className="w-full my-24 flex justify-center">
                <div className="grid grid-cols-1 space-y-5 sm:space-y-0 sm:space-x-3 sm:grid-cols-2 md:grid-cols-3">
                    {data?.map((item, index) => (
                        <BlogItem
                            key={index}
                            title={item.title}
                            slug={item.slug}
                            user={item.user}
                            createdAt={item.createdAt}
                            cover={item.cover}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}