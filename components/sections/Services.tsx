import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Info } from "lucide-react"

import { SelectedPage } from "@/types/types"

import Automation from "../assets/Automation@1-1440x829.png"
import Design from "../assets/Design@1-1440x829.png"
import Manufacture from "../assets/Manufacturing@1-1440x829.png"
import ServicesFive from "../assets/ServicesFive.jpeg"
import ServicesFour from "../assets/ServicesFour.jpeg"
import ServicesOne from "../assets/ServicesOne.jpeg"
import ServicesTwo from "../assets/ServicesTwo.jpeg"
import Timing from "../assets/Timing@1-1440x829.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Services({ setSelectedPage }: Props) {
  return (
    <section
      id="services"
      className="z-40 mx-auto flex h-auto w-full p-5 md:p-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
        className="mx-auto mt-10 h-auto w-full"
      >
        <h1 className="mb-16 font-prompt text-2xl font-bold md:text-4xl">
          Services:
        </h1>

        {/* CARDS */}
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
          <div className="mb-16 flex w-full flex-wrap items-center justify-evenly">
            <Card className="transition duration-500 hover:scale-[0.95]">
              <CardHeader>
                <CardTitle>Process & CAD Design</CardTitle>
              </CardHeader>
              <CardContent className="relative flex">
                <Image
                  className="absolute -bottom-[100px] -right-0"
                  src={Design}
                  alt="design"
                  width={180}
                />
              </CardContent>
              <CardFooter className="relative flex h-10 w-full">
                <Dialog>
                  <DialogTrigger className="absolute bottom-2 left-2  flex h-10 w-10 items-center justify-center rounded-full transition duration-100 hover:scale-110 hover:text-amber-500">
                    <Info className="" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Process & CAD Design</DialogTitle>
                      <DialogDescription>
                        <p className="mb-5">
                          With proficiencies in Siemens NX Unigraphics and
                          Dassault SolidWorks, we offer 3D CAD Design, 2D
                          Documentation as well as Process Design for a wide
                          variety of automotive engineering solutions including
                          assembly, welding and checking fixtures.
                        </p>
                        <p>
                          We are also able to conceptualise equipment processes
                          and budgets during the tendering phase of your project
                          to better assist your team and help them achieve a
                          competitive agreement with your customers.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="transition duration-500 hover:scale-[0.95]">
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
              </CardHeader>
              <CardContent className="relative flex">
                <Image
                  className="absolute -bottom-[80px] -right-0"
                  src={Timing}
                  alt="timing"
                  width={190}
                />
              </CardContent>
              <CardFooter className="relative flex h-10 w-full">
                <Dialog>
                  <DialogTrigger className="absolute bottom-2 left-2  flex h-10 w-10 items-center justify-center rounded-full transition  duration-100 hover:scale-110 hover:text-amber-500">
                    <Info className="" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Project Management</DialogTitle>
                      <DialogDescription>
                        <p className="mb-5">
                          Our project management service covers your project
                          from budgeting to final realisation. This includes the
                          overseeing of the following aspects of any given
                          project.
                        </p>
                        <ul className="list-disc pl-5 text-left text-sm">
                          <li>
                            Drafting and finalising project specifications.
                          </li>
                          <li>CAPEX Budgeting.</li>
                          <li>Procurement & managing of sub-contractors.</li>
                          <li>Monitoring the project timing plan.</li>
                          <li>Generating weekly status reports.</li>
                          <li>Equipment buyoff as per customer standards.</li>
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="transition duration-500 hover:scale-[0.95]">
              <CardHeader>
                <CardTitle>Manufacturing</CardTitle>
              </CardHeader>
              <CardContent className="relative flex">
                <Image
                  className="absolute -bottom-[110px] -right-0"
                  src={Manufacture}
                  alt="manufacture"
                  width={180}
                />
              </CardContent>
              <CardFooter className="relative flex h-10 w-full">
                <Dialog>
                  <DialogTrigger className="absolute bottom-2 left-2  flex h-10 w-10 items-center justify-center rounded-full transition  duration-100 hover:scale-110 hover:text-amber-500">
                    <Info className="" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Manufacturing</DialogTitle>
                      <DialogDescription>
                        <p className="mb-5">
                          We have built strong relationships with a number of
                          highly experienced local manufacturing partners that
                          support us in the following areas:
                        </p>
                        <ul className="list-disc pl-5 text-left text-sm">
                          <li>Fabrication, Conventional & CNC Machining.</li>
                          <li>Assembly & Measuring.</li>
                          <li>Onsite Pre-acceptance.</li>
                          <li>Installation & Commissioning.</li>
                          <li>Maintenance & Production Support</li>
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card className="transition duration-500 hover:scale-[0.95]">
              <CardHeader>
                <CardTitle>Automation</CardTitle>
              </CardHeader>
              <CardContent className="relative flex">
                <Image
                  className="absolute -bottom-[80px] -right-0"
                  src={Automation}
                  alt="automation"
                  width={180}
                />
              </CardContent>
              <CardFooter className="relative flex h-10 w-full">
                <Dialog>
                  <DialogTrigger className="absolute bottom-2 left-2  flex h-10 w-10 items-center justify-center rounded-full transition  duration-100 hover:scale-110 hover:text-amber-500">
                    <Info className="" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Automation</DialogTitle>
                      <DialogDescription>
                        <p className="mb-5">
                          Our Automation partners have the programming
                          capabilities to perform a various number tasks which
                          include:
                        </p>
                        <ul className="list-disc space-y-1 pl-5 text-left text-sm">
                          <li>Robot Programming.</li>
                          <li>Robot Simulation.</li>
                          <li>Force and Distance Measuring.</li>
                          <li>Product Control and Handling.</li>
                          <li>
                            Pneumatic, Hydraulic and Electrical actuation.
                          </li>
                          <li>Intelligent Safety Systems.</li>
                          <li>
                            Supervisory Control and Data Acquisitioning (SCADA):
                          </li>
                          <ul className="space-y-1 pl-5 text-left text-xs">
                            <li>- Production Monitoring Diagnostics.</li>
                            <li>- HMI Systems.</li>
                            <li>- Traceability.</li>
                          </ul>
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </motion.div>

        {/* IMAGES */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
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
            <div className="group flex transition duration-500 hover:scale-[0.99]">
              <Image
                alt="design"
                src={ServicesOne}
                className="z-30 flex h-40 rounded-lg object-cover shadow-lg md:h-[15rem]"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
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
              <div className="group flex justify-center transition duration-500 hover:scale-[0.99]">
                <Image
                  alt="process"
                  src={ServicesTwo}
                  className=" z-30 flex h-40 items-start justify-center rounded-lg object-cover shadow-lg md:h-[15rem]"
                />
              </div>
            </motion.div>
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
              <div className="group flex justify-center transition duration-500 hover:scale-[0.99]">
                <Image
                  alt="process"
                  src={ServicesFive}
                  className="z-30 flex h-40 items-start justify-center rounded-lg object-cover shadow-lg md:h-[15rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
