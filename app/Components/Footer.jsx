"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const MotionImage = motion.create(Image);

const Footer = () => {
  return (
    <>
      {/* banners */}
      <div className=" hidden relative md:relative lg:flex flex-col items-center  mt-10 lg:mt-20 mb-20 justify-center">
        {/* Left drink image */}
        <MotionImage
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="/assets/PolarEspresso.png"
          width={200}
          height={300}
          alt=""
          className="hidden lg:block absolute w-34 left-70 rotate-5 top-1/2 -translate-y-1/2 z-10"
        />

        {/* Right drink image */}
        <MotionImage
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="/assets/caram.png"
          width={200}
          height={300}
          alt=""
          className="hidden lg:block absolute w-30 right-70 -rotate-5  top-1/2 -translate-y-1/2 z-10"
        />

        {/* Banner strips */}
        <div className="bg-[#7D2C0F] w-full max-w-[500px] -rotate-3 h-20 rounded-2xl text-center flex justify-center items-center z-0">
          <p className="font-bayon text-3xl sm:text-4xl lg:text-5xl text-white">
            MAKE YOUR COFFEE
          </p>
        </div>
        <div className="bg-[#AF4F28] w-full max-w-[350px] -rotate-3 h-20 rounded-2xl text-center flex justify-center items-center -mt-4 ml-10 z-0">
          <p className="font-bayon text-3xl sm:text-4xl lg:text-5xl text-white">
            MOMENT SPECIAL
          </p>
        </div>
      </div>
      <div className="flex mt-10 flex-col gap-y-15 lg:mt-20 items-center justify-center">
        <p className="text-primary max-w-md text-center text-sm   lg:text-md ">
          {" "}
          Every day deserves a cup of coffee - One that feels
          resfreshing,indulging and made with intention
        </p>
        <button className="group w-40 mt-[-50px] text-center relative  h-[60px] cursor-pointer  text-white font-bayon text-2xl">
          <div className="bg-[#FF8342] w-full h-full text-center flex absolute z-0 justify-center items-center rounded-4xl overflow-hidden">
            <div className="bg-[#7D2C0F] w-full h-full absolute z-10 rounded-4xl translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-20">Order Now</span>
          </div>
        </button>

        <Marquee
          className="w-full"
          autoFill
          loop="infinite"
          direction="right"
          speed="30"
        >
          <div className="w-full h-20 flex items-center justify-center gap-5 bg-[#FF8342] ">
            <h1 className="text-white text-4xl font-bayon">CHILL SMOOTH</h1>
            <img className="w-5" src="/assets/badge.svg" alt="badge" />
            <h1 className="text-white text-4xl font-bayon">SIP SLOW</h1>
            <img className="w-5" src="/assets/badge.svg" alt="badge" />
            <h1 className="text-white text-4xl font-bayon">CRAFTED COLD</h1>
            <img className="w-5" src="/assets/badge.svg" alt="badge" />
            <h1 className="text-white text-4xl font-bayon">BREW BOLD</h1>
            <img className="w-5" src="/assets/badge.svg" alt="badge" />
          </div>
        </Marquee>
      </div>
      <div className="bg-primary w-full px-6 md:px-12 py-10 md:py-16">
        {/* Top row: Logo + Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 md:mb-24">
          <div
            className="h-40 w-40 mt-14 bg-white"
            style={{
              maskImage: "url(/logoHeader.svg)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskImage: "url(/logoHeader.svg)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
            }}
          />

          <p className="font-bayon text-xl md:text-2xl text-white text-left md:text-right leading-snug">
            MAKE EVERY COFFEE MOMENT
            <br />
            FEEL INTENTIONAL
          </p>
        </div>

        {/* Bottom row: Links / Contact / Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <Link
              href="/about"
              className="font-bayon text-xl text-white hover:text-[#E88B4B] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/menu"
              className="font-bayon text-xl text-[#E88B4B] underline underline-offset-4 w-fit"
            >
              MENU
            </Link>
          
          </div>

          {/* Contact + Address */}
          <div className="flex flex-col items-center text-center gap-3">
            <h3 className="font-bayon text-2xl text-white mb-1">CONTACT</h3>
            <a
              href="mailto:hello@beanro.com"
              className="text-white/90 hover:text-[#E88B4B] transition-colors"
            >
              hello@beanro.com
            </a>
            <a
              href="tel:+880123456790"
              className="text-white/90 hover:text-[#E88B4B] transition-colors"
            >
              +880 1234 567 890
            </a>

            <h3 className="font-bayon text-2xl text-white mt-8 mb-1">
              BEANRO COFFEE
            </h3>
            <p className="text-white/90 leading-relaxed">
              1258 Melrose Ave Los Angeles,
              <br />
              CA 90046
              <br />
              United States
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <a
              href="#"
              className="font-bayon text-2xl text-white hover:text-[#E88B4B] transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="#"
              className="font-bayon text-2xl text-white hover:text-[#E88B4B] transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href="#"
              className="font-bayon text-2xl text-white hover:text-[#E88B4B] transition-colors"
            >
              TWITTER
            </a>
            <a
              href="#"
              className="font-bayon text-2xl text-white hover:text-[#E88B4B] transition-colors"
            >
              PINTEREST
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 md:mt-24 pt-6" />

        {/* Bottom bar: Copyright / Privacy / Back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/80 text-sm">
          <p>© 2026 Beanro. All rights reserved.</p>
          <a
            href="/privacy-policy"
            className="hover:text-[#E88B4B] transition-colors"
          >
            Privacy Policy
          </a>
          <a href="#top" className="hover:text-[#E88B4B] transition-colors">
            Back to top
          </a>
        </div>

        {/* Oversized cropped brand text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden mt-8 -mb-10 -md:mb-4 select-none pointer-events-none"
        >
          <p className="font-boldonse text-white  text-[10vw] md:text-[11vw] leading-none whitespace-nowrap ">
            BEANRO CAFE
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
