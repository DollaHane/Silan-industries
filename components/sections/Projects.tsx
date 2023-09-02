import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"

// COMPONENT Imports
import { SelectedPage } from "@/types/types"
import { cards } from "@/lib/data"

// IMAGE Imports
import ImageSkeleton from "../ui/ImageSkeleton"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Projects({ setSelectedPage }: Props) {
  return (
    <section
      id="projects"
      className="z-40 mx-auto flex h-[100vh] w-full p-5 md:p-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        className="mx-auto mt-16 h-auto w-full"
      >
        <h1 className="mb-5 font-prompt text-2xl font-bold md:text-3xl">
          Projects:
        </h1>
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
            className="h-9/12 mx-auto w-full"
            showArrows={true}
            infiniteLoop={true}
            stopOnHover={true}
            autoPlay={true}
            transitionTime={1000}
            interval={4000}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <button
                onClick={onClickHandler}
                className="absolute -left-3 top-[50%] z-40 h-10 w-10"
              >
                <ChevronLeft className="w-15 h-15 mx-auto" />
              </button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <button
                onClick={onClickHandler}
                className="absolute -right-3 top-[50%] z-40 h-10 w-10"
              >
                <ChevronRight className="w-15 h-15 mx-auto" />
              </button>
            )}
          >
            {cards.map((card) => (
              <div className="w-full justify-center">
                <div className="mx-auto flex w-full flex-wrap content-center justify-center gap-5 rounded-lg p-10">
                  <div className="w-6/12 min-w-[200px] transition duration-500 hover:scale-95 md:min-w-[350px]">
                    {
                      <Image
                        className="max-h-80 w-full rounded-2xl object-cover shadow-lg "
                        alt={card.title}
                        src={card.image}
                      />
                    }
                  </div>
                  <div className="h-full w-4/12 min-w-[200px] rounded-2xl bg-slate-200/20 px-3 shadow-lg">
                    <h1 className="mt-5 w-full text-left font-extrabold md:text-xl">
                      {card.title}
                    </h1>
                    <p className="md:text-md my-5 text-start text-sm">
                      {card.paragraph}
                    </p>
                    <ul className="md:text-md my-5 text-start text-sm">
                      {card.list.map((item: any, index: any) => (
                        <li key={index} className="flex gap-3">
                          <ChevronsRight />
                          <p>{item.para}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  )
}
