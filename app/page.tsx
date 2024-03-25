"use client"

import React, { useEffect, useState } from "react"

import { SelectedPage } from "@/types/types"
import Footer from "@/components/Footer"
import About from "@/components/sections/About"
import ContactUs from "@/components/sections/ContactUs"
import Experience from "@/components/sections/Experience"
import Home from "@/components/sections/Home"
import Navbar from "@/components/sections/NavBar"
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
      <div className="grid w-full grid-cols-1">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        {/* <About setSelectedPage={setSelectedPage} /> */}
        <Services setSelectedPage={setSelectedPage} />
        <Experience setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </div>
  )
}
