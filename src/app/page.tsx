"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from 'react';
import InputButton from "@/components/input-button";
import Feature from "@/components/features";
import About from "@/components/about";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { NavigationContext } from "@/context/navigationContext";
import { Advantage, Service, Testimony, Vision } from "../../types";
import axios from "axios";
import Slide from "@/components/caroussel";

interface Data {
  services: Service[]
  testimonies: Testimony[]
  advantages: Advantage[]
  visions: Vision[]
}
export default function Home() {

    const [data, setData] = useState<Data | null>(null);

    const [loading, setLoading] = useState(true);
    const {isNavOpen} = useContext(NavigationContext);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('/api/home');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log('errror', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
     
    }, [])
    
    useEffect(() => {
        AOS.init();
    }, []);

    if(loading) return (
      <div className="flex items-center justify-center h-screen">
          <span className="relative flex h-24 w-24">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-20 w-20 bg-blue-600"></span>
          </span>
       </div>
    )

  return (
    <div className={isNavOpen ? "h-screen overflow-hidden" : "h-screen"}>
        <Nav />
          <main className="flex min-h-screen flex-col items-center justify-between">
            
            <section className="relative font-serif h-screen w-full flex flex-col items-center justify-center text-center text-white">
              <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                  <video className="min-w-full min-h-full absolute object-cover"
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    autoPlay
                    muted
                    loop
                  ></video>
              </div>
              <div className="space-y-2 z-10">
                  <h1 className="font-light font-bold text-5xl tracking-tighter lg:text-9xl uppercase">like steroids</h1>
                  <h1 className="font-light font-bold text-5xl tracking-tighter lg:text-9xl uppercase">for business</h1>
                  <span className="block font-light text-lg lg:text-2xl max-w-4xl">
                    Growing a business is hard. We make it whole lot easier, more predictable,
                    less stressful, and more fun
                  </span>
                  <InputButton />
              </div>
            </section>
          
           <Feature services={data ? data.services : []} />
        
            <About advantages={data ? data.advantages : []} visions={data ? data.visions : []} />

            <Slide testimonies={data ? data.testimonies : []} />
       
          </main>
        <Footer />
    </div>
  );
}

