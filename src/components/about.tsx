import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="mt-12 md:mt-0" data-aos="fade-up-right">
                        <Image  
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            alt="About Us Image" 
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
                    <div className="max-w-2xl" data-aos="fade-up-left">
                        <h2 className="text-3xl text-center font-extrabold text-gray-900 uppercase sm:text-4xl">A propos</h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Le marché immobilier au Cameroun est un véritable labyrinthe semé d&apos;embûches, où chaque 
                            transaction peut devenir un piège et la confiance est rare. C&apos;est lors d&apos;une rencontre fortuite à 
                            Dubaï que Vakiss et Loïc, deux jeunes Camerounais, se lient d&apos;amitié. Introduit au monde de 
                            l&apos;immobilier par Loïc, Vakiss découvre les nombreux défis du marché. Constatant les problèmes 
                            récurrents et la complexité des transactions, ils décident de fonder <span className="font-bold">ETS Management </span> 
                            Immobilier. Leur mission: créer un environnement de confiance et de transparence, 
                            garantissant des transactions immobilières honnêtes et traçables au Cameroun.  
                        </p>
                        <div className="mt-8 group">
                            <Link href="#" className="text-blue-500 hover:text-blue-600 font-medium">Contactez nous
                                <span className="ml-2 group-hover:animate-pulse">&#8594;</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;