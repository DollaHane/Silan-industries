import React from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsRight } from "lucide-react"
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

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function ({ setSelectedPage }: Props) {
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
    <section id="projects" className="w-full h-[100vh] p-10 z-30">
      <div className="mt-20 w-full h-full mx-auto">
        <h1 className="my-5 px-5 font-bold font-prompt text-3xl">Projects:</h1>
        <Carousel
          className="w-full h-9/12 mx-auto"
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
              className="absolute w-10 h-10 top-[50%] -left-3 z-40"
            >
              <ChevronLeftIcon className="w-15 h-15 mx-auto" />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              onClick={onClickHandler}
              className="absolute w-10 h-10 top-[50%] -right-3 z-40"
            >
              <ChevronRightIcon className="w-15 h-15 mx-auto" />
            </button>
          )}
        >
          {cards.map((card) => (
            <div className="w-full justify-center">
              <h1 className="w-full text-xl text-center font-extrabold mt-5">
                {card.title}
              </h1>
              <div className="flex w-full flex-wrap gap-5 mx-auto content-center justify-center rounded-lg p-10">
                <div className="w-6/12 min-w-[350px] hover:transform hover:scale-95 transition duration-500">
                  <Image
                    className="w-full max-h-80 object-cover rounded-2xl shadow-lg "
                    alt={card.title}
                    src={card.image}
                  />
                </div>
                <div className="w-4/12 min-w-[200px] h-full rounded-2xl shadow-lg bg-slate-200 bg-opacity-20 px-3">
                  <p className="text-start my-5">{card.paragraph}</p>
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
