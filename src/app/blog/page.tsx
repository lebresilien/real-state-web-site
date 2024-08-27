
"use client";
import { useEffect, useState } from 'react';
import { type Blog } from '../../../types';
import BlogItem from '@/components/blog';

export default function Blog() {

    const [data, setData] = useState<Blog[]>([]);
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
            console.log('ye', res)
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
    )
}