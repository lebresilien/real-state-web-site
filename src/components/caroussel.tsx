import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import AutoScroll from 'embla-carousel-auto-scroll';
import { Testimony } from "../../types";
import Image from "next/image";

const Slide = ({ testimonies }: { testimonies: Testimony[] }) => {
    return (
        <section className="w-full">

            <div className="mx-auto flex flex-col justify-center space-y-16 px-4 sm:px-6 lg:px-8 lg:space-y-24">
            
                {/* <h2 className="font-bold text-center text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Témoignages</h2> */}

                <Carousel
                    opts={{
                        loop: true
                    }}
                    plugins={[
                        AutoScroll({
                            playOnInit: true,
                            stopOnMouseEnter: false,
                            stopOnInteraction: false,
                        }),
                    ]}
                    className="w-full min-w-sm"
                >
                        <CarouselContent>
                            {testimonies?.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="hover:border-primary">
                                            <CardContent className="flex aspect-square items-center justify-center p-3 lg:p-6">
                                                <section className="bg-white">
                                                    <div className="max-w-screen-xl p-2 mx-auto text-center lg:p-8">
                                                        <figure className="max-w-screen-md mx-auto">
                                                            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                                            </svg> 
                                                            <blockquote>
                                                                <p className="text-lg font-medium text-gray-900 lg:text-2xl max-h-[250px] overflow-hidden">{item.citation}</p>
                                                            </blockquote>
                                                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                                                <Image 
                                                                    className="w-6 h-6 rounded-full" 
                                                                    width={20}
                                                                    height={20}
                                                                    src={item.picture} 
                                                                    alt={item.fullName} 
                                                                />
                                                                <div className="flex items-center">
                                                                    <div className="font-medium text-gray-900">{item.fullName}</div>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </section>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default Slide;