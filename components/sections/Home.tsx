import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"
import useMediaQuery from "@/hooks/useMediaQuery"

import Graphic from "../assets/Group 14.png"
import Model from "../assets/Rugby.png"
import { Button } from "../ui/button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)")

  const { theme } = useTheme()

  return (
    <section
      id="home"
      className="w-full h-full p-10 z-40 justify-center text-center md:text-left"
    >
      {/* IMAGE & HEADER */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto min-h-screen mt-28"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* HEADER / LEFT SIDE */}
        <div className="w-full p-2 mb-8">
          {/* HEADING LOGO & SLOGAN */}
          <motion.div
            className="h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* MAIN HEADING */}
            <div
              className={`flex bold text-4xl md:text-4xl lg:text-5xl p-2 bg-clip-text bg-repeat-x text-transparent bg-gradient-to-r 
                ${
                  theme !== "light"
                    ? " from-yellow-300 via-amber-500 to-amber-400"
                    : " from-blue-950 via-slate-500 to-blue-900"
                }`}
            >
              <div className="flex flex-wrap mx-auto md:mx-0">
                <p className="pt-1 pr-1 font-prompt font-semibold">SILAN</p>
                <p className="p-1 font-prompt font-semibold">INDUSTRIES</p>
                <p className="text-base mt-0 p-1 font-prompt">(Pty) Ltd</p>
              </div>
            </div>

            {/* INTRODUCTION TEXT */}
            <h2 className="bold text-2xl md:text-2xl lg:text-4xl font-prompt font-medium my-3 p-2">
              TOOLING DESIGN & SIMULATION
            </h2>

            {/* INTRODUCTION TEXT */}
            <p className="text-sm md:text-base my-3 p-2">
              Spacialists in the design of automotive assembly systems, robotic
              applications and special purpose tooling.
            </p>
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            className="flex p-2 content-center justify-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <Button
                variant="outline"
                className="bg-amber-300 hover:bg-slate-200 text-zinc-800 font-bold shadow-md"
              >
                LETS CONNECT
              </Button>
            </AnchorLink>
          </motion.div>

          {/* HEADING LOGO & SLOGAN */}
          <motion.div
            className="h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>
        </div>

        {/* IMAGE / RIGHT SIDE */}
        <div className="w-full p-4">
          <motion.div
            className="relative w-8/9 justify-center align-center mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              className="relative z-40"
              alt="home-pageGraphic"
              src={Model}
            />
            <Image
              className="absolute top-10 right-10 rotate-6 z-30"
              alt="home-pageGraphic"
              src={Graphic}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
