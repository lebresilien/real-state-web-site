"use client";
import { useState, useEffect, useContext } from "react";
import { NavigationContext } from "@/context/navigationContext";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from "next/image";
import Nav from "@/components/nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from "../ui/icons";
import InputButton from "../input-button";

export default function Template({
    children,
}:Readonly<{
    children: React.ReactNode,
}>) {

    const [isScroll, setIsScroll] = useState(false);
    const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);

    const handleScroll = () =>  {
        if(window.scrollY >= 20) setIsScroll(true);
        else setIsScroll(false);
    }

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={isNavOpen ? "h-screen overflow-hidden" : "h-screen"}>
            <main className="flex flex-col items-center justify-between" onScroll={handleScroll}>
                <Nav isScroll={isScroll} />
                {children}
                <Footer />
                <div className="flex fixed bottom-20 right-3 hover:-translate-y-2 duration-300 z-50">
                    <Link href="https://api.whatsapp.com/send?phone=971588417693" target="_blank">
                        <Image 
                            src="/images/whatsapp.svg" 
                            alt="Watsapp logo"
                            height={60}
                            width={60}
                        />
                    </Link>
                </div>
                <div onClick={scrollToTop} data-aos="fade-down" data-aos-anchor-placement="bottom-center" className="flex h-12 w-12 p-2 cursor-pointer bg-primary rounded-full fixed bottom-2 right-3 justify-center items-center hover:bg-secondary block">
                    <Icon name="arrow-up" className="text-white"/>
                </div>
            </main>
        </div>
    )
}
