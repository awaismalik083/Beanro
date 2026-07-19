"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className="bg-[#FCF7EE] top-0  fixed z-50   justify-between  md:flex w-full hidden lg:flex  h-24 px-10 items-center ">
        <ul className="text-primary text-md font-semibold gap-10 flex items-start justify-start list-none">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
        </ul>

        <div className="flex items-center hover:scale-105 duration-300 transition-all ease-out cursor-pointer justify-center">
          <Link href="/">
            <Image
              src={"/logoHeader.svg"}
              width={170}
              height={170}
              className="rounded-2xl"
              alt="logo"
            />
          </Link>
        </div>

        <button className="group w-40 mt-[-50px] text-center relative  h-[60px] cursor-pointer  text-white font-bayon text-2xl">
          <div className="bg-[#FF8342] w-full h-full text-center flex absolute z-0 justify-center items-center rounded-4xl overflow-hidden">
            <div className="bg-[#7D2C0F] w-full h-full absolute z-10 rounded-4xl translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-20">Order Now</span>
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div className="bg-[#FCF7EE] w-full p-6 md:hidden lg:hidden relative z-50">
        <div className="flex justify-between items-center">
          <Image
            src={"/logoHeader.svg"}
            width={140}
            height={140}
            className="rounded-2xl"
            alt="logo"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-primary cursor-pointer"
          >
            {isOpen ? (
              <RxCross2 className="w-8 h-8" />
            ) : (
              <RxHamburgerMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-5 bg-[#FCF7EE]"
            >
              <ul className="flex flex-col items-center gap-3 py-8 text-primary font-semibold text-xl list-none">
                <li className="cursor-pointer">
                  <Link href="/menu" onClick={() => setIsOpen(false)}>
                    Menu
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                </li>
              </ul>

              <div className="flex justify-center mt-[-20px] pb-8">
                <button className="group w-40 text-center relative h-[60px] cursor-pointer  text-white font-bayon text-2xl">
                  <div className="bg-[#FF8342] w-full h-full text-center flex absolute z-0 justify-center items-center rounded-4xl overflow-hidden">
                    <div className="bg-[#7D2C0F] w-full h-full absolute z-10 rounded-4xl translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-20">Order Now</span>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
