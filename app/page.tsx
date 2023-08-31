"use client"

import React, { useEffect, useState } from "react"

import { SelectedPage } from "@/types/types"
import ContactUs from "@/components/sections/ContactUs"
import Home from "@/components/sections/Home"
import Navbar from "@/components/sections/NavBar"
import Projects from "@/components/sections/Projects"
import Services from "@/components/sections/Services"

export default function IndexPage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="items-center">
      <div className="grid grid-cols-1 w-full">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Services setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
      </div>
    </div>
  )
}
