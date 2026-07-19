"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { signatureBrews, coldbrew, Frappuccinos } from "../Data/data.js";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Footer from "../Components/Footer.jsx";

const MotionImage = motion.create(Image);

const page = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden  h-95 mt-5 md:mt-15 lg:mt-20 lg:h-86">
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="flex items-center justify-center flex-col mt-15 md:mt-20 lg:mt-30"
        >
          <h1 className="text-[#FF8342] font-bayon  text-3xl">Menu</h1>
          <p className="text-center max-w-xl leading-15 lg:leading-20 mt-10 text-[#7D2C0F] font-boldonse text-4xl lg:text-5xl flex justify-center">
            EXPLORE THE TASTE OF BEANRO
          </p>
        </motion.div>
      </div>
      {/*signature brews */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" p-5 lg:p-10 mt-10 lg:mt-20"
      >
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
      </motion.div>

      {/*cold brews */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" p-5 lg:p-10 mt-10 lg:mt-20"
      >
        <div className=" bg-[#FCF7EE] group-[]: rounded-4xl w-full lg:p-10 p-5 ">
          <span className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-boldonse text-primary text-2xl lg:text-3xl">
              Cold Brews
            </h1>
            <p className="text-primary mt-5 lg:mt-0 max-w-[200px]">
              Discover our most popular and beloved coffee creations.
            </p>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mt-10">
            {coldbrew.map((brew) => (
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
      </motion.div>

      {/*Frappuccinos
       */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" p-5 lg:p-10 mt-10 lg:mt-20"
      >
        <div className=" bg-[#FCF7EE] group-[]: rounded-4xl w-full lg:p-10 p-5 ">
          <span className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-boldonse text-primary text-2xl lg:text-3xl">
              Frappuccinos
            </h1>
            <p className="text-primary mt-5 lg:mt-0 max-w-[200px]">
              Indulge in our curated selection of delightful, blended beverages.
            </p>
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mt-10">
            {Frappuccinos.map((brew) => (
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
      </motion.div>

      <Footer />
    </>
  );
};

export default page;
