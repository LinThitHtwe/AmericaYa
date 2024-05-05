"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Halo {
  top: number;
  left: number;
  id: number;
}

export default function Home(): JSX.Element {
  const [halos, setHalos] = useState<Halo[]>([]);

  const handleButtonClick = (): void => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const top = Math.floor(Math.random() * (windowHeight - 100));
    const left = Math.floor(Math.random() * (windowWidth - 200));

    const id = Date.now();
    setHalos([...halos, { top, left, id }]);

    setTimeout(() => {
      setHalos((prev) => prev.filter((halo) => halo.id !== id));
    }, 3000);
  };

  return (
    <div className="h-screen grid place-content-center relative">
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{
          type: "spring",
        }}
        className="py-3 px-4 font-medium rounded-2xl bg-lavender-gray-200 text-xl md:text-3xl ease-in-out hover:bg-lavender-gray-100"
        onClick={handleButtonClick}
      >
        America Ya :D
      </motion.button>
      {halos.map((halo) => (
        <motion.div
          key={halo.id}
          initial={{ opacity: 0, x: -25, y: -15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="absolute  rounded-lg"
          style={{ top: `${halo.top}px`, left: `${halo.left}px` }}
        >
          <Image src={"/haloSingle.png"} width={80} height={80} alt="" />
        </motion.div>
      ))}
    </div>
  );
}
