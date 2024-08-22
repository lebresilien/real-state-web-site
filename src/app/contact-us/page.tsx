import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="flex h-full flex-col items-center lg:min-h-screen mt-60">
           <div className="max-w-screen-lg mx-auto p-5">
                <div className="grid grid-cols-1 md:grid-cols-12 border">
                    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                        <p className="mt-4 text-sm leading-7 font-regular uppercase">
                            Contact
                        </p>
                        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                            Get In <span className="text-indigo-600">Touch</span>
                        </h3>
                        <p className="mt-4 leading-7 text-gray-200">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s.
                        </p>

                        <div className="flex items-center mt-5">
                            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536"
                                xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 489.536 489.536">
                                <g>
                                    <g>
                                        <path
                                            d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z">
                                        </path>
                                        <rect width="136.5" x="177.054" y="379.1" height="20.8"></rect>
                                        <path
                                            d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                        </div>

                        <div className="flex items-center mt-5">
                            
                                <span className="text-sm">+93 749 99 65 50</span>
                        </div>

                        <div className="flex items-center mt-5">
                            <span className="text-sm">24/7</span>
                        </div>
                        
                    </div>
                    <form className="md:col-span-8 p-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-first-name">
                                    Noms et Prénoms
                                </Label>
                                <Input
                                    className="appearance-none block w-full h-14 bg-gray-200 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    placeholder="Jhon Doe" 
                                />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-last-name">
                                    Sujet
                                </Label>
                                <Input
                                    className="appearance-none block w-full h-14 bg-gray-200 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    placeholder="xxxxxxxxx"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Email Address
                                </Label>
                                <Input
                                    className="appearance-none block w-full h-14 bg-gray-200 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                    type="email" 
                                    placeholder="********@*****.**" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password">
                                    Your Message
                                </Label>
                                <Textarea 
                                    rows={10}
                                    className="appearance-none block w-full h-14 bg-gray-200 text-gray-700 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-between w-full px-3">
                                <Button
                                    className="shadow inline-flex relative gap-x-2 h-10 border-0 bg-blue-500 overflow-hidden transition-all hover:bg-blue-500 group focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm lg:h-16"
                                    type="submit"
                                >
                                    
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}