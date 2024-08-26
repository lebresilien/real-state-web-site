"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  Navigation  from 'swiper';
import { Swiper as SwiperType } from 'swiper';
import { Icon } from './ui/icons';

const Blog = () => {

    const swiperRef = useRef<SwiperType>();

    return (
        <section className="bg-gray-50 w-full">
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
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                aria-label="Previous slide"
                                id="keen-slider-previous-desktop"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-5 rtl:rotate-180"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                                </svg>
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                aria-label="Next slide"
                                id="keen-slider-next-desktop"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                            >
                                <svg
                                className="size-5 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9 5l7 7-7 7"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {Array.from({ length: 15 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg pb-5 cursor-pointer">
                                        <div className="relative w-full">
                                            <img className="transition grayscale w-full ease-in hover:-translate-y-10 hover:scale-150 duration-1000" src="/images/card-top.jpg" alt="Sunset in the mountains" />
                                            <div className="absolute inset-0 flex items-end justify-end">
                                                <h2 className="bg-primary px-2 py-0.5 text-white text-lg font-bold">30 octobre 2024</h2>
                                            </div>
                                        </div>
                                        <div className="px-3 py-4 flex flex-col space-y-3">
                                            <div className="flex font-bold mb-2">
                                                <Icon name="avatar" className="text-primary" />
                                                <span className="uppercase text-gray-700">Tapondjou</span>
                                            </div>
                                            <p className="text-gray-900 uppercase">
                                                Lorem ipsum dolor sit amet, consectetur 
                                            </p>
                                        </div>
                                        <div className="flex space-x-2 px-3 text-gray-600 group hover:text-primary">
                                            <span className="uppercase inline-block">voir see</span>
                                            <Icon name="arrow-right" className="transition group-hover:translate-x-1 duration-500 delay-150" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous slide"
                        id="keen-slider-previous"
                        className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                        <svg
                        className="size-5 -rotate-180 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next slide"
                        id="keen-slider-next"
                        className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                    >
                        <svg
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Blog;