import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent } from "@/components/ui/card"
  import Autoplay from "embla-carousel-autoplay"

const Slide = () => {
    return (
        <section className="container my-12 shadow-2xl">
            <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
                <Carousel
                    plugins={[
                        Autoplay({
                          delay: 2000,
                        }),
                    ]}
                    className="w-full max-w-sm"
                    >
                        <CarouselContent>
                            {Array.from({ length: 15 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}

export default Slide;