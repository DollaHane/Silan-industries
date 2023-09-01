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
      className="z-40 h-full w-full justify-center p-10 text-center md:text-left"
    >
      {/* IMAGE & HEADER */}
      <motion.div
        className="mt-28 grid h-auto min-h-screen w-full grid-cols-1 gap-4 md:grid-cols-2"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* HEADER / LEFT SIDE */}
        <div className="mb-8 w-full p-2">
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
              className={`bold flex bg-gradient-to-r bg-clip-text bg-repeat-x p-2 text-4xl text-transparent md:text-4xl lg:text-5xl 
                ${
                  theme !== "light"
                    ? " from-yellow-300 via-amber-500 to-amber-400"
                    : " from-blue-950 via-slate-500 to-blue-900"
                }`}
            >
              <div className="mx-auto flex flex-wrap md:mx-0">
                <p className="pr-1 pt-1 font-prompt font-semibold">SILAN</p>
                <p className="p-1 font-prompt font-semibold">INDUSTRIES</p>
                <p className="mt-0 p-1 font-prompt text-base">(Pty) Ltd</p>
              </div>
            </div>

            {/* INTRODUCTION TEXT */}
            <h2 className="bold my-3 p-2 font-prompt text-2xl font-medium md:text-2xl lg:text-4xl">
              TOOLING DESIGN & SIMULATION
            </h2>

            {/* INTRODUCTION TEXT */}
            <p className="my-3 p-2 text-sm md:text-base">
              Spacialists in the design of automotive assembly systems, robotic
              applications and special purpose tooling.
            </p>
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            className="flex content-center justify-center p-2 text-center"
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
                className="bg-amber-300 font-bold text-zinc-800 shadow-md hover:bg-slate-200"
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
            className="w-8/9 align-center relative mx-auto justify-center"
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
              className="absolute right-10 top-10 z-30 rotate-6"
              alt="home-pageGraphic"
              src={Graphic}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
