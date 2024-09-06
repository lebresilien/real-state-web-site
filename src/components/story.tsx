import { Story } from "../../types";

const History = ({ stories }: { stories: Story[] }) => {
    return (
        <div className="flex flex-col space-y-5">

            <h3 className="text-lg font-semibold text-gray-900">
                Le marché immobilier au Cameroun est un véritable labyrinthe semé d&apos;embûches, où chaque 
                transaction peut devenir un piège et la confiance est rare. Cette complexité du marché est ce 
                qui a inspiré la création d&apos;ETS Management Immobilier, une histoire de persévérance, de vision 
                et de passion.
            </h3>
            
            <ol className="relative border-s border-gray-200">
                {stories.map((el, index) => (                  
                    <li className="mb-10 ms-4" key={index}>
                        <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">{el.period}</time>
                        <h3 className="text-lg font-semibold text-primary">{el.title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">{el.description}</p>
                    </li>
                ))}             
            </ol>
        </div>
    )
}

export default History;