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
      className="z-40 mx-auto flex h-auto min-h-screen w-full bg-slate-400/10 p-5 md:p-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        className="mx-auto mt-16 h-auto w-full"
      >
        <h1 className="mb-5 font-prompt text-2xl font-bold md:text-3xl">
          Services:
        </h1>
        <div className=" grid grid-cols-1">
          {/* SERVICES */}
          <div className="mb-8 grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="mb-2 text-lg font-bold">Process & CAD Design:</h1>
              <p className="mb-5">
                With proficiencies in Siemens NX Unigraphics and Dassault
                SolidWorks, we offer 3D CAD Design, 2D Documentation as well as
                Process Design for a wide variety of automotive engineering
                solutions including assembly, welding and checking fixtures.
              </p>
              <p>
                We are also able to conceptualise equipment processes and
                budgets during the tendering phase of your project to better
                assist your team and help them achieve a competitive agreement
                with your customers.
              </p>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="mb-2 text-lg font-bold">Project Management:</h1>
              <p className="mb-5">
                Our project management service covers your project from
                budgeting to final realisation. This includes the overseeing of
                the following aspects of any given project.
              </p>
              <ul className="list-disc pl-5 text-left text-sm">
                <li>Drafting and finalising project specifications.</li>
                <li>CAPEX Budgeting.</li>
                <li>Procurement & managing of sub-contractors.</li>
                <li>Monitoring the project timing plan.</li>
                <li>Generating weekly status reports.</li>
                <li>Equipment buyoff as per customer standards.</li>
              </ul>
            </motion.div>
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="mb-2 text-lg font-bold">
                Manufacturing & Automation:
              </h1>
              <p className="mb-5">
                We have built strong relationships with a number of highly
                experienced local manufacturing & automation partners that
                support us with the following:
              </p>
              <ul className="list-disc pl-5 text-left text-sm">
                <li>Robot Simulation.</li>
                <li>Fabrication, Conventional & CNC Machining.</li>
                <li>Assembly & Measuring.</li>
                <li>Onsite Pre-acceptance.</li>
                <li>Installation & Commissioning.</li>
                <li>Electrical Design, Panel Build & PLC Programming</li>
                <li>Training & Production Support</li>
              </ul>
            </motion.div>
          </div>

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
              >
                <div className="group flex transition duration-500 hover:scale-95">
                  <Image
                    alt="design"
                    src={ServicesOne}
                    className="z-30 flex h-20 rounded-lg object-cover shadow-lg md:h-[10rem]"
                  />

                  <div className="absolute -left-2 -top-2 z-40 flex h-6 w-32 items-center justify-center rounded-lg bg-amber-300/90 shadow-lg transition duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 md:h-10 md:w-36">
                    <p className="flex p-2 text-center text-xs font-bold text-zinc-900 md:text-base">
                      From concept..
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-5">
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="group flex justify-center transition duration-500 hover:scale-95">
                    <Image
                      alt="process"
                      src={ServicesFive}
                      className="h-50 z-30 flex items-start justify-center rounded-lg object-cover shadow-lg md:h-[10rem]"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="group flex justify-center transition duration-500 hover:scale-95">
                    <Image
                      alt="process"
                      src={ServicesTwo}
                      className="h-50 z-30 flex items-start justify-center rounded-lg object-cover shadow-lg md:h-[10rem]"
                    />
                  </div>
                </motion.div>
              </div>
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
              <div className="group flex transition duration-500 hover:scale-95">
                <Image
                  alt="tooling"
                  src={ServicesFour}
                  className="z-30 flex h-60 rounded-lg object-cover shadow-lg md:h-[21.5rem]"
                />
                <div className="absolute -right-2 -top-2 z-40 flex h-6 w-32 items-center justify-center rounded-lg bg-amber-300/90 shadow-lg transition duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 md:h-10 md:w-36">
                  <p className="flex p-2 text-center text-xs font-bold text-zinc-900 md:text-base">
                    to production.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
