"use client";
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Swiper as SwiperType } from 'swiper';
import { Icon } from './ui/icons';
import Image from 'next/image';
import card from "../../public/images/card-top.jpg"
import Link from 'next/link';
import { Button } from './ui/button';
import { Blogs } from '../../types';
import BlogItem from './blog';

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Blog = ({ blogs }: { blogs: Blogs[] }) => {

    const swiperRef = useRef<SwiperType>();
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      const sizeSwipper = (): number => {
        if(windowSize.innerWidth <= 640) return 1
        //else if(windowSize.innerWidth > 640 && windowSize.innerWidth <= 1024) return 2
        else return 2
      }

    return (
        <section className="bg-gray-50 w-full mt-24">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                           Blogs recents
                        </h2>

                        <p className="mt-4 text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat
                            harum porro optio fugit a culpa sunt id!
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <Button
                                variant="outline"
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="rounded-full border border-primary p-3 h-12 w-12 text-primary transition hover:bg-primary hover:text-white"
                            >
                               <Icon name="arrow-left" />
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => swiperRef.current?.slideNext()}
                                className="rounded-full border border-primary p-3 text-primary h-12 w-12 transition hover:bg-primary hover:text-white"
                            >
                               <Icon name="arrow-right" />
                            </Button>
                        </div>
                    </div>

                    <div className="ml-5 lg:col-span-2 sm:mx-0">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={sizeSwipper()}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className=""
                        >
                            {blogs.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <BlogItem
                                        key={index}
                                        title={item.title}
                                        slug={item.slug}
                                        user={item.user}
                                        createdAt={item.createdAt}
                                        cover={item.cover}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <Button
                        variant="outline"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="rounded-full border border-primary p-4 h-12 w-12 text-primary transition hover:bg-primary hover:text-white"
                    >
                        <Icon name="arrow-left" />
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="rounded-full border border-primary p-4 h-12 w-12 text-primary transition hover:bg-primary hover:text-white"
                    >
                        <Icon name="arrow-right" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Blog;