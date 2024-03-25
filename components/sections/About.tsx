import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SelectedPage } from "@/types/types"

import ServicesFour from "../assets/ServicesFour.jpeg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function About({ setSelectedPage }: Props) {
  return (
    <section
      id="about"
      className="z-40 mx-auto flex h-auto w-full  p-5 md:p-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className="mx-auto mt-10 h-auto w-full"
      >
        <h1 className="mb-16 font-prompt text-2xl font-bold md:text-3xl">
          About Us:
        </h1>

        <div className="grid grid-cols-1">
          {/* IMAGES */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-5">
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              ></motion.div>
            </div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="group flex transition duration-500 hover:scale-[0.99]">
                <Image
                  alt="tooling"
                  src={ServicesFour}
                  className="z-30 flex h-60 rounded-lg object-cover shadow-lg md:h-[21.5rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
