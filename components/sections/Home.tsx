import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "@/types/types"
import useMediaQuery from "@/hooks/useMediaQuery"

import Model from "../assets/ServicesFour.png"
import { Button } from "../Button"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)")

  return (
    <section
      id="home"
      className="h-auto md:h-screen w-full justify-center text-center md:text-left"
    >
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* HEADING LOGO & SLOGAN */}
        <motion.div
          className="z-30 mx-auto mb-8 mt-28 flex h-full w-full flex-col p-10"
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
          <div className="flex bg-gradient-to-r from-amber-500 via-amber-500 to-amber-400 bg-clip-text bg-repeat-x p-2  text-transparent ">
            <h1 className="my-3 p-2 font-prompt font-bold text-4xl md:text-5xl lg:text-6xl">
              AUTOMATED SYSTEMS ENGINEERING & SIMULATION
            </h1>
          </div>

          {/* INTRODUCTION TEXT */}
          <h2 className="my-3 md:text-lg">
            {/* RELOOK AT KEYWORDS */}Silan Industries is a level 1 B-BBEE engineering company
            specialising in the design of automated production systems, robotic
            applications and special purpose industrial processes.
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

        {/* IMAGE */}
        <motion.div
          className="z-10 flex h-44 md:h-screen w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image className="object-cover shadow-lg" alt="home-pageGraphic" src={Model} />
        </motion.div>
      </motion.div>
    </section>
  )
}
