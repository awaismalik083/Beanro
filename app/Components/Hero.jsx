"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { signatureBrews, coldbrew, Frappuccinos } from "../Data/data.js";
import { FaArrowRight } from "react-icons/fa";
import Page from "../about/page.jsx";
import { FaStar } from "react-icons/fa";
const CoffeeModel = dynamic(() => import("./CoffeeModel"), { ssr: false });

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-30 md:mt-40 lg:mt-55 justify-center">
        <div className="max-w-2xl overflow-hidden">
          <motion.h1
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="font-boldonse text-3xl md:text-7xl leading-15 lg:text-5xl text-center max-w-xl md:max-w-3xl md:leading-25 lg:max-w-2xl lg:leading-20 text-primary"
          >
            FRESHLY BREWED
          </motion.h1>
          <motion.h1
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="font-boldonse text-3xl md:text-7xl leading-15 lg:text-5xl text-center max-w-xl md:max-w-3xl md:leading-25 lg:max-w-2xl lg:leading-20 text-primary"
          >
            MOMENTS START HERE
          </motion.h1>
        </div>
        <div className="relative lg:mt-10  m w-full flex justify-center items-center">
          <Image
            src={"/assets/coffee.png"}
            className="relative w-[500px] mt-30 md:[1200px] z-0"
            width={300}
            height={400}
            alt="coffeeSplash"
          />

          <div className="absolute top-1/2 left-1/2 mt-10 -translate-x-1/2 -translate-y-1/2 z-10">
            <CoffeeModel />
          </div>
        </div>
      </div>

      {/*signature brews */}
      <div className=" p-5 lg:p-10 mt-10 lg:mt-20">
        <div className=" bg-[#FCF7EE] group-[]: rounded-4xl w-full lg:p-10 p-5 ">
          <span className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-boldonse text-primary text-2xl lg:text-3xl">
              SIGNATURE BREWS
            </h1>
            <p className="text-primary mt-5 lg:mt-0 max-w-[200px]">
              A selection of favorites crafted to delight every coffee lover.
            </p>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mt-10">
            {signatureBrews.map((brew) => (
              <div
                key={brew.id}
                className="relative group flex flex-col lg:flex lg:h-[180vh] bg-[#F9EEDC] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#7D2C0F] w-full max-w-[600px] items-center lg:justify-center p-5 lg:p-10 rounded-4xl"
              >
                <Image
                  src={brew.image}
                  width={330}
                  height={500}
                  alt={brew.name}
                  className="group-hover:scale-105 w-[160px] h-auto lg:w-[300px] lg:h-[500px] transition-all duration-300 ease-in-out"
                />
                <h4 className="font-bayon text-primary group-hover:text-white text-lg lg:text-2xl flex items-center justify-center gap-2 absolute right-3 top-3 lg:right-5 lg:top-5">
                  4.9 <FaStar className="text-[#FF8342] text-md" />
                </h4>
                <p className="font-bayon group-hover:text-white duration-300 transition-colors text-primary text-xl lg:text-2xl text-center mt-4 lg:mt-0 static lg:absolute lg:bottom-32">
                  {brew.name.toUpperCase()}
                </p>
                <div className="flex w-full justify-between items-center mt-4 lg:mt-0 lg:contents">
                  <h1 className="font-bayon text-lg lg:text-xl text-primary group-hover:text-white duration-300 transition-colors font-primary static lg:absolute lg:left-10 lg:bottom-5">
                    {brew.price.startsWith("$")
                      ? brew.price
                      : `$${brew.price.replace("$", "")}`}
                  </h1>
                  <span className="font-bayon flex text-[#FF8342] text-base lg:text-xl static lg:absolute lg:right-10 lg:bottom-5">
                    GET THIS BREW
                    <FaArrowRight className="ml-2 mt-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Page />
    </>
  );
};

export default Hero;
