"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cross1Icon, EyeOpenIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { motion } from "framer-motion";
import { Icon } from "./ui/icons";

const links = [
  {
    title: 'Services',
    href: '#'
  },
  {
    title: 'Propriétés',
    href: '#',
  },
  {
    title: 'Consultations',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  }
];
const  Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const displayMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-400 py-8 px-5">
        <section className="flex">
          <div className="flex gap-x-3 items-center cursor-pointer group">
            <Icon name="file-phone-outline" className="cursor-pointer h-8 w-8 group-hover:animate-bounce transition delay-150 duration-300 ease-in-out" />
            <span className="hidden lg:flex">678-66-08-00</span>
          </div>
        </section>
        <Link href="/">
          <Image 
              src="https://designbygio.it/images/logo.png" 
              alt="Real State Logo" 
              width={50}
              height={50}
          />
        </Link>
        <nav>
          <section className="flex">
            {isNavOpen ? 
              <Cross1Icon className="cursor-pointer h-10 w-10 hover:text-gray-500" onClick={displayMenu} />:
              <HamburgerMenuIcon className="transition ease-in-out cursor-pointer h-10 w-10 hover:text-gray-500" onClick={displayMenu} />
            }
          </section>
        </nav>
      </div>

      {isNavOpen && 
        ((
          <div className="flex min-h-screen flex-col text-white items-center justify-center py-24 bg-black gap-y-10 top-0 lg:static ">
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
                <Link href={el.href} key={i}>
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
