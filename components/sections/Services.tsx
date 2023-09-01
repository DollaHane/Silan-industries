import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// COMPONENT Imports
import { SelectedPage } from "@/types/types"

// IMAGE Imports
import ServicesFive from "../assets/ServicesFive.jpeg"
import ServicesFour from "../assets/ServicesFour.jpeg"
import ServicesOne from "../assets/ServicesOne.jpeg"
import ServicesTwo from "../assets/ServicesTwo.jpeg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Services({ setSelectedPage }: Props) {
  return (
    <section
      id="services"
      className="z-30 h-full w-full bg-slate-400/10 p-10 "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        className="mt-20 h-auto min-h-screen w-full"
      >
        <h1 className="my-5 px-5 font-prompt text-3xl font-bold">Services:</h1>
        {/* SERVICES & IMAGES */}
        <div className=" grid grid-cols-1">
          {/* SERVICES */}
          <motion.div
            className="grid grid-cols-1 gap-5 p-5 text-center md:grid-cols-4 md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <h1 className="mb-2 text-lg font-bold">Process & CAD Design:</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus tortor sed lectus lacinia, sed sagittis nunc blandit.
                Morbi luctus, leo vitae ullamcorper tincidunt.
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-lg font-bold">Project Management:</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus tortor sed lectus lacinia, sed sagittis nunc blandit.
                Morbi luctus, leo vitae ullamcorper tincidunt.
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-lg font-bold">Measuring:</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus tortor sed lectus lacinia, sed sagittis nunc blandit.
                Morbi luctus, leo vitae ullamcorper tincidunt.
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-lg font-bold">
                Manufacturing & Automation:
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus tortor sed lectus lacinia, sed sagittis nunc blandit.
                Morbi luctus, leo vitae ullamcorper tincidunt.
              </p>
            </div>
          </motion.div>

          {/* IMAGES */}
          <motion.div
            className="h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="group flex justify-center transition duration-500 hover:scale-95">
                      <Image
                        alt="process"
                        src={ServicesFive}
                        className="h-50 z-30 flex items-start justify-center rounded-lg object-cover shadow-lg md:h-[10rem]"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="group flex justify-center transition duration-500 hover:scale-95">
                      <Image
                        alt="process"
                        src={ServicesTwo}
                        className="h-50 z-30 flex items-start justify-center rounded-lg object-cover shadow-lg md:h-[10rem]"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="group flex transition duration-500 hover:scale-95">
                    <Image
                      alt="design"
                      src={ServicesOne}
                      className="z-30 flex h-60 rounded-lg object-cover shadow-lg md:h-[10rem]"
                    />
                    <div className="absolute -left-2 -top-2 z-40 flex h-10 w-36 items-center justify-center rounded-lg bg-amber-300/90 shadow-lg transition duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <p className="text-md flex p-2 text-center font-bold text-zinc-900">
                        From concept..
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="group flex transition duration-500 hover:scale-95">
                  <Image
                    alt="tooling"
                    src={ServicesFour}
                    className="z-30 flex h-60 rounded-lg object-cover shadow-lg md:h-[21.5rem]"
                  />
                  <div className="absolute -right-2 -top-2 z-40 flex h-10 w-36 items-center justify-center rounded-lg bg-amber-300/90 shadow-lg transition duration-500 group-hover:-translate-x-1 group-hover:translate-y-1">
                    <p className="text-md flex p-2 text-center font-bold text-zinc-900">
                      to production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
