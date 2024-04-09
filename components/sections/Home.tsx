import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"
import useMediaQuery from "@/hooks/useMediaQuery"

import Graphic from "../assets/Graphic_2_2.png"
import Model from "../assets/Rugby.png"
import { Button } from "../Button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)")

  const { theme } = useTheme()

  return (
    <section
      id="home"
      className="z-40 h-auto min-h-screen w-full justify-center p-5 text-center md:p-20 md:text-left"
    >
      {/* IMAGE & HEADER */}
      <motion.div
        className="mt-20 grid w-full grid-cols-1 gap-4 md:mt-28 md:grid-cols-2"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* HEADER / LEFT SIDE */}
        <div className="mx-auto mb-8 h-full w-full">
          {/* HEADING LOGO & SLOGAN */}
          <motion.div
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
            <div className="bold flex bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text bg-repeat-x p-2 text-4xl text-transparent md:text-5xl lg:text-6xl">
              <div className="mx-auto flex flex-wrap md:mx-0">
                <p className="pr-1 pt-1 font-prompt font-semibold">SILAN</p>
                <p className="p-1 font-prompt font-semibold">INDUSTRIES</p>
                <span className="mt-0 p-1 font-prompt text-base">
                  (Pty) Ltd
                </span>
              </div>
            </div>

            {/* INTRODUCTION TEXT */}
            <h1 className="bold my-3 p-2 font-prompt text-2xl font-medium md:text-2xl lg:text-3xl">
            {/* RELOOK AT KEYWORDS */}
              AUTOMATED SYSTEMS ENGINEERING & SIMULATION
            </h1>

            {/* INTRODUCTION TEXT */}
            <h2 className="my-3 p-2 text-sm md:text-lg">
              {/* RELOOK AT KEYWORDS */}
              A level 1 B-BBEE engineering company specialising in the design of
              automated production systems, robotic applications and special
              purpose industrial processes.
            </h2>
            {/* ACTION BUTTONS */}
            <div className="flex content-center justify-center p-2 text-center">
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <Button
                  variant="outline"
                  className="mt-10 border border-transparent bg-zinc-800 font-bold text-zinc-100 shadow-md transition duration-200 hover:scale-[0.95] hover:border-transparent hover:text-zinc-100"
                >
                  LET&apos;S CONNECT
                </Button>
              </AnchorLink>
            </div>
          </motion.div>
        </div>

        {/* IMAGE / RIGHT SIDE */}
        <div className="flex w-full items-center justify-center">
          <motion.div
            className="align-center relative -top-5 mx-auto flex w-full max-w-[700px] justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              className=" z-40 mx-auto w-8/12 max-w-[70vw] md:w-10/12"
              alt="home-pageGraphic"
              src={Model}
            />
            <Image
              className="absolute right-2 top-16 z-30 mx-auto w-11/12 max-w-[70vw] md:w-full"
              alt="home-pageGraphic"
              src={Graphic}
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="mt-12 flex w-full items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex w-full max-w-[900px] flex-wrap items-center justify-center space-x-5">
          <h3 className="mb-5 flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-tr from-zinc-50 to-blue-50 px-5 font-semibold shadow-lg">
            Assembly & Testing Stations
          </h3>
          <h3 className="mb-5 flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-tr from-zinc-50 to-blue-50 px-5 font-semibold shadow-lg">
            Robot Applications
          </h3>
          <h3 className="mb-5 flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-tr from-zinc-50 to-blue-50 px-5 font-semibold shadow-lg">
            Super Structures
          </h3>
          <h3 className="mb-5 flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-tr from-zinc-50 to-blue-50 px-5 font-semibold shadow-lg">
            Special Purpose Tooling
          </h3>
          <h3 className="mb-5 flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-tr from-zinc-50 to-blue-50 px-5 font-semibold shadow-lg">
            Material Handling
          </h3>
          <h3 className="mb-5 flex h-10 w-auto items-center justify-center rounded-full bg-gradient-to-tr from-zinc-50 to-blue-50 px-5 font-semibold shadow-lg">
            Conveyor Systems
          </h3>
        </div>
      </motion.div>
    </section>
  )
}
