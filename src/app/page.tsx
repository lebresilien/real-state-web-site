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

interface Data {
  services: Service[]
  testimonies: Testimony[]
  advantages: Advantage[]
  visions: Vision[]
}
export default function Home() {

    const [data, setData] = useState<Data>({
      services: [],
      testimonies: [],
      advantages: [],
      visions: [],
    });

    const [services, setServices] = useState(null);

    const [loading, setLoading] = useState(true);
    const {isNavOpen} = useContext(NavigationContext);

    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_URL}/api/init`)
        .then(res => {
          setServices(res.data.services);
          console.log('response', res.data.services);
          console.log('serivces', services);
          setLoading(false);
        })
      /* async function FetchData() {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/init`);
            setServices(res.data.services);
            console.log('cons', res.data.services);
            console.log('services', services);
        } catch (err) {
          console.log('erroooeoe');
        } finally {
          setLoading(false);
        }
      }
      FetchData();
       setTimeout(() => {
        FetchData();
      }, 3000);
      return () => clearInterval(3000) */
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

    if (!services) return <p>No profile data</p>

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
          
            <Feature services={services} />
            <About advantages={data?.advantages} visions={data?.visions} />

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Docs{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Find in-depth information about Next.js features and API.
                </p>
              </a>

              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Learn{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Learn about Next.js in an interactive course with&nbsp;quizzes!
                </p>
              </a>

              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Templates{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Explore starter templates for Next.js.
                </p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Deploy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
              </a>
            </div>
          </main>
        <Footer />
    </div>
  );
}
