import Link from "next/link";
import { Service } from "../../types";
import { Button } from "./ui/button";
import { Icon } from "./ui/icons";
import { motion } from "framer-motion";

const readButtonVariants = {
    hover: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
};
const Feature = ({ services }: { services: Service[] }) => {
    return (
        <section className="w-full mx-auto px-4 space-y-6 bg-slate-50 py-8 my-12 lg:my-24 md:py-12 lg:py-20">

            <div data-aos="fade-down">

                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Nos services</h2>

                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Chez ETS Management Immobilier (EMI), nous mettons à votre disposition une gamme complète de services pour répondre à toutes vos 
                        exigences immobilières au Cameroun.
                    </p>

                </div>

                <div className="mx-auto grid gap-4 mt-5 lg:mt-10 grid-cols-1 md:max-w-[64rem] md:grid-cols-2">
                    {services.map((service, index) => (
                            <motion.a
                                initial="initial" 
                                whileHover="hover"
                                href={`service/${service.id}`}
                                key={index}
                                className="relative block overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-blue-500 p-2"
                            >
                                <div className="flex flex-col justify-between items-center rounded-md p-6">
                                    <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                        <path
                                            d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                        </path>
                                    </svg>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">{service.name}</h3>
                                        <p className="text-sm text-muted-foreground">{service.description}</p>
                                        <motion.div 
                                            className="flex justify-end"
                                            variants={readButtonVariants}
                                            transition={{
                                                duration: .5
                                            }}
                                        >
                                            <Button className="inline-flex relative gap-x-2 h-4 border-0 bg-black overflow-hidden transition-all hover:bg-gray-500 group focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm lg:h-6">
                                                <span className="w-0 h-0 rounded bg-gray-700 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">Savoir plus</span>
                                                <Icon name="arrow-right" className="animate-ping h-3 w-3 text-white" />
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.a>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Feature;