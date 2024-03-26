import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"

// COMPONENT Imports
import { SelectedPage } from "@/types/types"
import { cards } from "@/lib/data"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Experience({ setSelectedPage }: Props) {
  return (
    <section
      id="experience"
      className="z-40 mx-auto flex h-auto w-full p-5 md:p-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
        className="mx-auto mt-10 h-auto w-full"
      >
        <h1 className="mb-5 font-prompt text-2xl font-bold md:text-4xl">
          Experience:
        </h1>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-sm md:text-lg">
            With more than 20 years experience in designing tooling and special
            purpose equipment in the automotive industry, we are capable of
            delivering a wide variety of engineering solutions to suite your
            individual needs. From small manual processes, to larger more
            complex automated systems that require that extra touch.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
            className="h-full w-full"
          >
            <CarouselContent className="ml-0 flex">
              {cards.map((card) => (
                <CarouselItem className="md:basis-1/1 min-w-[230px] lg:basis-1/2 xl:basis-1/3  2xl:basis-1/4 ">
                  <div className="w-full justify-center" key={card.title}>
                    <div className="mx-auto flex w-full flex-col content-center justify-center gap-5 rounded-lg p-10">
                      <div className="w-full transition duration-500 hover:scale-[0.99]">
                        <Image
                          className="h-60 w-full rounded-2xl object-cover shadow-lg "
                          alt={card.title}
                          src={card.image}
                        />
                      </div>
                      <div className="h-full w-full rounded-2xl bg-background px-3 shadow-lg">
                        <h1 className="mt-5 w-full text-left font-extrabold md:text-xl">
                          {card.title}
                        </h1>
                        <p className=" my-5 text-start text-sm">
                          {card.paragraph}
                        </p>
                        <ul className="my-5 text-start text-sm">
                          {card.list.map((item: any, index: any) => (
                            <li
                              key={index}
                              className="my-1 flex w-full justify-center"
                            >
                              <div className="w-full">
                                <p>{item.para}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="-left-0 border-transparent bg-zinc-800 text-zinc-100 hover:border-transparent"
            />
            <CarouselNext
              variant="outline"
              className="-right-5 border-transparent bg-zinc-800 text-zinc-100 hover:border-transparent"
            />
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  )
}
