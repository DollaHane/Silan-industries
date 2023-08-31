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
      className="w-full h-full p-10 z-30 bg-slate-400 bg-opacity-10 "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        className="mt-20 w-full h-auto min-h-screen"
      >
        <h1 className="my-5 px-5 font-bold font-prompt text-3xl">
          Services:
        </h1>
        {/* SERVICES & IMAGES */}
        <div className=" grid grid-cols-1">
          {/* SERVICES */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5 text-center md:text-left"
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
              <h1 className="mb-2 text-lg font-bold">Manufacturing & Automation:</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="flex group hover:transform hover:scale-95 transition duration-500 justify-center">
                      <Image
                        alt="process"
                        src={ServicesFive}
                        className="flex h-50 md:h-[10rem] object-cover rounded-lg shadow-lg z-30 items-start justify-center"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex group hover:transform hover:scale-95 transition duration-500 justify-center">
                      <Image
                        alt="process"
                        src={ServicesTwo}
                        className="flex h-50 md:h-[10rem] object-cover rounded-lg shadow-lg z-30 items-start justify-center"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex group hover:transform hover:scale-95 transition duration-500">
                    <Image
                      alt="design"
                      src={ServicesOne}
                      className="flex h-60 md:h-[10rem] object-cover rounded-lg shadow-lg z-30"
                    />
                    <div className="absolute flex w-36 h-10 -top-2 -left-2 rounded-lg bg-amber-300 bg-opacity-80 z-40 shadow-lg items-center justify-center hover:transform group-hover:-translate-y-1 group-hover:-translate-x-1 transition duration-500">
                      <p className="flex text-zinc-900 text-md font-bold text-center p-2">
                        From concept..
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex group hover:transform hover:scale-95 transition duration-500">
                  <Image
                    alt="tooling"
                    src={ServicesFour}
                    className="flex h-60 md:h-[21.5rem] object-cover rounded-lg shadow-lg z-30"
                  />
                  <div className="absolute flex w-36 h-10 -top-2 -right-2 rounded-lg bg-amber-300 bg-opacity-80 z-40 shadow-lg items-center justify-center hover:transform group-hover:translate-y-1 group-hover:-translate-x-1 transition duration-500">
                    <p className="flex text-zinc-900 text-md font-bold text-center p-2">
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

/*
<div className='relative h-60'>
                <div className='group flex h-60 overflow-hidden rounded-br-[50px] rounded shadow-lg hover:transform hover:scale-110 transition duration-500'>
                  <Image
                    alt='tooling'
                    src={ServicesFour}
                    className='object-cover w-full h-full '
                  />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-full h-full opacity-70 hover:transform hover:bg-gradient-to-t from-slate-100 to-opacity-0 transition duration-500'>
                      <p className='w-full absolute bottom-5 text-zinc-900 text-xl font-bold opacity-0 group-hover:opacity-100 text-center'>...to production</p>
                    </div>
                  </div>
                </div>
              </div>
*/
