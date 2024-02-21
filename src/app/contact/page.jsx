"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,

        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          setSuccess(false);
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
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
          </div>
        </div>
        {/*  form container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Mukesh Mourya</span>
          <textarea
            name="user_message"
            rows="4"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            id=""
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>Regards</span>
          <button className="p-4 bg-violet-200 rounded font-semibold text-gray-600">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Message sent Successfully❤️❤️
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong😔😔
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
