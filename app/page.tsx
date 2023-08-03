'use client'
import React, { useState, useEffect } from 'react'

import Navbar from '@/components/sections/NavBar'
import Home from '@/components/sections/Home'
import Services from '@/components/sections/Services'
import ContactUs from '@/components/sections/ContactUs'
import { SelectedPage } from '@/types/types'

export default function IndexPage() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    };
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="items-center">
      <div className="grid grid-cols-1 w-full">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Services setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
      </div>
    </div>
  )
}
