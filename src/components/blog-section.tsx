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

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Blog = () => {

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
        else if(windowSize.innerWidth > 640 && windowSize.innerWidth <= 1024) return 2
        else return 3
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
                            className="flex items-center justify-center"
                        >
                            {Array.from({ length: 15 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg pb-5">
                                        <div className="relative cursor-pointer group w-full">
                                            <Link href="#">
                                                <Image
                                                    className="grayscale transition ease-in group-hover:-translate-y-10 group-hover:scale-150 duration-1000"
                                                    src={card}
                                                    alt="Sunset in the mountains"
                                                    sizes="100vw"
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                    }}
                                                />
                                            </Link>
                                            <div className="absolute inset-0 flex items-end justify-end">
                                                <h2 className="text-center bg-primary px-2 py-1 text-white text-sm font-bold">30 octobre 2024</h2>
                                            </div>
                                        </div>
                
                                        <div className="px-3 py-4 flex flex-col space-y-3">
                                            <Link href={"#"} className="">
                                                <div className="flex font-bold mb-2">
                                                    <Icon name="avatar" className="text-primary hover:text-primary" />
                                                    <span className="uppercase text-sm text-gray-500 hover:text-primary">Tapondjou</span>
                                                </div>
                                            </Link>
                                            <Link href={"#"} className="block">
                                                <p className="text-gray-900 font-bold uppercase hover:text-primary">
                                                    Lorem ipsum dolor sit amet, consectetur 
                                                </p>
                                            </Link>
                                        </div>
                                        <Link href={"#"} className="block">
                                            <div className="flex space-x-2 px-3 text-gray-600 group hover:text-primary">
                                                <span className="inline-block text-sm">Voir plus</span>
                                                <Icon name="arrow-right" className="transition group-hover:translate-x-1 duration-500 delay-150" />
                                            </div>
                                        </Link>
                                    </div>
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