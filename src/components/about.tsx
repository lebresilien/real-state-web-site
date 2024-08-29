import Image from "next/image";
import Link from "next/link";
import ListItem from "./list-item";
import { Advantage, Vision } from "../../types";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Icon } from "./ui/icons";

const About = ({ advantages, visions }: {advantages: Advantage[], visions: Vision[]}) => {
    return (
        <section className="bg-white overflow-hidden mx-5 rounded-lg">
            <div className="container py-10 px-3 mx-0 lg:py-16 lg:px-8 lg:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="mt-12 md:mt-0 order-last md:order-first" data-aos="fade-up-right">
                        <Image  
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            alt="A propos de Ets Management Immo" 
                            className="object-cover rounded-lg shadow-md"
                            sizes="100vw"
                            width={50}
                            height={50}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center max-w-2xl order-first md:order-last" data-aos="fade-up-left">
                        <h2 className="text-3xl text-center font-extrabold text-gray-900 uppercase sm:text-4xl">A propos</h2>
                        <p className="mt-4 text-gray-600 text-md lg:text-lg">
                            Le marché immobilier au Cameroun est un véritable labyrinthe semé d&apos;embûches, où chaque 
                            transaction peut devenir un piège et la confiance est rare. C&apos;est lors d&apos;une rencontre fortuite à 
                            Dubaï que Vakiss et Loïc, deux jeunes Camerounais, se lient d&apos;amitié. Introduit au monde de 
                            l&apos;immobilier par Loïc, Vakiss découvre les nombreux défis du marché. Constatant les problèmes 
                            récurrents et la complexité des transactions, ils décident de fonder <span className="font-bold">ETS Management </span> 
                            Immobilier. Leur mission: créer un environnement de confiance et de transparence, 
                            garantissant des transactions immobilières honnêtes et traçables au Cameroun.  
                        </p>
                        <div className="mt-8">
                            <Button className="inline-flex relative gap-x-2 h-10 border-0 bg-blue-500 overflow-hidden transition-all hover:bg-blue-500 group focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm lg:h-16">
                                <span className="w-0 h-0 rounded bg-blue-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                <span className="text-white sm:text-sm transition-colors duration-300 ease-in-out group-hover:text-white z-10">Contactez nous</span>
                                <Icon name="arrow-right" className="animate-ping h-3 w-3 text-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto py-16 px-4 bg-slate-50 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-0" data-aos="zoom-in-up">
                    <div className="flex flex-col items-center">
                        <h5 className="text-xl mb-3 text-center font-extrabold text-gray-900 uppercase sm:text-2xl">notre vision</h5>
                        <ul className="space-y-2">
                            {visions.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: index / 10,
                                    }}
                                    key={index}
                                >
                                    <ListItem text={item.name} />
                                </motion.div>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <h5 className="text-xl mb-3 text-center font-extrabold text-gray-900 uppercase sm:text-2xl">ce qui nous différencie </h5>
                        <ul className="space-y-2">
                            {advantages.map((item, index) => (
                                <motion.div
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 whileHover={{ scale: 1.1 }}
                                 transition={{
                                     duration: 0.25,
                                     delay: index / 10,
                                 }}
                                 key={index}
                                >
                                    <ListItem text={item.name} />
                                </motion.div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;