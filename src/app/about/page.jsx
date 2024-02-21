"use client";
import React, { useRef } from "react";
import { easeInOut, motion, useInView, useScroll } from "framer-motion";
import Brain from "@/Components/Brain";

const About = () => {
  const containerRef = useRef();
  const SkillRef = useRef();

  const isSkillInView = useInView(
    SkillRef,
    { once: true },
    { margin: "-100px" }
  );
  const ExperienceRef = useRef();
  const isExprienceInView = useInView(
    ExperienceRef,
    { once: true },
    { margin: "-100px" }
  );

  const { scrollYProgress } = useScroll({ container: containerRef });
  console.log(scrollYProgress);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography  container*/}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography title  */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* Biography Desc */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum
              nemo, voluptate aut voluptas totam dolorem tempora qui provident
              quo alias non quibusdam asperiores facilis.
            </p>
            {/* Biography Quote */}

            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab.
            </span>
            {/* Biography Sign svg */}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37 64C37 61.3533 37.9513 59.8926 39.0555 57.5C40.2693 54.8703 41.2971 50.1286 43 48C45.5345 44.8319 46 36.6297 46 32.5C46 26.618 47.4446 15.8057 43.7778 11.2222C42.229 9.28624 42 1.52073 42 4C42 12.2262 42.0642 18.9968 45.5 26.5556C47.1287 30.1388 49.04 33.0144 51 36.4444C52.9292 39.8206 57.6495 36.8039 58 34C58.2488 32.0094 60.6891 30.8817 61.0555 28.5C61.4112 26.1882 62 24.3909 62 22C62 17.8087 63 14.6669 63 10.5C63 3.34408 62 24.7885 62 31.9444C62 35.7402 61.7726 42.7157 64.2222 45.7778C66.8143 49.0179 71.4713 61.6511 77.4444 59.9444C80.2815 59.1339 79 50.4662 79 48C79 44.5741 79 34.2963 79 37.7222C79 44.109 77.9748 47.98 80 54.0556C80.7522 56.3122 83.2187 59.1769 85.5555 59.7778C89.6493 60.8304 89.8258 58.8717 90.7778 55.7778C92.0653 51.5934 92 47.3531 92 43C92 33.7063 91 44.7339 91 48.4444C91 50.9569 92.255 56.6854 94.5555 58C95.7294 58.6708 97.6494 61 99 61C100.801 61 101.895 53.4007 102 52C102.446 46.0522 104 40.8087 104 34.6667C104 30.1111 104 25.5556 104 21C104 15.5556 104 10.1111 104 4.66666C104 1.94114 103 12.1515 103 13.7222C103 23.3148 103 32.9074 103 42.5C103 47.618 106 52.0836 106 57C106 65.588 106 51.216 106 48.5556C106 43.7528 104.673 38.1208 111.444 40.0556C114.993 41.0694 115 49.4784 115 52.5C115 54.2538 115.45 56.8639 113 57C110.877 57.1179 110.559 55.2799 110.222 53.4444C110.208 53.3694 109.845 49.4444 110 49.4444C111.693 49.4444 117.841 62.376 120.5 64.4444C124.697 67.7091 130 65.1774 130 60C130 55.3069 132 50.9275 132 46C132 44.2185 127.175 35.6384 126.056 39.5556C124.428 45.2529 126.335 61 134 61C139.04 61 143.634 59.5825 144 53C144.242 48.6383 146 45.0059 146 40.5C146 35.5281 143 37.0278 143 41.5C143 43.5355 142.524 45.1706 144.222 46.4444C145.31 47.2606 149.134 49.9049 149.778 51C151.625 54.1401 155.99 56.9875 158.222 59.7778C161.101 63.376 158.041 66 154.444 66C151.405 66 145.571 65.1935 144 62.4444C143.304 61.2269 134.445 57 140 57C146.286 57 149.68 56.3247 155.556 54.4444C159.267 53.2568 165.626 52.0588 166.944 47.4444C170.504 34.9843 172.598 18.3422 168.944 5.55555C168.631 4.45769 167.244 0.403308 166.778 2.44444C165.369 8.60662 166 15.2131 166 21.5C166 28.3147 167.655 34.4383 168 41C168.196 44.7315 169.835 47.6501 170 51.7778C170.068 53.4737 172 54.5137 172 56.5C172 58.549 171.743 59.9288 173 61.5C175.23 64.2869 174 71.0783 174 74.5C174 75.6874 174.654 78.9027 173 79C168.513 79.264 163.937 79 159.444 79C135.434 79 111.339 78 87.2222 78C66.8154 78 46.6657 77.4518 26.3333 77C18.9389 76.8357 11.659 74.6042 4.77777 72.2222C1.81188 71.1956 1.31603 69 5 69C13.3869 69 21.7817 68.8844 30.1667 69.0555C42.4052 69.3053 54.3893 71 66.6667 71C74.1852 71 81.7037 71 89.2222 71C106.802 71 124.309 69 141.778 69C148.313 69 154.519 67.9885 160.944 67C167.21 66.0361 174.151 65.84 180.278 64.3889C184.404 63.4116 188.445 61.7435 192.667 61.2222C195.267 60.9012 199.364 61.8456 201.556 60C204.477 57.5402 208.227 57 212 57"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: easeInOut }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skills Container*/}
          <div className="flex flex-col gap-12 justify-center" ref={SkillRef}>
            {/* Skills title  */}
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isSkillInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>
            {/* Skills list  */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillInView ? { x: "0" } : {}}
              // transition={{ delay: 0.2 }}
            >
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                Mongoose
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="bg-black text-white p-2 rounded text-sm cursor-pointer hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
            </motion.div>
            {/* svg scroll */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: easeInOut }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={ExperienceRef}
          >
            {/* Experience title  */}
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isExprienceInView ? { x: "0px" } : {}}
              transition={{ delay: 0.2 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE list  */}
            <motion.div
              className=""
              initial={{ x: "-300px" }}
              animate={isExprienceInView ? { x: "0px" } : {}}
            >
              {/* EXPERIENCE list items */}
              <div className="flex justify-between h-48">
                {/* left  */}
                <div className="w-1/3">
                  {/* jOB TITLE */}
                  <div className="bg-white p-3 font-semibold  rounded-tl-lg rounded-b-lg ">
                    Software Developer Intern
                  </div>
                  {/* Job Description  */}
                  <div className="p-3 text-sm italic">
                    My current employement. Way better than the position before
                  </div>
                  {/* Job Date  */}
                  <div className="p-3 font-semibold text-red-400 text-sm ">
                    2024 - Present
                  </div>
                  {/* Job Company  */}
                  <div className="p-1 w-fit bg-white rounded text-sm font-semibold">
                    IRIQUE HI-TECH LLP
                  </div>
                </div>
                {/* center  */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1  h-full bg-gray-600 relative rounded">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-white  ring-red-500 -left-2 "></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE list items */}
              <div className="flex justify-between h-48">
                {/* left  */}
                <div className="w-1/3"></div>
                {/* center  */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1  h-full bg-gray-600 relative rounded">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-white  ring-red-500 -left-2 "></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-1/3">
                  {/* jOB TITLE */}
                  <div className="bg-white p-3 font-semibold  rounded-tl-lg rounded-b-lg ">
                    Software Developer Intern
                  </div>
                  {/* Job Description  */}
                  <div className="p-3 text-sm italic">
                    My current employement. Way better than the position before
                  </div>
                  {/* Job Date  */}
                  <div className="p-3 font-semibold text-red-400 text-sm ">
                    2024 - Present
                  </div>
                  {/* Job Company  */}
                  <div className="p-1 w-fit bg-white rounded text-sm font-semibold">
                    IRIQUE HI-TECH LLP
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
