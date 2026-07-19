"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const MotionImage = motion.create(Image);

const person = [
  {
    name: "Daniel Kim",
    position: "Founder & Head Of Coffee",
    img: "/person1.png",
  },
  {
    name: "David Thompson",
    position: "Lead Barista",
    img: "/person2.png",
  },
  {
    name: "Ethan Carter",
    position: "Operations Manager",
    img: "/person3.png",
  },
];

const card = [
  {
    id: 1,
    h1: "Quality Without Compromise",
    p: " We carefully select our beans and refine every step of the process to ensure each cup delivers.",
  },
  {
    id: 2,
    h1: "Craft In Every Detail",
    p: " From slow brewing to creamy finishes, we focus on precision and care to create coffee that feels rich.",
  },
  {
    id: 3,
    h1: "All the Moments That Matter",
    p: " Beanro is more than coffee — it’s about creating space to pause, connect, and enjoy moments in your day.",
  },
];

const Page = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, // ↑ higher = snappier, less lag
    damping: 25,
    restDelta: 0.001,
  });

  // widen the perceptible range so it's noticeable earlier
  const scale = useTransform(smoothProgress, [0, 1], [1, 2.0]);
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center mt-20 lg:mt-40 gap-y-5 items-center flex-col"
      >
        <h1 className="text-[#FF8444] font-bayon text-2xl">ABOUT BEANRO</h1>
        <h2 className="lg:text-6xl text-4xl  lg:max-w-xl text-center font-bayon text-primary">
          THE STORY BEHIND EVERY CUP AT BEANRO
        </h2>
        <div
          ref={containerRef}
          className="relative mb-40   lg:max-w-[93vw] rounded-4xl mt-10 h-screen w-full overflow-hidden"
        >
          <MotionImage
            style={{ scale }}
            className="rounded-4xl object-cover will-change-transform"
            src="/aboutbanner.jpeg"
            fill
            alt="aboutbanner"
          />
        </div>

        <h3 className="text-[#FF8342] mb-20 text-2xl text-center font-bayon  max-w-xl">
          Beanro was built on a simple belief — coffee should feel personal.
          It’s not just about caffeine, it’s about the experience, the pause,
          and the moment you take for yourself in a busy day.
        </h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-10"
        >
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 gap-y-16 px-4 md:px-0">
            {card.map((item) => (
              <div
                key={item.id}
                className="bg-[#FCF7EE] relative h-full min-h-[280px] flex flex-col items-start justify-start gap-y-5 rounded-4xl p-8 md:p-10"
              >
                <div className="absolute -top-10 left-0 w-20 h-20 flex items-center justify-center">
                  <img
                    className="w-20 h-20 text-[#FF8342]"
                    src="/assets/badge.svg"
                    alt="badge"
                  />
                  <p className="text-white font-bayon text-3xl absolute">
                    {String(item.id).padStart(2, "0")}
                  </p>
                </div>
                <h1 className="font-bayon text-primary text-2xl mt-10">
                  {item.h1}
                </h1>
                <p className="text-primary text-md">{item.p}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mt-20 mb-20 "
        >
          <h1 className="text-4xl font-bayon max-w-sm text-center text-[#FF8342] ">
            Meet The People Behind Beanro
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:max-w-[93vw] max-w-[130vw]  mt-24 mb-20 "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            {person.map((p) => (
              <div
                key={p.name}
                className="relative rounded-[28px] p-3  overflow-hidden"
              >
                <img className="rounded-4xl" src={p.img} alt="images" />
                <h1 className="text-2xl font-bayon mt-10 text-primary ">
                  {p.name}
                </h1>
                <p className="text-[#AF4F28] font-semibold mt-2 ">
                  {p.position}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Page;
