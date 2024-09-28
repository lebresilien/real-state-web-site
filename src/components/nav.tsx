"use client";
import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Icon } from "./ui/icons";
import { MenuToggle } from "./menu-toggle";
import useMenuAnimation from "@/hooks/use-animate";
import { NavigationContext } from "@/context/navigationContext";

const links = [
 {
    title: 'Accueil',
    href: '/'
  }, 
  {
    title: 'A propos',
    href: '/about',
  },
  {
    title: 'Consultations',
    href: '/consulting',
  },
  {
    title: 'Contact',
    href: '/contact-us',
  },
  {
    title: 'Blog',
    href: '/blog',
  }
];


const  Nav = ({isScroll}: {isScroll: boolean}) => {

  const { isNavOpen, setIsNavOpen } = useContext(NavigationContext);
  const scope = useMenuAnimation(isNavOpen)

  return (
    <>
      <div 
        data-aos={isScroll ? "fade-down" : ""}
        className={isScroll ? "fixed bg-gray-800 w-full z-50 flex items-center justify-between py-8 px-5": 
                "fixed copy w-full z-50 flex items-center justify-between py-8 px-5"
        }
      >
        <section className="flex text-white">
          <div className="flex gap-x-3 items-center cursor-pointer group">
            <Icon name="phone-outline" className="cursor-pointer h-8 w-8 group-hover:animate-bounce transition delay-150 duration-300 ease-in-out" />
            <span className="hidden lg:flex">+237 691313486</span>
          </div>
        </section>
        <Link href="/">
          <span className="text-primary font-bold font-serif text-2xl">E.M.I</span>
        </Link>
        <div ref={scope}>
          <MenuToggle toggle={() => setIsNavOpen(!isNavOpen)} />
        </div>
      </div>

      {isNavOpen && 
        ((
          <div className="flex w-screen z-40 min-h-screen flex-col text-white items-center justify-center py-24 bg-black gap-y-10 top-0">
            {links.map((el, i) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                <Link href={el.href} key={i} onClick={() => setIsNavOpen(!isNavOpen)}>
                  <span className="font-bold text-xl lg:text-7xl uppercase">{el.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>  
        ))}
    </>
  );
}

export default Nav;
