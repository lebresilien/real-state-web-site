"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

const  Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const displayMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div>
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <section className="flex">
        <div className="flex">
          Phone contact
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
    <div className="flex min-h-dvh flex-col text-white items-center justify-between p-24 bg-black">
        <p>bonjour</p>
        <p>bonjour</p>
        <p>bonjour</p>
      </div>
    </div>
  );
}

export default Nav;
