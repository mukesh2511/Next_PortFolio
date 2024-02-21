"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const text = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* //text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <motion.div>
            {text.split("").map((letter, ind) => (
              <motion.span
                key={ind}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: ind * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </motion.div>
        </div>
        {/*  form container */}
        <div className="h-1/2 lg:h-full lg:w-1/2"></div>
      </div>
    </motion.div>
  );
};

export default Contact;
