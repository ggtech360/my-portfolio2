"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import { AnimatePresence, motion } from "framer-motion";

export default function page() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="h-[100vh] lg:overflow-hidden">
      <Navbar />
      <Wrapper>
        <div className="flex flex-col gap-3 items-center justify-center h-full">
          <AnimatePresence>
            {clicked && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: 40 }}
              >
                <h2
                  className={`text-3xl lg:text-5xl transition-all -translate-y-6 duration-500 ease-in font-bold text-center`}
                >
                  Why hire me?
                </h2>
                <div className="overflow-y-scroll h-[60vh] lg:mx-32">
                  <div className="lg:px-24 px-4 text-main space-y-2">
                    I'm a full-stack web developer, well-versed in the latest
                    technologies like ReactJS, NextJS, Tailwind CSS, Bootstrap,
                    Express, and NodeJS. I bring a diverse skill set to the
                    table, ensuring that the web solutions I deliver are
                    top-notch. Here's why bringing me onto your team makes
                    sense:
                    <p className="text-xl font-medium text-primary">
                      Up-to-date with Modern Web Technologies:
                    </p>
                    I've got the know-how in ReactJS, NextJS, Tailwind CSS,
                    Bootstrap, Express, and NodeJS. This means your web
                    applications will be crafted using the latest and most
                    efficient technologies.
                    <p className="text-xl font-medium text-primary">
                      Proven Track Record:
                    </p>
                    I've successfully designed, developed, and implemented
                    various high-quality web solutions, ranging from e-commerce
                    platforms to social media sites and business dashboards. I'm
                    all about turning your vision into a functional and engaging
                    online presence.
                    <p className="text-xl font-medium text-primary">
                      Effective Communication and Collaboration:
                    </p>
                    I shine in teamwork. Whether it's with clients, designers,
                    or fellow developers, I excel at gathering requirements,
                    offering technical insights, and ensuring projects run
                    smoothly.
                    <p className="text-xl font-medium text-primary">
                      Commitment to Quality and Best Practices:
                    </p>
                    I stick to industry standards when it comes to code quality,
                    performance, and security. Your web applications will be
                    robust, maintainable, and secure.
                    <p className="text-xl font-medium text-primary">
                      Passionate about Innovation and Learning:
                    </p>
                    I'm always on the lookout for the latest web development
                    trends and technologies. Staying ahead of the curve allows
                    me to deliver cutting-edge solutions.
                    <p>
                      By bringing me on board, you're getting a skilled and
                      experienced web developer who is genuinely passionate
                      about creating high-quality web solutions aligned with
                      your business goals. I'm confident that I can not only
                      meet but exceed your expectations, contributing
                      significantly to the success of your online presence.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            {!clicked && (
              <motion.h2
              initial={{opacity:1, y:0}}
              exit={{opacity:0, y:-20}}
              transition={{duration:0.3}}
                onClick={() => setClicked(!clicked)}
                className={`text-3xl lg:text-5xl border-4 hover:bg-primary hover:text-white border-primary p-4 rounded-3xl cursor-pointer text-primary"
        transition-all duration-500 ease-in font-bold text-center`}
              >
                Why hire me?
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </div>
  );
}
