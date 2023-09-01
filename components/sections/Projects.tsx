import React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"

// COMPONENT Imports
import { SelectedPage } from "@/types/types"

// IMAGE Imports
import Project1 from "../assets/Project 1.png"
import Project2 from "../assets/Project 2.png"
import Project3 from "../assets/Project 3.png"
import Project4 from "../assets/Project 4.png"
import Project5 from "../assets/Project 5.png"
import Project7 from "../assets/Project 7.png"
import Project8 from "../assets/Project 8.png"
import ImageSkeleton from "../ui/ImageSkeleton"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Projects({ setSelectedPage }: Props) {
  const cards = [
    {
      index: 0,
      title: "Card One",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project1,
    },
    {
      index: 1,
      title: "Card Two",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project2,
    },
    {
      index: 2,
      title: "Card Three",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project3,
    },
    {
      index: 3,
      title: "Card Four",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project4,
    },
    {
      index: 4,
      title: "Card Five",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project5,
    },
    {
      index: 5,
      title: "Card Six",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project7,
    },
    {
      index: 6,
      title: "Card Seven",
      paragraph: "Tooling Description",
      list: [
        { para: "Bullet point one." },
        { para: "Bullet point two." },
        { para: "Bullet point three." },
      ],
      image: Project8,
    },
  ]

  return (
    <section id="projects" className="z-30 h-[100vh] w-full p-10">
      <div className="mx-auto mt-20 h-full w-full">
        <h1 className="my-5 px-5 font-prompt text-3xl font-bold">Projects:</h1>
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
              <h1 className="mt-5 w-full text-center text-xl font-extrabold">
                {card.title}
              </h1>
              <div className="mx-auto flex w-full flex-wrap content-center justify-center gap-5 rounded-lg p-10">
                <div className="w-6/12 min-w-[350px] transition duration-500 hover:scale-95">
                  {!card.image ? (
                    <div className="my-auto flex h-full w-full justify-center">
                      <ImageSkeleton />
                    </div>
                  ) : (
                    <Image
                      className="max-h-80 w-full rounded-2xl object-cover shadow-lg "
                      alt={card.title}
                      src={card.image}
                    />
                  )}
                </div>
                <div className="h-full w-4/12 min-w-[200px] rounded-2xl bg-slate-200/20 px-3 shadow-lg">
                  <p className="my-5 text-start">{card.paragraph}</p>
                  <ul className="my-5 text-start">
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
      </div>
    </section>
  )
}
