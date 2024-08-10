import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Icon } from "./ui/icons";

const InputButton = () => {
    return (
        <form>
            <div className="relative mt-2 mx-3"> 
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <Input className="h-12 font-serif lg:h-16 w-4/5 md:w-full text-md bg-white rounded-l-full border-0 border-white py-1.5 pl-7 pr-20 text-gray-900 ring-0 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white font-light lg:text-xl sm:leading-6" placeholder="Entrer votre email ici et nous vous contacterons" />
                <div className="absolute inset-y-0 right-5 flex items-center md:-right-8  lg:-right-10">
                    <Button className="flex gap-x-3 h-full rounded-r-full border-0 bg-blue-500 py-0 pl-2 pr-7 text-gray-500 hover:bg-blue-700 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm">
                        <span className="text-white sm:text-sm">Allez-y</span>
                        <Icon name="arrow-right" className="animate-ping h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default InputButton;